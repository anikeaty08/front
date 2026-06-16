import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init Lucide icons
      document.addEventListener("DOMContentLoaded", function () {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
        }
      });

      // Basic state
      const messagesEl = document.getElementById("messages");
      const introSectionEl = document.getElementById("intro-section");
      const inputEl = document.getElementById("user-input");
      const sendButton = document.getElementById("send-button");
      const chatScrollEl = document.getElementById("chat-scroll");
      const debugDrawer = document.getElementById("debug-drawer");
      const debugToggle = document.getElementById("debug-toggle");
      const debugClose = document.getElementById("debug-close");
      const debugJson = document.getElementById("debug-json");

      let isSending = false;
      let searchMode = "web"; // future: "workspace", "docs"
      let conversations = [];
      let activeConversationId = null;

      function scrollToBottom() {
        requestAnimationFrame(() => {
          chatScrollEl.scrollTop = chatScrollEl.scrollHeight;
        });
      }

      function createMessageElement({ role, content, sources, status }) {
        const wrapper = document.createElement("div");
        const isUser = role === "user";

        wrapper.className = "flex gap-3 sm:gap-4";

        const avatar = document.createElement("div");
        avatar.className =
          "mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md";
        if (isUser) {
          avatar.className +=
            " bg-slate-900 border border-slate-700 text-[0.7rem] font-semibold tracking-tight text-slate-100";
          avatar.textContent = "You";
        } else {
          avatar.className +=
            " bg-gradient-to-tr from-sky-500 to-violet-500 text-[0.7rem] font-semibold tracking-tight text-slate-950";
          avatar.textContent = "P";
        }

        const bubble = document.createElement("div");
        bubble.className = "flex-1 flex flex-col gap-2";

        const inner = document.createElement("div");
        inner.className =
          "inline-flex max-w-full rounded-2xl border px-3.5 py-2.5 text-sm sm:text-base font-medium leading-relaxed";
        if (isUser) {
          inner.className +=
            " bg-slate-900/80 border-slate-800 text-slate-50";
        } else {
          inner.className +=
            " bg-slate-950/90 border-slate-800 text-slate-100";
        }

        const contentEl = document.createElement("div");
        contentEl.className = "whitespace-pre-wrap";
        contentEl.textContent = content || "";

        inner.appendChild(contentEl);
        bubble.appendChild(inner);

        if (!isUser && status === "loading") {
          const thinking = document.createElement("div");
          thinking.className =
            "flex items-center gap-2 text-xs font-medium text-slate-500 mt-1";
          thinking.innerHTML =
            '<span class="inline-flex h-1.5 w-1.5 rounded-full bg-sky-400 animate-pulse"></span><span>Searching parallel.ai ...</span>';
          bubble.appendChild(thinking);
        }

        if (!isUser && sources && sources.length) {
          const sourcesEl = document.createElement("div");
          sourcesEl.className =
            "mt-2 flex flex-wrap gap-2 text-[0.7rem] font-medium";

          sources.slice(0, 4).forEach((s, idx) => {
            const tag = document.createElement("a");
            tag.href = s.url || "#";
            tag.target = "_blank";
            tag.rel = "noopener noreferrer";
            tag.className =
              "inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-950/90 px-2.5 py-1 text-slate-300 hover:border-slate-600 hover:bg-slate-900 transition-colors";
            tag.innerHTML = `<span class="inline-flex text-slate-400" data-lucide="link"></span><span>${s.title || "Source " + (idx + 1)}</span>`;
            sourcesEl.appendChild(tag);
          });

          bubble.appendChild(sourcesEl);
        }

        wrapper.appendChild(avatar);
        wrapper.appendChild(bubble);

        // Re-render icons within this element
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { "stroke-width": 1.5 }, icons: window.lucide.icons, nameAttr: "data-lucide" });
        }

        return { wrapper, contentEl, bubble };
      }

      function setInputEnabled(enabled) {
        isSending = !enabled;
        inputEl.disabled = !enabled;
        sendButton.disabled = !enabled || !inputEl.value.trim();
      }

      function createConversation(title) {
        const id = "conv_" + Date.now();
        const conversation = {
          id,
          title: title.slice(0, 80) || "New conversation",
          createdAt: new Date().toISOString(),
          messages: []
        };
        conversations.unshift(conversation);
        activeConversationId = id;
        renderConversationList();
        return conversation;
      }

      function getActiveConversation() {
        return conversations.find((c) => c.id === activeConversationId);
      }

      function renderConversationList() {
        const lists = [
          document.getElementById("conversation-list"),
          document.getElementById("conversation-list-mobile")
        ];
        lists.forEach((list) => {
          if (!list) return;
          list.innerHTML = "";
          conversations.forEach((conv) => {
            const item = document.createElement("button");
            item.className =
              "w-full flex items-center justify-between gap-2 rounded-md border border-transparent px-2.5 py-2 text-left text-xs font-medium text-slate-300 hover:bg-slate-900/70 hover:border-slate-800";
            if (conv.id === activeConversationId) {
              item.className =
                "w-full flex items-center justify-between gap-2 rounded-md border border-slate-700 bg-slate-900/90 px-2.5 py-2 text-left text-xs font-medium text-slate-50";
            }
            const left = document.createElement("div");
            left.className = "flex items-center gap-2";
            left.innerHTML =
              '<span class="inline-flex text-slate-500" data-lucide="message-circle"></span>';

            const title = document.createElement("span");
            title.className = "truncate";
            title.textContent = conv.title;

            left.appendChild(title);

            const right = document.createElement("span");
            right.className = "inline-flex text-slate-500";
            right.setAttribute("data-lucide", "chevron-right");

            item.appendChild(left);
            item.appendChild(right);

            item.addEventListener("click", () => {
              activeConversationId = conv.id;
              renderConversationList();
              renderConversationMessages();
              const mobileSidebar = document.getElementById("mobile-sidebar");
              if (mobileSidebar) {
                mobileSidebar.classList.add("hidden");
              }
            });

            list.appendChild(item);
          });

          if (window.lucide) {
            window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
          }
        });
      }

      function renderConversationMessages() {
        messagesEl.innerHTML = "";
        const conv = getActiveConversation();
        if (!conv || conv.messages.length === 0) {
          introSectionEl.classList.remove("hidden");
          return;
        }
        introSectionEl.classList.add("hidden");

        conv.messages.forEach((m) => {
          const msgEl = createMessageElement(m);
          messagesEl.appendChild(msgEl.wrapper);
        });
        scrollToBottom();
      }

      async function callParallelSearchAPI(query) {
        // Replace this mock implementation with your real parallel.ai call.
        // Example real call (adjust endpoint/auth/body as needed):
        //
        // const response = await fetch("https://api.parallel.ai/search", {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json",
        //     "Authorization": "Bearer YOUR_PARALLEL_API_KEY"
        //   },
        //   body: JSON.stringify({
        //     query,
        //     mode: searchMode,
        //     top_k: 5
        //   })
        // });
        //
        // if (!response.ok) throw new Error("parallel.ai error");
        // return await response.json();

        // Mocked response to keep this fully client-side:
        await new Promise((r) => setTimeout(r, 900));
        const mock = {
          answer:
            "Here is a synthesized answer from the parallel.ai search API. In your production app, this text would be generated from real-time web search results.",
          citations: [
            {
              title: "parallel.ai search API overview",
              url: "https://parallel.ai/docs/search-api"
            },
            {
              title: "Building retrieval-augmented chat experiences",
              url: "https://parallel.ai/blog/retrieval-augmented-chat"
            }
          ],
          meta: {
            mode: searchMode,
            latency_ms: 900,
            query_tokens: query.length
          }
        };
        return mock;
      }

      async function handleUserSubmit(text) {
        const trimmed = text.trim();
        if (!trimmed || isSending) return;

        setInputEnabled(false);
        inputEl.value = "";
        sendButton.disabled = true;

        let conv = getActiveConversation();
        if (!conv) {
          conv = createConversation(trimmed);
        }

        // User message
        const userMessage = {
          role: "user",
          content: trimmed,
          createdAt: new Date().toISOString()
        };
        conv.messages.push(userMessage);

        const userEl = createMessageElement(userMessage);
        messagesEl.appendChild(userEl.wrapper);
        introSectionEl.classList.add("hidden");
        scrollToBottom();

        // Assistant placeholder
        const asstMessage = {
          role: "assistant",
          content: "",
          createdAt: new Date().toISOString(),
          status: "loading",
          sources: []
        };
        conv.messages.push(asstMessage);

        const asstEl = createMessageElement({
          ...asstMessage,
          content: "Thinking...",
          status: "loading"
        });
        messagesEl.appendChild(asstEl.wrapper);
        scrollToBottom();

        try {
          const response = await callParallelSearchAPI(trimmed);

          // Update debug drawer JSON
          debugJson.textContent = JSON.stringify(response, null, 2);

          asstMessage.content = response.answer || "No answer returned.";
          asstMessage.status = "done";
          asstMessage.sources = response.citations || [];

          // Update UI for assistant
          const bubbleBody = asstEl.bubble.querySelector("div.whitespace-pre-wrap");
          if (bubbleBody) {
            bubbleBody.textContent = asstMessage.content;
          }
          const loadingText = asstEl.bubble.querySelector(
            ".text-xs.font-medium.text-slate-500.mt-1"
          );
          if (loadingText && loadingText.parentElement) {
            loadingText.parentElement.remove();
          }

          if (asstMessage.sources && asstMessage.sources.length) {
            const sourcesEl = document.createElement("div");
            sourcesEl.className =
              "mt-2 flex flex-wrap gap-2 text-[0.7rem] font-medium";
            asstMessage.sources.slice(0, 4).forEach((s, idx) => {
              const tag = document.createElement("a");
              tag.href = s.url || "#";
              tag.target = "_blank";
              tag.rel = "noopener noreferrer";
              tag.className =
                "inline-flex items-center gap-1 rounded-full border border-slate-800 bg-slate-950/90 px-2.5 py-1 text-slate-300 hover:border-slate-600 hover:bg-slate-900 transition-colors";
              tag.innerHTML = `<span class="inline-flex text-slate-400" data-lucide="link"></span><span>${s.title || "Source " + (idx + 1)}</span>`;
              sourcesEl.appendChild(tag);
            });
            asstEl.bubble.appendChild(sourcesEl);
          }

          if (window.lucide) {
            window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
          }

          // Update conversation title with first user message's first few words
          if (conv.messages.length === 2) {
            const words = trimmed.split(" ").slice(0, 6).join(" ");
            conv.title = words + (trimmed.split(" ").length > 6 ? "…" : "");
            renderConversationList();
          }
        } catch (err) {
          asstMessage.content =
            "There was an error contacting the parallel.ai search API. Please check your configuration and try again.";
          asstMessage.status = "error";
          const bubbleBody = asstEl.bubble.querySelector("div.whitespace-pre-wrap");
          if (bubbleBody) {
            bubbleBody.textContent = asstMessage.content;
          }
          const loadingText = asstEl.bubble.querySelector(
            ".text-xs.font-medium.text-slate-500.mt-1"
          );
          if (loadingText && loadingText.parentElement) {
            loadingText.parentElement.remove();
          }
        } finally {
          setInputEnabled(true);
          scrollToBottom();
        }
      }

      // Input behavior
      inputEl.addEventListener("input", () => {
        sendButton.disabled = !inputEl.value.trim() || isSending;
      });

      inputEl.addEventListener("keydown", (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
          e.preventDefault();
          handleUserSubmit(inputEl.value);
        }
      });

      sendButton.addEventListener("click", () => {
        handleUserSubmit(inputEl.value);
      });

      // Suggested prompts
      document.querySelectorAll("[data-suggested]").forEach((btn) => {
        btn.addEventListener("click", () => {
          const text = btn.getAttribute("data-suggested") || "";
          inputEl.value = text;
          sendButton.disabled = !text.trim();
          inputEl.focus();
        });
      });

      // New chat
      const newChatBtn = document.getElementById("new-chat-btn");
      if (newChatBtn) {
        newChatBtn.addEventListener("click", () => {
          const conv = createConversation("New conversation");
          conv.messages = [];
          messagesEl.innerHTML = "";
          introSectionEl.classList.remove("hidden");
          scrollToBottom();
        });
      }

      // Mobile sidebar
      const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
      const mobileSidebar = document.getElementById("mobile-sidebar");
      const mobileMenuClose = document.getElementById("mobile-menu-close");

      if (mobileMenuToggle && mobileSidebar && mobileMenuClose) {
        mobileMenuToggle.addEventListener("click", () => {
          mobileSidebar.classList.remove("hidden");
        });
        mobileMenuClose.addEventListener("click", () => {
          mobileSidebar.classList.add("hidden");
        });
        mobileSidebar.addEventListener("click", (e) => {
          if (e.target === mobileSidebar) {
            mobileSidebar.classList.add("hidden");
          }
        });
      }

      // Debug drawer
      if (debugToggle && debugDrawer && debugClose) {
        debugToggle.addEventListener("click", () => {
          debugDrawer.classList.toggle("hidden");
        });
        debugClose.addEventListener("click", () => {
          debugDrawer.classList.add("hidden");
        });
      }

      // Search mode toggle (stub)
      const searchModeToggle = document.getElementById("search-mode-toggle");
      if (searchModeToggle) {
        searchModeToggle.addEventListener("click", () => {
          if (searchMode === "web") {
            searchMode = "workspace";
            searchModeToggle.innerHTML =
              '<span class="inline-flex text-emerald-400" data-lucide="building-2"></span><span class="hidden sm:inline">Workspace</span><span class="sm:hidden">WS</span>';
          } else {
            searchMode = "web";
            searchModeToggle.innerHTML =
              '<span class="inline-flex text-sky-400" data-lucide="globe-2"></span><span class="hidden sm:inline">Web</span><span class="sm:hidden">W</span>';
          }
          if (window.lucide) {
            window.lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
          }
        });
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="flex h-full w-full">

<aside className="hidden lg:flex flex-col border-r border-slate-800 bg-slate-950/80 backdrop-blur-sm w-72">

<div className="flex items-center justify-between gap-3 px-4 py-4 border-b border-slate-800">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-sky-500 to-violet-500 text-xs font-semibold tracking-tight">
              P
            </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">
                Parallel Chat
              </span>
<span className="text-xs font-medium text-slate-400">
                Search · Reason · Act
              </span>
</div>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-900/80 px-2.5 py-1.5 text-xs font-medium text-slate-100 hover:bg-slate-800/80 hover:border-slate-600 transition-colors" id="new-chat-btn">
<span className="inline-flex" data-lucide="plus"></span>
<span>New</span>
</button>
</div>

<div className="flex-1 overflow-y-auto">
<div className="px-3 pt-3 pb-2">
<div className="flex items-center justify-between mb-2">
<span className="text-[0.75rem] font-medium uppercase tracking-[0.18em] text-slate-500">
                Today
              </span>
</div>
<div className="space-y-1.5" id="conversation-list">

</div>
</div>
</div>

<div className="border-t border-slate-800 px-3 py-3 flex flex-col gap-2">
<button className="flex items-center justify-between rounded-md border border-slate-800 bg-slate-900/70 px-2.5 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800/80 hover:border-slate-700 transition-colors">
<div className="flex items-center gap-2">
<div className="h-6 w-6 flex items-center justify-center rounded-full bg-slate-800 text-[0.7rem] font-semibold tracking-tight">
                PA
              </div>
<div className="flex flex-col">
<span className="text-xs font-medium text-slate-100">
                  Parallel Workspace
                </span>
<span className="text-[0.7rem] text-slate-500">
                  search@parallel.ai
                </span>
</div>
</div>
<span className="inline-flex text-slate-500" data-lucide="chevron-up"></span>
</button>
<div className="flex items-center justify-between">
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/50 px-2 py-1.5 text-[0.7rem] font-medium text-slate-300 hover:bg-slate-800/70 hover:border-slate-700 transition-colors">
<span className="inline-flex text-slate-400" data-lucide="settings-2"></span>
<span>Settings</span>
</button>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-900 bg-slate-950 px-2 py-1.5 text-[0.7rem] font-medium text-slate-500 hover:border-slate-800 hover:text-slate-300 transition-colors">
<span className="inline-flex" data-lucide="log-out"></span>
<span>Sign out</span>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col bg-gradient-to-b from-slate-950 via-slate-950 to-slate-950/95">

<header className="flex items-center justify-between border-b border-slate-800/80 px-3 sm:px-4 py-2.5">
<div className="flex items-center gap-2 sm:gap-3">
<button className="lg:hidden inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900/80 text-slate-200 hover:bg-slate-800/90" id="mobile-menu-toggle">
<span className="inline-flex" data-lucide="menu"></span>
</button>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">
                Parallel Search
              </span>
<span className="text-xs font-medium text-slate-500">
                Powered by parallel.ai search API
              </span>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<div className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/70 px-2.5 py-1.5">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
<span className="text-[0.7rem] font-medium text-slate-300">
                Connected
              </span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-slate-800 bg-slate-900/80 px-2.5 py-1.5 text-xs font-medium text-slate-200 hover:bg-slate-800/80">
<span className="inline-flex text-slate-300" data-lucide="database"></span>
<span>Sources</span>
</button>
</div>
</header>

<section className="flex-1 overflow-y-auto" id="chat-scroll">
<div className="max-w-3xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-6 sm:py-8 flex flex-col gap-6">

<div className="flex flex-col gap-4 sm:gap-6 pt-2 sm:pt-4" id="intro-section">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-gradient-to-tr from-sky-500 to-violet-500 flex items-center justify-center text-xs font-semibold tracking-tight">
                  P
                </div>
<div className="flex flex-col">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-50">
                    Ask anything across the web in real time
                  </h1>
<p className="mt-1 text-sm sm:text-base font-medium text-slate-400">
                    This assistant uses the parallel.ai search API to fetch live information and synthesize answers with citations.
                  </p>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
<button className="group flex flex-col items-start gap-1.5 rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-3 text-left hover:border-slate-600 hover:bg-slate-900/80 transition-colors" data-suggested="Summarize the latest research on large language models and retrieval-augmented generation.">
<div className="flex items-center gap-2">
<span className="inline-flex text-sky-400" data-lucide="sparkles"></span>
<span className="text-xs font-semibold tracking-tight text-slate-100">
                      Research summary
                    </span>
</div>
<p className="text-sm font-medium text-slate-400">
                    Summarize the latest research on large language models and retrieval-augmented generation.
                  </p>
</button>
<button className="group flex flex-col items-start gap-1.5 rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-3 text-left hover:border-slate-600 hover:bg-slate-900/80 transition-colors" data-suggested="Compare the pricing and features of the major vector database providers.">
<div className="flex items-center gap-2">
<span className="inline-flex text-violet-400" data-lucide="library"></span>
<span className="text-xs font-semibold tracking-tight text-slate-100">
                      Competitive analysis
                    </span>
</div>
<p className="text-sm font-medium text-slate-400">
                    Compare the pricing and features of the major vector database providers.
                  </p>
</button>
<button className="group flex flex-col items-start gap-1.5 rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-3 text-left hover:border-slate-600 hover:bg-slate-900/80 transition-colors" data-suggested="Find recent incident reports about production outages for AI infrastructure providers.">
<div className="flex items-center gap-2">
<span className="inline-flex text-emerald-400" data-lucide="radar"></span>
<span className="text-xs font-semibold tracking-tight text-slate-100">
                      Incident digging
                    </span>
</div>
<p className="text-sm font-medium text-slate-400">
                    Find recent incident reports about production outages for AI infrastructure providers.
                  </p>
</button>
<button className="group flex flex-col items-start gap-1.5 rounded-xl border border-slate-800 bg-slate-950/60 px-3.5 py-3 text-left hover:border-slate-600 hover:bg-slate-900/80 transition-colors" data-suggested="Generate a concise brief on the regulatory landscape for AI in the EU, with citations.">
<div className="flex items-center gap-2">
<span className="inline-flex text-amber-400" data-lucide="file-text"></span>
<span className="text-xs font-semibold tracking-tight text-slate-100">
                      Policy brief
                    </span>
</div>
<p className="text-sm font-medium text-slate-400">
                    Generate a concise brief on the regulatory landscape for AI in the EU, with citations.
                  </p>
</button>
</div>
</div>

<div className="flex flex-col gap-4 sm:gap-5" id="messages"></div>
</div>
</section>

<footer className="border-t border-slate-800/80 bg-gradient-to-t from-slate-950 via-slate-950/96 to-slate-950/90">
<div className="max-w-3xl mx-auto w-full px-3 sm:px-5 lg:px-8 py-3 sm:py-4">
<div className="flex flex-col gap-2 sm:gap-2.5">
<div className="flex items-end gap-2 sm:gap-3">
<div className="flex-1 relative">
<div className="group flex items-end gap-2 rounded-2xl border border-slate-800 bg-slate-950/80 px-3 py-2 sm:px-4 sm:py-2.5 shadow-[0_0_0_1px_rgba(15,23,42,0.4)] focus-within:border-slate-500 focus-within:shadow-[0_0_0_1px_rgba(148,163,184,0.7)] transition-all">
<textarea className="flex-1 resize-none bg-transparent outline-none border-none text-sm sm:text-base font-medium text-slate-50 placeholder:text-slate-600 max-h-32" id="user-input" placeholder="Ask anything across the web..." rows="1"></textarea>
<div className="flex items-center gap-1.5 sm:gap-2 pb-0.5">
<button className="hidden sm:inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-900/70 text-slate-300 hover:bg-slate-800 hover:border-slate-700 transition-colors" id="attach-button" title="Attach source or URL" type="button">
<span className="inline-flex" data-lucide="link-2"></span>
</button>
<button className="inline-flex h-8 items-center gap-1.5 rounded-full border border-slate-800 bg-slate-900/80 px-2.5 text-[0.7rem] font-medium text-slate-200 hover:bg-slate-800 hover:border-slate-700 transition-colors" id="search-mode-toggle" type="button">
<span className="inline-flex text-sky-400" data-lucide="globe-2"></span>
<span className="hidden sm:inline">Web</span>
<span className="sm:hidden">W</span>
</button>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-sky-500 text-slate-950 hover:bg-sky-400 disabled:bg-slate-800 disabled:text-slate-600 transition-colors" disabled="" id="send-button" type="button">
<span className="inline-flex" data-lucide="arrow-up"></span>
</button>
</div>
</div>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2 text-[0.7rem] font-medium text-slate-500">
<span className="inline-flex text-slate-500" data-lucide="info"></span>
<span>
                    This UI proxies your query to <span className="text-slate-300">parallel.ai search</span> and streams back synthesized answers with citations.
                  </span>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 rounded-full border border-slate-800 bg-slate-950/60 px-2.5 py-1 text-[0.7rem] font-medium text-slate-400 hover:bg-slate-900/90 hover:text-slate-200 transition-colors" id="debug-toggle" type="button">
<span className="inline-flex" data-lucide="terminal-square"></span>
<span>Show raw JSON</span>
</button>
</div>
</div>
</div>
</div>
</footer>
</main>
</div>

<div className="fixed inset-0 z-40 hidden lg:hidden" id="mobile-sidebar">
<div className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"></div>
<div className="absolute inset-y-0 left-0 w-72 bg-slate-950 border-r border-slate-800 flex flex-col">
<div className="flex items-center justify-between gap-3 px-4 py-4 border-b border-slate-800">
<div className="flex items-center gap-2">
<div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-tr from-sky-500 to-violet-500 text-xs font-semibold tracking-tight">
              P
            </div>
<div className="flex flex-col">
<span className="text-sm font-semibold tracking-tight text-slate-50">
                Parallel Chat
              </span>
<span className="text-xs font-medium text-slate-400">
                Mobile
              </span>
</div>
</div>
<button className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 bg-slate-900/80 text-slate-200 hover:bg-slate-800/90" id="mobile-menu-close">
<span className="inline-flex" data-lucide="x"></span>
</button>
</div>
<div className="flex-1 overflow-y-auto">
<div className="px-3 pt-3 pb-2">
<div className="flex items-center justify-between mb-2">
<span className="text-[0.75rem] font-medium uppercase tracking-[0.18em] text-slate-500">
                Today
              </span>
</div>
<div className="space-y-1.5" id="conversation-list-mobile"></div>
</div>
</div>
</div>
</div>

<div className="fixed right-3 bottom-24 sm:right-6 sm:bottom-28 max-w-md w-[20rem] sm:w-[24rem] bg-slate-950/95 border border-slate-800 rounded-xl shadow-lg shadow-slate-950/70 hidden" id="debug-drawer">
<div className="flex items-center justify-between px-3 py-2 border-b border-slate-800">
<div className="flex items-center gap-1.5">
<span className="inline-flex text-slate-300" data-lucide="code-2"></span>
<span className="text-xs font-semibold tracking-tight text-slate-100">
            parallel.ai search response
          </span>
</div>
<button className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-slate-800 bg-slate-900/80 text-slate-400 hover:bg-slate-800/90" id="debug-close">
<span className="inline-flex" data-lucide="x"></span>
</button>
</div>
<div className="max-h-72 overflow-y-auto text-[0.7rem] font-medium text-slate-300 px-3 py-2">
<pre className="whitespace-pre-wrap break-words" id="debug-json"></pre>
</div>
</div>


    </>
  );
}
