import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // YEAR
      document.getElementById("year").textContent = new Date().getFullYear();

      // Smooth scroll for quick-create buttons
      document.querySelectorAll("[data-scroll-target]").forEach(function (btn) {
        btn.addEventListener("click", function () {
          var target = document.querySelector(btn.getAttribute("data-scroll-target"));
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        });
      });

      // Simple helper that falls back to local mode if backend is missing
      async function apiRequest(path, options) {
        try {
          const res = await fetch(path, Object.assign({
            headers: { "Content-Type": "application/json" }
          }, options));
          if (!res.ok) {
            const text = await res.text();
            throw new Error(text || ("Request failed: " + res.status));
          }
          const contentType = res.headers.get("content-type") || "";
          if (contentType.includes("application/json")) {
            return await res.json();
          }
          return null;
        } catch (err) {
          console.warn("Backend not available, using local storage where possible.", err);
          throw err;
        }
      }

      // Local storage helpers
      function loadLocalArray(key) {
        try {
          var raw = localStorage.getItem(key);
          return raw ? JSON.parse(raw) : [];
        } catch (e) {
          return [];
        }
      }
      function saveLocalArray(key, value) {
        try {
          localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {}
      }

      // OVERVIEW COUNTS
      async function loadOverview() {
        // Try backend first
        try {
          const data = await apiRequest("/api/overview", { method: "GET" });
          if (data) {
            var postsEl = document.getElementById("count-posts");
            var videosEl = document.getElementById("count-videos");
            var pollsEl = document.getElementById("count-polls");
            if (postsEl && typeof data.posts === "number") postsEl.textContent = data.posts;
            if (videosEl && typeof data.videos === "number") videosEl.textContent = data.videos;
            if (pollsEl && typeof data.polls === "number") pollsEl.textContent = data.polls;
            return;
          }
        } catch (e) {
          // fallback to local counts
        }
        var postsLocal = loadLocalArray("politera_posts");
        var videosLocal = loadLocalArray("politera_videos");
        var pollsLocal = loadLocalArray("politera_polls");
        var postsEl = document.getElementById("count-posts");
        var videosEl = document.getElementById("count-videos");
        var pollsEl = document.getElementById("count-polls");
        if (postsEl) postsEl.textContent = postsLocal.length;
        if (videosEl) videosEl.textContent = videosLocal.length;
        if (pollsEl) pollsEl.textContent = pollsLocal.length;
      }

      var refreshBtn = document.getElementById("refresh-overview");
      if (refreshBtn) {
        refreshBtn.addEventListener("click", function () {
          loadOverview();
        });
      }

      // POSTS
      var formPost = document.getElementById("form-post");
      var postFeedback = document.getElementById("post-feedback");
      var postList = document.getElementById("post-list");
      var postListEmpty = document.getElementById("post-list-empty");
      var btnPostDraft = document.getElementById("btn-post-draft");

      function showFeedback(el, msg, isError) {
        if (!el) return;
        el.textContent = msg;
        el.classList.remove("hidden");
        el.classList.toggle("text-rose-400", !!isError);
        el.classList.toggle("text-emerald-300", !isError);
      }

      function appendPostToList(post) {
        if (!postList || !post) return;
        if (postListEmpty) postListEmpty.classList.add("hidden");
        postList.classList.remove("hidden");
        var li = document.createElement("li");
        li.className = "flex items-start justify-between gap-2";
        var left = document.createElement("div");
        var title = document.createElement("p");
        title.className = "font-semibold";
        title.textContent = post.title || "Untitled";
        var meta = document.createElement("p");
        meta.className = "text-[0.7rem] text-slate-400";
        meta.textContent = (post.status || "published") + " • " + (post.createdAt || "just now");
        left.appendChild(title);
        left.appendChild(meta);
        var statusDot = document.createElement("span");
        statusDot.className = "mt-1 h-2 w-2 rounded-full bg-emerald-400";
        if (post.status === "draft") statusDot.className = "mt-1 h-2 w-2 rounded-full bg-slate-500";
        li.appendChild(left);
        li.appendChild(statusDot);
        postList.prepend(li);
      }

      // Load local posts into list on startup
      (function initLocalPosts() {
        var posts = loadLocalArray("politera_posts");
        if (posts.length && postList) {
          posts.forEach(function (p) { appendPostToList(p); });
          if (postListEmpty) postListEmpty.classList.add("hidden");
        }
      })();

      if (btnPostDraft) {
        btnPostDraft.addEventListener("click", async function () {
          if (!formPost) return;
          var title = document.getElementById("post-title").value.trim();
          var content = document.getElementById("post-content").value.trim();
          if (!title || !content) {
            showFeedback(postFeedback, "Please fill in both title and content before saving.", true);
            return;
          }
          btnPostDraft.disabled = true;

          var newPost = {
            id: Date.now(),
            title: title,
            content: content,
            status: "draft",
            createdAt: "just now"
          };

          // Try backend first, fall back to local storage
          try {
            var saved = await apiRequest("/api/posts", {
              method: "POST",
              body: JSON.stringify({ title: title, content: content, status: "draft" })
            });
            appendPostToList(saved || newPost);
            showFeedback(postFeedback, "Draft saved.", false);
          } catch (e) {
            var posts = loadLocalArray("politera_posts");
            posts.push(newPost);
            saveLocalArray("politera_posts", posts);
            appendPostToList(newPost);
            showFeedback(postFeedback, "Draft saved locally in this browser.", false);
          } finally {
            btnPostDraft.disabled = false;
            loadOverview();
          }
        });
      }

      if (formPost) {
        formPost.addEventListener("submit", async function (e) {
          e.preventDefault();
          var btn = document.getElementById("btn-post-publish");
          if (!btn) return;
          var title = document.getElementById("post-title").value.trim();
          var content = document.getElementById("post-content").value.trim();
          if (!title || !content) {
            showFeedback(postFeedback, "Please fill in both title and content before publishing.", true);
            return;
          }
          btn.disabled = true;

          var newPost = {
            id: Date.now(),
            title: title,
            content: content,
            status: "published",
            createdAt: "just now"
          };

          try {
            var created = await apiRequest("/api/posts", {
              method: "POST",
              body: JSON.stringify({ title: title, content: content, status: "published" })
            });
            appendPostToList(created || newPost);
            showFeedback(postFeedback, "Post published.", false);
          } catch (e) {
            var posts = loadLocalArray("politera_posts");
            posts.push(newPost);
            saveLocalArray("politera_posts", posts);
            appendPostToList(newPost);
            showFeedback(postFeedback, "Post saved locally as published (no backend detected).", false);
          } finally {
            formPost.reset();
            btn.disabled = false;
            loadOverview();
          }
        });
      }

      // VIDEOS
      var formVideo = document.getElementById("form-video");
      var videoFeedback = document.getElementById("video-feedback");
      var videoList = document.getElementById("video-list");
      var videoListEmpty = document.getElementById("video-list-empty");

      function appendVideoToList(video) {
        if (!videoList || !video) return;
        if (videoListEmpty) videoListEmpty.classList.add("hidden");
        videoList.classList.remove("hidden");
        var li = document.createElement("li");
        li.className = "flex items-center justify-between gap-2";
        var link = document.createElement("a");
        link.href = video.url || "#";
        link.target = "_blank";
        link.className = "truncate hover:text-sky-300";
        link.textContent = video.url || "Video";
        var meta = document.createElement("span");
        meta.className = "text-[0.7rem] text-slate-400";
        meta.textContent = video.createdAt || "just now";
        li.appendChild(link);
        li.appendChild(meta);
        videoList.prepend(li);
      }

      // Load local videos on startup
      (function initLocalVideos() {
        var videos = loadLocalArray("politera_videos");
        if (videos.length && videoList) {
          videos.forEach(function (v) { appendVideoToList(v); });
          if (videoListEmpty) videoListEmpty.classList.add("hidden");
        }
      })();

      if (formVideo) {
        formVideo.addEventListener("submit", async function (e) {
          e.preventDefault();
          var btn = document.getElementById("btn-video-attach");
          if (!btn) return;
          var url = document.getElementById("video-url").value.trim();
          if (!url) {
            showFeedback(videoFeedback, "Please paste a YouTube URL first.", true);
            return;
          }
          btn.disabled = true;

          var newVideo = {
            id: Date.now(),
            url: url,
            createdAt: "just now"
          };

          try {
            var created = await apiRequest("/api/videos", {
              method: "POST",
              body: JSON.stringify({ url: url })
            });
            appendVideoToList(created || newVideo);
            showFeedback(videoFeedback, "Video attached.", false);
          } catch (e) {
            var videos = loadLocalArray("politera_videos");
            videos.push(newVideo);
            saveLocalArray("politera_videos", videos);
            appendVideoToList(newVideo);
            showFeedback(videoFeedback, "Video attached locally in this browser.", false);
          } finally {
            formVideo.reset();
            btn.disabled = false;
            loadOverview();
          }
        });
      }

      // POLLS
      var formPoll = document.getElementById("form-poll");
      var pollFeedback = document.getElementById("poll-feedback");
      var pollOptionsContainer = document.getElementById("poll-options");
      var btnPollAddOption = document.getElementById("btn-poll-add-option");
      var pollPreviewEmpty = document.getElementById("poll-preview-empty");
      var pollPreview = document.getElementById("poll-preview");
      var pollPreviewQuestion = document.getElementById("poll-preview-question");
      var pollPreviewOptions = document.getElementById("poll-preview-options");
      var pollStatus = document.getElementById("poll-status");

      if (btnPollAddOption && pollOptionsContainer) {
        btnPollAddOption.addEventListener("click", function () {
          var input = document.createElement("input");
          input.type = "text";
          input.name = "options[]";
          input.placeholder = "Another option";
          input.className = "w-full rounded-md border border-slate-800 bg-slate-900/70 text-sm text-slate-100 placeholder-slate-500 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-emerald-500/70 focus:border-emerald-500/70";
          input.style.fontSize = "0.875rem";
          pollOptionsContainer.appendChild(input);
          input.focus();
        });
      }

      function updatePollPreview(poll) {
        if (!pollPreview || !pollPreviewQuestion || !pollPreviewOptions) return;
        pollPreviewQuestion.textContent = poll.question || "";
        pollPreviewOptions.innerHTML = "";
        (poll.options || []).forEach(function (opt) {
          var li = document.createElement("li");
          li.className = "flex items-center gap-2";
          var dot = document.createElement("span");
          dot.className = "h-1.5 w-1.5 rounded-full bg-slate-500";
          var text = document.createElement("span");
          text.textContent = opt;
          li.appendChild(dot);
          li.appendChild(text);
          pollPreviewOptions.appendChild(li);
        });
        pollPreviewEmpty.classList.add("hidden");
        pollPreview.classList.remove("hidden");
        if (pollStatus) {
          var label = pollStatus.querySelector("span");
          if (label) label.textContent = "Live poll created";
        }
      }

      // Load last poll from local storage
      (function initLocalPoll() {
        var polls = loadLocalArray("politera_polls");
        if (polls.length) {
          updatePollPreview(polls[polls.length - 1]);
        }
      })();

      if (formPoll) {
        formPoll.addEventListener("submit", async function (e) {
          e.preventDefault();
          var btn = document.getElementById("btn-poll-launch");
          if (!btn) return;
          var question = document.getElementById("poll-question").value.trim();
          var duration = document.getElementById("poll-duration").value;
          var visibility = document.getElementById("poll-visibility").value;
          var optionInputs = formPoll.querySelectorAll("input[name='options[]']");
          var options = [];
          optionInputs.forEach(function (inp) {
            var val = inp.value.trim();
            if (val) options.push(val);
          });
          if (!question || options.length < 2) {
            showFeedback(pollFeedback, "Please set a question and at least two options.", true);
            return;
          }
          btn.disabled = true;

          var newPoll = {
            id: Date.now(),
            question: question,
            options: options,
            duration: duration,
            visibility: visibility,
            createdAt: "just now"
          };

          try {
            var created = await apiRequest("/api/polls", {
              method: "POST",
              body: JSON.stringify({ question: question, options: options, duration: duration, visibility: visibility })
            });
            updatePollPreview(created || newPoll);
            showFeedback(pollFeedback, "Poll launched.", false);
          } catch (e) {
            var polls = loadLocalArray("politera_polls");
            polls.push(newPoll);
            saveLocalArray("politera_polls", polls);
            updatePollPreview(newPoll);
            showFeedback(pollFeedback, "Poll stored locally (no backend detected).", false);
          } finally {
            btn.disabled = false;
            loadOverview();
          }
        });
      }

      // Initial load
      loadOverview();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">

<header className="border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur">
<div className="flex gap-4 sm:px-4 lg:px-6 max-w-6xl mr-auto ml-auto pt-3 pr-3 pb-3 pl-3 gap-x-4 gap-y-4 items-center justify-between">

<div className="flex items-center gap-2">
<div className="inline-flex items-center justify-center rounded-md bg-blue-500/10 border border-blue-400/30 text-blue-300 h-8 w-8 text-sm tracking-tight font-semibold font-sans">
              P
            </div>
<div className="flex flex-col leading-tight">
<span className="text-lg sm:text-xl tracking-tight font-semibold text-neutral-50 font-sans">
                Politera
              </span>
<span className="text-xs sm:text-sm text-neutral-400 font-sans">
                Civic content &amp; polls hub
              </span>
</div>
</div>

<nav className="hidden md:flex items-center gap-3 lg:gap-5 text-sm">
<button className="inline-flex items-center gap-1.5 text-neutral-200 hover:text-neutral-50 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:layout-dashboard" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></g></svg>
<span className="font-sans">Overview</span>
</button>
<button className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-neutral-100 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:file-text" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
<span>Posts</span>
</button>
<button className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-neutral-100 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide w-[18px] h-[18px]" data-height="18" data-icon="lucide:youtube" data-width="18" height="18" role="img" strokeWidth="2" style={{strokeWidth: '1.5', color: 'rgb(241, 245, 249)', width: '18px', height: '18px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
<span className="font-sans">Videos</span>
</button>
<button className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-neutral-100 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:bar-chart-3" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18m-3-4V9m-5 8V5M8 17v-3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-sans">Polls</span>
</button>
<button className="inline-flex items-center gap-1.5 text-neutral-400 hover:text-neutral-100 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:users" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<span className="font-sans">Community</span>
</button>
</nav>

<div className="flex items-center gap-2 sm:gap-3">
<button className="hidden sm:inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-300 hover:text-neutral-50 transition-colors">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:help-circle" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01"></path></g></svg>
<span className="font-sans">Guide</span>
</button>
<button className="inline-flex items-center justify-center h-9 rounded-md border border-neutral-700/80 bg-neutral-900/70 hover:bg-neutral-800/80 text-xs sm:text-sm text-neutral-100 px-3 sm:px-4 transition-colors font-sans" id="quick-new-item">
<svg aria-hidden="true" className="iconify mr-1 hidden sm:inline iconify--lucide" data-height="18" data-icon="lucide:plus" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
              New item
            </button>

<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-700/80 bg-neutral-900/70 hover:bg-neutral-800/80">
<svg aria-hidden="true" className="iconify text-slate-100 iconify--lucide" data-height="18" data-icon="lucide:menu" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</header>

<main className="flex-1">
<div className="sm:py-8 lg:py-10 sm:px-4 lg:px-6 sm:space-y-8 max-w-6xl mr-auto ml-auto pt-6 pr-3 pb-6 pl-3 space-y-6">

<section className="grid gap-5 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-start">

<div className="space-y-4 sm:space-y-5">
<div>
<h1 className="sm:text-3xl lg:text-4xl text-2xl font-medium text-neutral-50 tracking-tight font-manrope">
                  Welcome to Politera
                </h1>
<p className="mt-2 text-base sm:text-lg text-neutral-300 max-w-2xl font-sans">
                  Upload posts, feature YouTube content, and launch interactive polls in one clean, user‑friendly dashboard.
                </p>
</div>

<div className="rounded-xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900/60 to-neutral-950/90 shadow-sm shadow-neutral-950/40 p-4 sm:p-5 space-y-4">
<h2 className="text-base sm:text-lg tracking-tight font-semibold text-neutral-50 font-sans">
                  Create something new
                </h2>
<div className="grid gap-3 sm:grid-cols-3">

<button className="group rounded-lg border border-neutral-800 bg-neutral-900/70 hover:border-blue-500/70 hover:bg-neutral-900/90 transition-colors px-3 sm:px-4 py-3 text-left flex items-start gap-3" data-scroll-target="#post-section">
<div className="mt-0.5">
<svg aria-hidden="true" className="iconify text-violet-300 group-hover:text-violet-200 iconify--lucide" data-height="18" data-icon="lucide:file-pen-line" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m18.226 5.226l-2.52-2.52A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.351"></path><path d="M21.378 12.626a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506zM8 18h1"></path></g></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-neutral-100 font-sans">
                        Post
                      </div>
<div className="text-xs text-neutral-400 mt-0.5 font-sans">
                        Share articles, updates, and civic insights.
                      </div>
</div>
</button>

<button className="group rounded-lg border border-neutral-800 bg-neutral-900/70 hover:border-cyan-500/70 hover:bg-neutral-900/90 transition-colors px-3 sm:px-4 py-3 text-left flex items-start gap-3" data-scroll-target="#video-section">
<div className="mt-0.5">
<svg aria-hidden="true" className="iconify text-rose-300 group-hover:text-rose-200 iconify--lucide" data-height="18" data-icon="lucide:youtube" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15l5-3l-5-3z"></path></g></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-neutral-100 font-sans">
                        YouTube video
                      </div>
<div className="text-xs text-neutral-400 mt-0.5 font-sans">
                        Highlight political analysis and interviews.
                      </div>
</div>
</button>

<button className="group rounded-lg border border-neutral-800 bg-neutral-900/70 hover:border-indigo-500/70 hover:bg-neutral-900/90 transition-colors px-3 sm:px-4 py-3 text-left flex items-start gap-3" data-scroll-target="#poll-section">
<div className="mt-0.5">
<svg aria-hidden="true" className="iconify text-emerald-300 group-hover:text-emerald-200 iconify--lucide" data-height="18" data-icon="lucide:bar-chart-2" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6m7 6V3m7 18V9" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-neutral-100 font-sans">
                        Poll
                      </div>
<div className="text-xs text-neutral-400 mt-0.5 font-sans">
                        Ask your audience, measure public sentiment.
                      </div>
</div>
</button>
</div>
</div>
</div>

<aside className="rounded-xl border border-neutral-800/80 bg-neutral-950/70 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between gap-2">
<div>
<h2 className="text-base sm:text-lg tracking-tight font-semibold text-neutral-50 font-sans">
                    Dashboard overview
                  </h2>
<p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
                    Keep track of what you publish on Politera.
                  </p>
</div>
<button className="inline-flex items-center gap-1.5 text-xs text-neutral-300 hover:text-neutral-50" id="refresh-overview">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:refresh-ccw" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21 12a9 9 0 0 0-9-9a9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5m-5 4a9 9 0 0 0 9 9a9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 16h5v5"></path></g></svg>
<span className="font-sans">Refresh</span>
</button>
</div>
<div className="grid grid-cols-3 gap-3">

<div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-3">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400 font-sans">
                      Posts
                    </span>
<svg aria-hidden="true" className="iconify text-violet-300 iconify--lucide" data-height="16" data-icon="lucide:file-text" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5M10 9H8m8 4H8m8 4H8"></path></g></svg>
</div>
<div className="mt-1 text-xl tracking-tight font-semibold text-neutral-50 font-sans" id="count-posts">
                    0
                  </div>
<div className="mt-0.5 text-[0.65rem] text-neutral-500 font-sans">
                    Start by creating your first article.
                  </div>
</div>

<div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-3">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400 font-sans">
                      Videos
                    </span>
<svg aria-hidden="true" className="iconify text-rose-300 iconify--lucide" data-height="16" data-icon="lucide:play-circle" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div className="mt-1 text-xl tracking-tight font-semibold text-neutral-50 font-sans" id="count-videos">
                    0
                  </div>
<div className="mt-0.5 text-[0.65rem] text-neutral-500 font-sans">
                    Add YouTube links to feature content.
                  </div>
</div>

<div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-3">
<div className="flex items-center justify-between">
<span className="text-xs text-neutral-400 font-sans">
                      Polls
                    </span>
<svg aria-hidden="true" className="iconify text-emerald-300 iconify--lucide" data-height="16" data-icon="lucide:pie-chart" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.21 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
</div>
<div className="mt-1 text-xl tracking-tight font-semibold text-neutral-50 font-sans" id="count-polls">
                    0
                  </div>
<div className="mt-0.5 text-[0.65rem] text-neutral-500 font-sans">
                    Launch polls to engage your audience.
                  </div>
</div>
</div>
<div className="rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 flex items-center justify-between gap-3">
<div>
<p className="text-xs sm:text-sm text-neutral-300 font-sans">
                    Tip: you can manage posts, videos, and polls independently, but still keep everything in one timeline.
                  </p>
</div>
</div>
</aside>
</section>

<section className="grid gap-5 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1.1fr)] items-start">

<div className="space-y-5">

<div className="rounded-xl border border-neutral-800/80 bg-neutral-950/70 p-4 sm:p-5 space-y-4" id="post-section">
<div className="flex items-center justify-between gap-3">
<div>
<h2 className="text-base sm:text-lg tracking-tight font-semibold text-neutral-50 font-sans">
                      Posts
                    </h2>
<p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
                      Long-form ideas, opinion pieces, fact-checks, and updates.
                    </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-blue-500/70 bg-blue-500/10 hover:bg-blue-500/20 text-xs sm:text-sm text-blue-100 px-3 py-1.5" data-scroll-target="#post-section">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:plus" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-sans">New post</span>
</button>
</div>

<form className="space-y-3" id="form-post">
<div className="space-y-1.5">
<label className="text-xs sm:text-sm text-neutral-300 font-sans">
                      Title
                    </label>
<input className="w-full rounded-md border border-neutral-800 bg-neutral-900/70 text-sm text-neutral-100 placeholder-neutral-500 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500/70 focus:border-blue-500/70" id="post-title" name="title" placeholder="e.g. Why local elections matter more than ever" required="" style={{fontSize: '0.875rem'}} type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs sm:text-sm text-neutral-300 font-sans">
                      Content
                    </label>
<textarea className="w-full rounded-md border border-neutral-800 bg-neutral-900/70 text-sm text-neutral-100 placeholder-neutral-500 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500/70 focus:border-blue-500/70 resize-y" id="post-content" name="content" placeholder="Write your analysis, context, or commentary..." required="" rows="4" style={{fontSize: '0.875rem'}}></textarea>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-[0.7rem] text-neutral-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:info" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4m0-4h.01"></path></g></svg>
<span className="font-sans">Drafts are stored in this browser once you click Save draft.</span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-700 bg-neutral-900/70 hover:bg-neutral-800/70 text-xs text-neutral-200 px-3 py-1.5" id="btn-post-draft" type="button">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:save" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z"></path><path d="M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7M7 3v4a1 1 0 0 0 1 1h7"></path></g></svg>
<span className="font-sans">Save draft</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-blue-500 bg-blue-500 hover:bg-blue-400 text-xs text-neutral-950 px-3 py-1.5 font-medium" id="btn-post-publish" type="submit">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:send" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-sans">Publish</span>
</button>
</div>
</div>
<p className="text-[0.7rem] text-neutral-400 mt-1 hidden font-sans" id="post-feedback"></p>
</form>

<div className="border-t border-neutral-800/80 pt-3 mt-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs sm:text-sm text-neutral-300 font-sans">
                      Recent posts
                    </span>
<button className="text-[0.7rem] text-neutral-400 hover:text-neutral-200 font-sans">
                      View all
                    </button>
</div>
<div className="rounded-md border border-dashed border-neutral-800 bg-neutral-900/40 p-3 text-xs sm:text-sm text-neutral-400 font-sans" id="post-list-empty">
                    You don't have any posts yet. Start by drafting your first article above.
                  </div>
<ul className="space-y-2 text-xs sm:text-sm text-neutral-200 font-sans hidden" id="post-list"></ul>
</div>
</div>

<div className="rounded-xl border border-neutral-800/80 bg-neutral-950/70 p-4 sm:p-5 space-y-4" id="video-section">
<div className="flex items-center justify-between gap-3">
<div>
<h2 className="text-base sm:text-lg tracking-tight font-semibold text-neutral-50 font-sans">
                      YouTube videos
                    </h2>
<p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
                      Attach videos from your channel or others you want to highlight.
                    </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-cyan-500/70 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs sm:text-sm text-cyan-100 px-3 py-1.5" data-scroll-target="#video-section">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:plus" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-sans">Add video</span>
</button>
</div>

<form className="space-y-3" id="form-video">
<div className="space-y-1.5">
<label className="text-xs sm:text-sm text-neutral-300 font-sans">
                      YouTube URL
                    </label>
<input className="w-full rounded-md border border-neutral-800 bg-neutral-900/70 text-sm text-neutral-100 placeholder-neutral-500 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-cyan-500/70 focus:border-cyan-500/70" id="video-url" name="url" placeholder="https://www.youtube.com/watch?v=..." required="" style={{fontSize: '0.875rem'}} type="url"/>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-[0.7rem] text-neutral-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:link" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></g></svg>
<span className="font-sans">Only the link is stored; videos stay on YouTube.</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-cyan-500 bg-cyan-500 hover:bg-cyan-400 text-xs text-neutral-950 px-3 py-1.5 font-medium" id="btn-video-attach" type="submit">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:check" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-sans">Attach</span>
</button>
</div>
<p className="text-[0.7rem] text-neutral-400 mt-1 hidden font-sans" id="video-feedback"></p>
</form>

<div className="border-t border-neutral-800/80 pt-3 mt-2 space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs sm:text-sm text-neutral-300 font-sans">
                      Featured videos
                    </span>
<button className="text-[0.7rem] text-neutral-400 hover:text-neutral-200 font-sans">
                      Manage
                    </button>
</div>
<div className="rounded-md border border-dashed border-neutral-800 bg-neutral-900/40 p-3 text-xs sm:text-sm text-neutral-400 font-sans" id="video-list-empty">
                    No videos yet. Paste a YouTube link above to feature it on Politera.
                  </div>
<ul className="space-y-2 text-xs sm:text-sm text-neutral-200 font-sans hidden" id="video-list"></ul>
</div>
</div>
</div>

<div className="space-y-5">

<div className="rounded-xl border border-neutral-800/80 bg-neutral-950/70 p-4 sm:p-5 space-y-4" id="poll-section">
<div className="flex items-center justify-between gap-3">
<div>
<h2 className="text-base sm:text-lg tracking-tight font-semibold text-neutral-50 font-sans">
                      Polls
                    </h2>
<p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
                      Create polls to understand what your community thinks.
                    </p>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-indigo-500/70 bg-indigo-500/10 hover:bg-indigo-500/20 text-xs sm:text-sm text-indigo-100 px-3 py-1.5" data-scroll-target="#poll-section">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:plus" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7v14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-sans">New poll</span>
</button>
</div>

<form className="space-y-3" id="form-poll">
<div className="space-y-1.5">
<label className="text-xs sm:text-sm text-neutral-300 font-sans">
                      Question
                    </label>
<input className="w-full rounded-md border border-neutral-800 bg-neutral-900/70 text-sm text-neutral-100 placeholder-neutral-500 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500/70 focus:border-indigo-500/70" id="poll-question" name="question" placeholder="What is the most important issue in your community right now?" required="" style={{fontSize: '0.875rem'}} type="text"/>
</div>
<div className="space-y-1.5">
<div className="flex items-center justify-between">
<label className="text-xs sm:text-sm text-neutral-300 font-sans">
                        Options
                      </label>
<button className="inline-flex items-center gap-1 text-[0.7rem] text-indigo-300 hover:text-indigo-200" id="btn-poll-add-option" type="button">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:plus-circle" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><path d="M8 12h8m-4-4v8"></path></g></svg>
<span className="font-sans">Add option</span>
</button>
</div>
<div className="space-y-2" id="poll-options">
<input className="w-full rounded-md border border-neutral-800 bg-neutral-900/70 text-sm text-neutral-100 placeholder-neutral-500 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500/70 focus:border-indigo-500/70" name="options[]" placeholder="Option 1" required="" style={{fontSize: '0.875rem'}} type="text"/>
<input className="w-full rounded-md border border-neutral-800 bg-neutral-900/70 text-sm text-neutral-100 placeholder-neutral-500 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500/70 focus:border-indigo-500/70" name="options[]" placeholder="Option 2" required="" style={{fontSize: '0.875rem'}} type="text"/>
<input className="w-full rounded-md border border-neutral-800 bg-neutral-900/70 text-sm text-neutral-100 placeholder-neutral-500 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500/70 focus:border-indigo-500/70" name="options[]" placeholder="Option 3 (optional)" style={{fontSize: '0.875rem'}} type="text"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div className="space-y-1.5">
<label className="text-xs sm:text-sm text-neutral-300 font-sans">
                        Closes in
                      </label>
<select className="w-full rounded-md border border-neutral-800 bg-neutral-900/70 text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500/70 focus:border-indigo-500/70" id="poll-duration" name="duration" style={{fontSize: '0.875rem'}}>
<option className="font-sans" value="24h">24 hours</option>
<option className="font-sans" value="3d">3 days</option>
<option className="font-sans" value="7d">7 days</option>
<option className="font-sans" value="custom">Custom</option>
</select>
</div>
<div className="space-y-1.5">
<label className="text-xs sm:text-sm text-neutral-300 font-sans">
                        Visibility
                      </label>
<select className="w-full rounded-md border border-neutral-800 bg-neutral-900/70 text-sm text-neutral-100 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500/70 focus:border-indigo-500/70" id="poll-visibility" name="visibility" style={{fontSize: '0.875rem'}}>
<option className="font-sans" value="public">Public</option>
<option className="font-sans" value="private">Private</option>
<option className="font-sans" value="unlisted">Unlisted</option>
</select>
</div>
</div>
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-[0.7rem] text-neutral-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:users" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<span className="font-sans">Share the poll link to collect responses.</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-indigo-500 bg-indigo-500 hover:bg-indigo-400 text-xs text-neutral-950 px-3 py-1.5 font-medium" id="btn-poll-launch" type="submit">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="16" data-icon="lucide:bar-chart-horizontal" data-width="16" height="16" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v18h18M7 16h8m-8-5h12M7 6h3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-sans">Launch poll</span>
</button>
</div>
<p className="text-[0.7rem] text-neutral-400 mt-1 hidden font-sans" id="poll-feedback"></p>
</form>
</div>

<div className="rounded-xl border border-neutral-800/80 bg-neutral-950/70 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between">
<h3 className="text-sm tracking-tight font-semibold text-neutral-50 font-sans">
                    Live poll preview
                  </h3>
<span className="inline-flex items-center gap-1 rounded-full border border-neutral-800 bg-neutral-900/60 text-[0.7rem] text-neutral-300 px-2 py-0.5" id="poll-status">
<svg aria-hidden="true" className="iconify text-emerald-300 iconify--lucide" data-height="14" data-icon="lucide:activity" data-width="14" height="14" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-sans">Waiting for first poll</span>
</span>
</div>
<div className="rounded-md border border-dashed border-neutral-800 bg-neutral-900/40 p-3 text-xs sm:text-sm text-neutral-400 font-sans" id="poll-preview-empty">
                  Once you create a poll, you'll see a live preview and results chart here.
                </div>
<div className="hidden space-y-2 text-xs sm:text-sm text-neutral-200 font-sans" id="poll-preview">
<p className="font-semibold" id="poll-preview-question"></p>
<ul className="space-y-1" id="poll-preview-options"></ul>
</div>
</div>
</div>
</section>
</div>
</main>

<footer className="border-t border-neutral-800/80 bg-neutral-950/95 mt-6">
<div className="max-w-6xl mx-auto py-6 sm:py-8 px-3 sm:px-4 lg:px-6 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1.2fr)] items-start">

<div className="space-y-3">
<h2 className="text-base sm:text-lg tracking-tight font-semibold text-neutral-50 font-sans">
              Contact
            </h2>
<p className="text-sm text-neutral-300 max-w-md font-sans">
              Politera is built to make civic conversations clearer, calmer, and more informed. Reach out if you want to collaborate or suggest improvements.
            </p>
<div className="space-y-2 text-xs sm:text-sm text-neutral-300">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-slate-300 iconify--lucide" data-height="18" data-icon="lucide:mail" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></g></svg>
<a className="hover:text-neutral-50 transition-colors font-sans" href="mailto:hello@politera.app">
                  hello@politera.app
                </a>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-slate-300 iconify--lucide" data-height="18" data-icon="lucide:globe-2" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"></path><circle cx="12" cy="12" r="10"></circle></g></svg>
<span className="text-neutral-400 font-sans">
                  Official site placeholder – this dashboard is your control center.
                </span>
</div>
</div>
</div>

<div className="space-y-3 md:text-right md:flex md:flex-col md:items-end">
<h2 className="text-base sm:text-lg tracking-tight font-semibold text-neutral-50 font-sans">
              Join the Politera team
            </h2>
<p className="text-sm text-neutral-300 max-w-md md:text-right font-sans">
              Help shape a better space for political discussion. Join the core team, contribute ideas, or support with research, content, or development.
            </p>
<div className="flex flex-col sm:flex-row md:justify-end gap-2 sm:gap-3 mt-1">

<a className="inline-flex items-center justify-center rounded-md border border-sky-500 bg-sky-500/10 hover:bg-sky-500/20 text-xs sm:text-sm text-sky-100 px-3 py-2 gap-1.5" href="https://t.me/your_politera_channel" target="_blank">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:send" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-sans">Join Telegram channel</span>
</a>

<button className="inline-flex items-center justify-center rounded-md border border-neutral-700 bg-neutral-900/80 hover:bg-neutral-800/80 text-xs sm:text-sm text-neutral-100 px-3 py-2 gap-1.5">
<svg aria-hidden="true" className="iconify iconify--lucide" data-height="18" data-icon="lucide:user-plus" data-width="18" height="18" role="img" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M19 8v6m3-3h-6"></path></g></svg>
<span className="font-sans">Become a collaborator</span>
</button>
</div>
<p className="text-[0.7rem] text-neutral-500 mt-2 font-sans">
              Tell people to say “Politera” in their message so you can spot them quickly.
            </p>
</div>
</div>
<div className="border-t border-neutral-800/80">
<div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
<p className="text-[0.7rem] text-neutral-500 font-sans">
              © <span className="font-sans" id="year">2025</span> Politera. All rights reserved.
            </p>
<div className="flex items-center gap-3 text-[0.7rem] text-neutral-500">
<button className="hover:text-neutral-300 font-sans">
                Terms
              </button>
<span className="w-[1px] h-3 bg-neutral-800"></span>
<button className="hover:text-neutral-300 font-sans">
                Privacy
              </button>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
