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



        document.addEventListener("DOMContentLoaded", () => {
          const lucideIcons = window.lucide || null;
          if (lucideIcons) lucideIcons.createIcons();

          const showScreen = (id) => {
            document
              .querySelectorAll("#screen-container > section")
              .forEach((s) => (s.classList.add("hidden"), s.classList.remove("flex")));
            const el = document.getElementById(id);
            if (!el) return;
            el.classList.remove("hidden");
            // Some screens use flex, others block; default to block unless already flex
            if (el.classList.contains("flex") || el.classList.contains("inline-flex")) return;
            el.classList.add("block");
          };

          // Initial splash → onboarding
          showScreen("screen-splash");
          setTimeout(() => showScreen("screen-onboarding"), 1600);

          // Onboarding navigation
          const slide1 = document.getElementById("onboarding-slide-1");
          const slide2 = document.getElementById("onboarding-slide-2");
          const slide3 = document.getElementById("onboarding-slide-3");

          document.getElementById("onboarding-next-1")?.addEventListener("click", () => {
            slide1.classList.add("hidden");
            slide2.classList.remove("hidden");
          });

          document.getElementById("onboarding-next-2")?.addEventListener("click", () => {
            slide2.classList.add("hidden");
            slide3.classList.remove("hidden");
          });

          const goHomeFromOnboarding = () => showScreen("screen-auth");
          document.getElementById("onboarding-get-started")?.addEventListener("click", goHomeFromOnboarding);
          document.getElementById("onboarding-login")?.addEventListener("click", goHomeFromOnboarding);
          document.getElementById("skip-onboarding")?.addEventListener("click", goHomeFromOnboarding);

          // Auth tabs
          const loginForm = document.getElementById("login-form");
          const signupForm = document.getElementById("signup-form");
          const tabLogin = document.getElementById("tab-login");
          const tabSignup = document.getElementById("tab-signup");

          const activateLogin = () => {
            loginForm.classList.remove("hidden");
            signupForm.classList.add("hidden");
            tabLogin.classList.add("bg-slate-800", "text-slate-50");
            tabSignup.classList.remove("bg-slate-800", "text-slate-50");
            tabSignup.classList.add("text-slate-400");
          };

          const activateSignup = () => {
            signupForm.classList.remove("hidden");
            loginForm.classList.add("hidden");
            tabSignup.classList.add("bg-slate-800", "text-slate-50");
            tabLogin.classList.remove("bg-slate-800", "text-slate-50");
            tabLogin.classList.add("text-slate-400");
          };

          tabLogin?.addEventListener("click", activateLogin);
          tabSignup?.addEventListener("click", activateSignup);
          document.getElementById("go-to-signup")?.addEventListener("click", activateSignup);

          // Back from auth
          document.getElementById("auth-back-from-login")?.addEventListener("click", () => {
            showScreen("screen-onboarding");
          });

          // Fake login / signup → home
          document.getElementById("login-submit")?.addEventListener("click", () => showScreen("screen-home"));
          document.getElementById("signup-submit")?.addEventListener("click", () => showScreen("screen-home"));

          // Bottom nav across screens
          document.querySelectorAll("button[data-nav]").forEach((btn) => {
            btn.addEventListener("click", () => {
              const target = btn.getAttribute("data-nav");
              if (target === "home") showScreen("screen-home");
              if (target === "chat") showScreen("screen-chat");
              if (target === "orders") showScreen("screen-tracking");
              if (target === "learn") showScreen("screen-learn-home");
              if (target === "profile") showScreen("screen-profile");
            });
          });

          // Home feed → supplier profile
          document.querySelectorAll("[data-open='supplier-profile']").forEach((btn) => {
            btn.addEventListener("click", () => showScreen("screen-supplier-profile"));
          });

          // Supplier profile tabs
          const supplierTabs = {
            "tab-products": "supplier-products",
            "tab-company": "supplier-company",
            "tab-reviews": "supplier-reviews",
          };

          Object.keys(supplierTabs).forEach((tabId) => {
            const tab = document.getElementById(tabId);
            const contentId = supplierTabs[tabId];
            tab?.addEventListener("click", () => {
              // tabs
              document.querySelectorAll(".supplier-tab").forEach((t) => {
                t.classList.remove("border-blue-500", "text-slate-50");
                t.classList.add("border-transparent", "text-slate-400");
              });
              tab.classList.add("border-blue-500", "text-slate-50");
              tab.classList.remove("border-transparent", "text-slate-400");
              // content
              Object.values(supplierTabs).forEach((id) => {
                const el = document.getElementById(id);
                el.classList.add("hidden");
              });
              document.getElementById(contentId)?.classList.remove("hidden");
            });
          });

          // Supplier back
          document.getElementById("supplier-back")?.addEventListener("click", () => showScreen("screen-home"));

          // Supplier chat CTAs → chat screen
          const openChat = () => showScreen("screen-chat");
          document.getElementById("supplier-chat")?.addEventListener("click", openChat);
          document.getElementById("supplier-chat-bottom")?.addEventListener("click", openChat);

          // Chat back
          document.getElementById("chat-back")?.addEventListener("click", () => showScreen("screen-supplier-profile"));

          // Phrase popup
          const phrasesPopup = document.getElementById("phrases-popup");
          document.getElementById("open-phrases")?.addEventListener("click", () => {
            phrasesPopup.classList.remove("hidden");
          });
          document.getElementById("close-phrases")?.addEventListener("click", () => {
            phrasesPopup.classList.add("hidden");
          });
          document.querySelectorAll(".phrase-item").forEach((btn) => {
            btn.addEventListener("click", () => {
              const input = document.getElementById("chat-input");
              if (input) input.value = btn.textContent.trim();
              phrasesPopup.classList.add("hidden");
            });
          });

          // Order modal
          const openOrder = () => showScreen("screen-order-modal");
          document.getElementById("open-create-order")?.addEventListener("click", openOrder);
          document.getElementById("order-close")?.addEventListener("click", () => showScreen("screen-chat"));

          // Order → payment
          document.getElementById("continue-to-payment")?.addEventListener("click", () => showScreen("screen-payment"));

          // Payment back
          document.getElementById("payment-back")?.addEventListener("click", () => showScreen("screen-order-modal"));

          // Payment → success
          document.getElementById("pay-now")?.addEventListener("click", () => showScreen("screen-success"));

          // Success screen actions
          document.getElementById("view-shipping")?.addEventListener("click", () => showScreen("screen-shipping"));
          document.getElementById("return-to-chat")?.addEventListener("click", () => showScreen("screen-chat"));

          // Shipping navigation
          document.getElementById("shipping-back")?.addEventListener("click", () => showScreen("screen-success"));
          document.getElementById("confirm-shipping")?.addEventListener("click", () => showScreen("screen-tracking"));

          // Tracking back
          document.getElementById("tracking-back")?.addEventListener("click", () => showScreen("screen-home"));

          // Learn home → lesson
          document.getElementById("open-lesson")?.addEventListener("click", () => showScreen("screen-lesson"));
          document.getElementById("lesson-back")?.addEventListener("click", () => showScreen("screen-learn-home"));

          // Insert phrase from lesson into chat
          document.getElementById("insert-into-chat")?.addEventListener("click", () => {
            showScreen("screen-chat");
            const input = document.getElementById("chat-input");
            if (input) input.value = "可以给我更好的价格吗？ (Can you give me a better price?)";
          });

          // Lesson next – placeholder
          document.getElementById("lesson-next")?.addEventListener("click", () => {
            // For prototype, simple visual cue could be added later
          });

          // Simple toggle styles (translate / escrow)
          const toggleSwitch = (btn) => {
            const knob = btn.querySelector("span");
            if (!knob) return;
            const isOn = btn.classList.contains("bg-blue-600");
            if (isOn) {
              btn.classList.remove("bg-blue-600");
              btn.classList.add("bg-slate-700");
              knob.classList.remove("translate-x-4");
              knob.classList.add("translate-x-0");
            } else {
              btn.classList.add("bg-blue-600");
              btn.classList.remove("bg-slate-700");
              knob.classList.add("translate-x-4");
              knob.classList.remove("translate-x-0");
            }
          };

          document.getElementById("translate-toggle")?.addEventListener("click", (e) => {
            toggleSwitch(e.currentTarget);
          });

          document.getElementById("escrow-toggle")?.addEventListener("click", (e) => {
            toggleSwitch(e.currentTarget);
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
      
<div className="w-full max-w-sm h-[844px] bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden shadow-2xl flex flex-col relative" id="app">

<div className="h-10"></div>

<div className="flex-1 relative" id="screen-container">


<section className="absolute inset-0 flex flex-col items-center justify-center bg-slate-950" id="screen-splash">
<div className="flex flex-col items-center space-y-6">

<div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-600 via-blue-500 to-red-600 flex items-center justify-center shadow-lg shadow-blue-900/40">
<div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-slate-950/80 border border-slate-800">
<span className="text-2xl tracking-tight font-semibold text-blue-400">BC</span>
</div>
</div>

<div className="flex flex-col items-center space-y-1">
<span className="text-2xl tracking-tight font-semibold text-slate-50">BridgeChat</span>
<span className="text-base text-slate-400">Chat. Pay. Ship. Learn.</span>
</div>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-onboarding">
<div className="h-full flex flex-col">

<div className="flex items-center justify-between px-6 pt-4">
<span className="text-xs text-slate-500">BridgeChat</span>
<button className="text-sm text-slate-400 hover:text-slate-100 transition" id="skip-onboarding">Skip</button>
</div>

<div className="flex-1 flex flex-col items-center justify-between pt-8 pb-8 px-6" id="onboarding-slide-1">

<div className="w-full flex-1 flex items-center justify-center">
<div className="w-full max-w-xs">
<div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-red-500/10 border border-slate-800 flex items-center justify-center">
<div className="grid grid-cols-2 gap-4 w-11/12">
<div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-3 flex flex-col space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-300 tracking-tight">Lagos</span>
<div className="w-2 h-2 rounded-full bg-green-400"></div>
</div>
<div className="h-1 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
</div>
<span className="text-xs text-slate-500">Importer</span>
</div>
<div className="rounded-2xl bg-slate-900/70 border border-slate-800 p-3 flex flex-col space-y-2">
<div className="flex items-center justify-between">
<span className="text-xs font-medium text-slate-300 tracking-tight">Guangzhou</span>
<div className="w-2 h-2 rounded-full bg-emerald-400"></div>
</div>
<div className="h-1 rounded-full bg-slate-800 overflow-hidden">
<div className="h-full w-full bg-emerald-500 rounded-full"></div>
</div>
<span className="text-xs text-slate-500">Supplier</span>
</div>
<div className="col-span-2 flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-500/60 flex items-center justify-center">
<i className="w-4 h-4 text-blue-400" data-lucide="message"></i>
</div>
<span className="text-xs text-slate-300">Live sourcing chat</span>
</div>
<div className="flex items-center space-x-2">
<div className="w-8 h-8 rounded-full bg-red-500/20 border border-red-500/60 flex items-center justify-center">
<i className="w-4 h-4 text-red-400" data-lucide="package"></i>
</div>
<span className="text-xs text-slate-300">Shipment created</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full space-y-4">
<div className="space-y-2">
<h1 className="text-2xl tracking-tight font-semibold text-slate-50">Simplify Your China Import Process</h1>
<p className="text-base text-slate-400">
                    Verified suppliers. Clear communication. Smooth payments.
                  </p>
</div>

<div className="flex items-center space-x-2">
<div className="h-1.5 w-6 rounded-full bg-blue-500"></div>
<div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
<div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
</div>

<button className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-slate-50 text-sm font-semibold py-3.5 transition" id="onboarding-next-1">
                  Next
                </button>
</div>
</div>
<div className="flex-1 hidden flex-col items-center justify-between pt-8 pb-8 px-6" id="onboarding-slide-2">

<div className="w-full flex-1 flex items-center justify-center">
<div className="w-full max-w-xs">
<div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900/40 to-slate-900 border border-slate-800 flex items-center justify-center">
<div className="w-11/12 space-y-3">
<div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-3 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-9 h-9 rounded-full bg-blue-500/10 border border-blue-500/40 flex items-center justify-center">
<i className="w-4 h-4 text-blue-400" data-lucide="credit-card"></i>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-300 tracking-tight">Visa •••• 2841</span>
<span className="text-xs text-slate-500">Nigeria NGN</span>
</div>
</div>

<span className="text-xs text-slate-300 font-medium">¥ 850,000</span>
</div>
<div className="flex items-center justify-center">
<div className="flex items-center space-x-2">
<span className="text-xs text-slate-400">Instant FX</span>
<i className="w-4 h-4 text-blue-400" data-lucide="arrow-right"></i>
<span className="text-xs text-slate-400">RMB</span>
</div>
</div>
<div className="rounded-2xl bg-slate-950/80 border border-emerald-500/40 p-3 flex items-center justify-between">
<div className="flex items-center space-x-3">
<div className="w-9 h-9 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center">
<i className="w-4 h-4 text-emerald-400" data-lucide="badge-check"></i>
</div>
<div className="flex flex-col">
<span className="text-xs text-slate-300 tracking-tight">Supplier Wallet</span>
<span className="text-xs text-slate-500">RMB balance</span>
</div>
</div>
<span className="text-xs text-emerald-300 font-medium">¥ 10,200</span>
</div>
</div>
</div>
</div>
</div>

<div className="w-full space-y-4">
<div className="space-y-2">
<h1 className="text-2xl tracking-tight font-semibold text-slate-50">Secure Payments</h1>
<p className="text-base text-slate-400">
                    Pay with Visa/Mastercard from Africa. We convert to RMB instantly.
                  </p>
</div>

<div className="flex items-center space-x-2">
<div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
<div className="h-1.5 w-6 rounded-full bg-blue-500"></div>
<div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
</div>

<button className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-slate-50 text-sm font-semibold py-3.5 transition" id="onboarding-next-2">
                  Next
                </button>
</div>
</div>
<div className="flex-1 hidden flex-col items-center justify-between pt-8 pb-8 px-6" id="onboarding-slide-3">

<div className="w-full flex-1 flex items-center justify-center">
<div className="w-full max-w-xs">
<div className="aspect-[4/3] rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900/40 to-red-900/30 border border-slate-800 flex items-center justify-center">
<div className="w-11/12 space-y-3">
<div className="rounded-2xl bg-slate-950/80 border border-slate-800 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-7 h-7 rounded-full bg-blue-500/10 border border-blue-500/40 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-blue-400" data-lucide="message-circle"></i>
</div>
<span className="text-xs text-slate-300">Supplier</span>
</div>
<span className="text-[0.625rem] text-slate-500">09:20</span>
</div>
<p className="text-xs text-slate-200">We can ship 300 units next week. Do you need DDP?</p>
</div>
<div className="rounded-2xl bg-blue-600/10 border border-blue-500/50 p-3 space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<div className="w-7 h-7 rounded-full bg-blue-500/20 border border-blue-500/40 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-blue-300" data-lucide="book-open-check"></i>
</div>
<span className="text-xs text-slate-200 tracking-tight">Micro-lesson</span>
</div>
<span className="text-[0.625rem] text-blue-300">CN</span>
</div>
<div className="space-y-1">
<p className="text-xs text-slate-50">可以给我更好的价格吗？</p>
<p className="text-[0.6875rem] text-slate-300">Kěyǐ gěi wǒ gèng hǎo de jiàgé ma?</p>
<p className="text-[0.6875rem] text-slate-400">Can you give me a better price?</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="w-full space-y-4">
<div className="space-y-2">
<h1 className="text-2xl tracking-tight font-semibold text-slate-50">Chat &amp; Learn</h1>
<p className="text-base text-slate-400">
                    Trade-focused Chinese micro-lessons integrated into chat.
                  </p>
</div>

<div className="flex items-center space-x-2">
<div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
<div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
<div className="h-1.5 w-6 rounded-full bg-blue-500"></div>
</div>

<div className="flex space-x-3">
<button className="flex-1 inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-slate-50 text-sm font-semibold py-3.5 transition" id="onboarding-get-started">
                    Get Started
                  </button>
<button className="flex-1 inline-flex items-center justify-center rounded-xl border border-slate-700 hover:border-slate-500 text-slate-100 text-sm font-semibold py-3.5 transition" id="onboarding-login">
                    Login
                  </button>
</div>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-auth">
<div className="h-full flex flex-col">
<div className="px-6 pt-8 pb-4 space-y-4">
<button className="inline-flex items-center space-x-2 text-xs text-slate-400 hover:text-slate-100 transition" id="auth-back-from-login">
<i className="w-4 h-4" data-lucide="chevron-left"></i>
<span>Back</span>
</button>
<div>
<h1 className="text-2xl tracking-tight font-semibold text-slate-50">Welcome back</h1>
<p className="text-base text-slate-400 mt-1">Sign in to manage your China sourcing.</p>
</div>
<div className="flex rounded-full bg-slate-900 border border-slate-800 p-1 text-xs">
<button className="flex-1 text-center py-1.5 rounded-full bg-slate-800 text-slate-50 font-medium" id="tab-login">Login</button>
<button className="flex-1 text-center py-1.5 rounded-full text-slate-400 hover:text-slate-50 transition" id="tab-signup">Signup</button>
</div>
</div>

<div className="flex-1 px-6 space-y-4 overflow-y-auto pb-8" id="login-form">
<div className="space-y-3">
<label className="block text-xs text-slate-300">Email</label>
<input className="w-full rounded-xl bg-slate-900 border border-slate-800 text-slate-50 text-sm py-2.5 px-3 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="you@example.com" type="email"/>
</div>
<div className="space-y-3">
<label className="block text-xs text-slate-300">Password</label>
<input className="w-full rounded-xl bg-slate-900 border border-slate-800 text-slate-50 text-sm py-2.5 px-3 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="••••••••" type="password"/>
</div>
<button className="w-full mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-slate-50 py-3.5 transition" id="login-submit">
                Login
              </button>
<button className="w-full text-xs text-slate-400 hover:text-slate-100 text-center mt-2" id="go-to-signup">
                Create an account
              </button>
</div>

<div className="flex-1 px-6 space-y-4 overflow-y-auto pb-8 hidden" id="signup-form">

<div className="space-y-3">
<label className="block text-xs text-slate-300">First name (as on card)</label>
<input className="w-full rounded-xl bg-slate-900 border border-slate-800 text-slate-50 text-sm py-2.5 px-3 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="First name" type="text"/>
</div>
<div className="space-y-3">
<label className="block text-xs text-slate-300">Last name (as on card)</label>
<input className="w-full rounded-xl bg-slate-900 border border-slate-800 text-slate-50 text-sm py-2.5 px-3 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Last name" type="text"/>
</div>
<p className="text-xs text-amber-300">
                First and last names must be identical to those on the payment card.
              </p>
<div className="space-y-3">
<label className="block text-xs text-slate-300">Email</label>
<input className="w-full rounded-xl bg-slate-900 border border-slate-800 text-slate-50 text-sm py-2.5 px-3 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="you@example.com" type="email"/>
</div>
<div className="space-y-3">
<label className="block text-xs text-slate-300">Phone</label>
<div className="flex space-x-2">
<button className="inline-flex items-center space-x-1 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-100 px-2.5">
<span>+234</span>
<i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<input className="flex-1 rounded-xl bg-slate-900 border border-slate-800 text-slate-50 text-sm py-2.5 px-3 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="812 345 6789" type="tel"/>
</div>
</div>

<div className="space-y-3">
<label className="block text-xs text-slate-300">Government ID number</label>
<input className="w-full rounded-xl bg-slate-900 border border-slate-800 text-slate-50 text-sm py-2.5 px-3 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="National ID / Passport number" type="text"/>
</div>
<div className="space-y-3">
<label className="block text-xs text-slate-300">Password</label>
<input className="w-full rounded-xl bg-slate-900 border border-slate-800 text-slate-50 text-sm py-2.5 px-3 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Create a password" type="password"/>
</div>
<div className="space-y-3">
<label className="block text-xs text-slate-300 mb-1">Role</label>
<div className="grid grid-cols-3 gap-2 text-xs">
<button className="role-option rounded-xl border border-slate-700 bg-slate-900 text-slate-200 py-2">Importer</button>
<button className="role-option rounded-xl border border-slate-800 bg-slate-900 text-slate-400 py-2">Supplier</button>
<button className="role-option rounded-xl border border-slate-800 bg-slate-900 text-slate-400 py-2">Both</button>
</div>
</div>
<button className="w-full mt-4 inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-slate-50 py-3.5 transition" id="signup-submit">
                Create Account
              </button>
</div>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-home">
<div className="h-full flex flex-col">

<div className="px-4 pt-4 pb-3 flex items-center space-x-3">
<div className="flex items-center justify-center w-9 h-9 rounded-2xl bg-blue-600/10 border border-blue-500/40">
<span className="text-sm font-semibold tracking-tight text-blue-400">BC</span>
</div>
<div className="flex-1">
<div className="flex items-center bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 space-x-2">
<i className="w-4 h-4 text-slate-500" data-lucide="search"></i>
<input className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none" placeholder="Search products or suppliers…"/>
</div>
</div>
<button className="relative w-9 h-9 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center">
<i className="w-4 h-4 text-slate-300" data-lucide="bell"></i>
<span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500"></span>
</button>
</div>

<div className="flex-1 overflow-y-auto px-4 pb-24 space-y-3">
<div className="flex items-center justify-between mb-1">
<h2 className="text-lg tracking-tight font-semibold text-slate-50">Sourcing Feed</h2>
<button className="inline-flex items-center space-x-1 text-xs text-slate-400">
<i className="w-3.5 h-3.5" data-lucide="sliders-vertical"></i>
<span>Filters</span>
</button>
</div>

<button className="w-full flex items-center space-x-3 rounded-2xl bg-slate-900 border border-slate-800 p-3 hover:border-blue-500/50 transition" data-open="supplier-profile">
<div className="w-14 h-14 rounded-2xl bg-slate-800 overflow-hidden flex items-center justify-center text-xs text-slate-300">
                  Img
                </div>
<div className="flex-1 flex flex-col space-y-1 text-left">
<div className="flex items-center space-x-2">
<span className="text-sm font-medium text-slate-50 tracking-tight">Guangzhou SolarTech Co.</span>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/60 px-1.5 py-0.5 text-[0.625rem] text-emerald-300">
<i className="w-3 h-3 mr-1" data-lucide="badge-check"></i>Verified
                    </span>
</div>
<p className="text-xs text-slate-400">Solar Panels / MOQ: 10 units</p>
<div className="flex items-center space-x-2">
<div className="flex items-center space-x-1 text-xs text-amber-300">
<i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i>
<span>4.7</span>
</div>
<span className="text-[0.6875rem] text-slate-500">Guangdong · CN</span>
</div>
</div>
</button>
<button className="w-full flex items-center space-x-3 rounded-2xl bg-slate-900 border border-slate-800 p-3 hover:border-blue-500/30 transition">
<div className="w-14 h-14 rounded-2xl bg-slate-800 overflow-hidden flex items-center justify-center text-xs text-slate-300">
                  Img
                </div>
<div className="flex-1 flex flex-col space-y-1 text-left">
<div className="flex items-center space-x-2">
<span className="text-sm font-medium text-slate-50 tracking-tight">Yiwu Textiles Hub</span>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/60 px-1.5 py-0.5 text-[0.625rem] text-emerald-300">
<i className="w-3 h-3 mr-1" data-lucide="badge-check"></i>Verified
                    </span>
</div>
<p className="text-xs text-slate-400">Fabrics &amp; Apparel / MOQ: 50 pcs</p>
<div className="flex items-center space-x-2">
<div className="flex items-center space-x-1 text-xs text-amber-300">
<i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i>
<span>4.6</span>
</div>
<span className="text-[0.6875rem] text-slate-500">Zhejiang · CN</span>
</div>
</div>
</button>
<button className="w-full flex items-center space-x-3 rounded-2xl bg-slate-900 border border-slate-800 p-3 hover:border-blue-500/30 transition">
<div className="w-14 h-14 rounded-2xl bg-slate-800 overflow-hidden flex items-center justify-center text-xs text-slate-300">
                  Img
                </div>
<div className="flex-1 flex flex-col space-y-1 text-left">
<div className="flex items-center space-x-2">
<span className="text-sm font-medium text-slate-50 tracking-tight">Shenzhen Electronics Hub</span>
</div>
<p className="text-xs text-slate-400">Consumer Electronics / MOQ: 20 units</p>
<div className="flex items-center space-x-2">
<div className="flex items-center space-x-1 text-xs text-amber-300">
<i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i>
<span>4.9</span>
</div>
<span className="text-[0.6875rem] text-slate-500">Shenzhen · CN</span>
</div>
</div>
</button>
</div>

<div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950 via-slate-950/95 to-transparent pointer-events-none"></div>
<nav className="absolute inset-x-0 bottom-0 h-16 bg-slate-950/95 border-t border-slate-800 flex items-center justify-around px-3">
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-blue-400" data-nav="home">
<i className="w-4 h-4" data-lucide="home"></i>
<span>Home</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="chat">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span>Chat</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="orders">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
<span>Orders</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="learn">
<i className="w-4 h-4" data-lucide="book-open"></i>
<span>Learn</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="profile">
<i className="w-4 h-4" data-lucide="user"></i>
<span>Profile</span>
</button>
</nav>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-supplier-profile">
<div className="h-full flex flex-col">

<div className="relative">
<div className="h-32 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500"></div>
<div className="absolute inset-x-0 top-2 flex items-center justify-between px-4">
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur border border-slate-800" id="supplier-back">
<i className="w-4 h-4 text-slate-50" data-lucide="chevron-left"></i>
</button>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/60 backdrop-blur border border-slate-800">
<i className="w-4 h-4 text-slate-50" data-lucide="more-horizontal"></i>
</button>
</div>
<div className="px-5 -mt-10 relative z-10">
<div className="rounded-2xl bg-slate-950 border border-slate-800 p-4 flex space-x-3">
<div className="w-14 h-14 rounded-2xl bg-slate-800"></div>
<div className="flex-1 space-y-1">
<div className="flex items-center space-x-2">
<h2 className="text-base tracking-tight font-semibold text-slate-50">Foshan Pump Machinery Ltd.</h2>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/60 px-1.5 py-0.5 text-[0.625rem] text-emerald-300">
<i className="w-3 h-3 mr-1" data-lucide="badge-check"></i>Verified
                      </span>
</div>
<div className="flex items-center space-x-3 text-[0.6875rem] text-slate-400">
<div className="flex items-center space-x-1 text-amber-300">
<i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i>
<span>4.8</span>
</div>
<div className="flex items-center space-x-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
<span>Guangzhou, China</span>
</div>
</div>
<p className="text-xs text-slate-400">Industrial water pumps · 8 yrs export experience</p>
</div>
</div>
</div>
</div>

<div className="mt-4 px-5">
<div className="flex items-center border-b border-slate-800 text-xs">
<button className="supplier-tab border-b-2 border-blue-500 text-slate-50 py-2 mr-4" id="tab-products">
                  Products
                </button>
<button className="supplier-tab border-b-2 border-transparent text-slate-400 py-2 mr-4" id="tab-company">
                  Company Info
                </button>
<button className="supplier-tab border-b-2 border-transparent text-slate-400 py-2" id="tab-reviews">
                  Reviews
                </button>
</div>
</div>

<div className="flex-1 overflow-y-auto px-5 pb-24">

<div className="space-y-3 mt-3" id="supplier-products">
<div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 flex space-x-3">
<div className="w-20 h-20 rounded-xl bg-slate-800"></div>
<div className="flex-1 flex flex-col space-y-1">
<h3 className="text-sm font-medium text-slate-50 tracking-tight">Industrial Booster Pump 3KW</h3>

<p className="text-xs text-slate-400">Price: ¥ 870 – ¥ 1,090 / unit</p>
<p className="text-xs text-slate-400">MOQ: 10 units</p>
<div className="flex items-center justify-between mt-1">
<span className="text-[0.6875rem] text-slate-500">Lead time: 10–15 days</span>
<button className="inline-flex items-center space-x-1 rounded-lg bg-blue-600 hover:bg-blue-500 text-[0.6875rem] text-slate-50 px-2.5 py-1.5 transition" id="supplier-chat">
<i className="w-3.5 h-3.5" data-lucide="message-circle"></i>
<span>Chat with Supplier</span>
</button>
</div>
</div>
</div>
<div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 flex space-x-3">
<div className="w-20 h-20 rounded-xl bg-slate-800"></div>
<div className="flex-1 flex flex-col space-y-1">
<h3 className="text-sm font-medium text-slate-50 tracking-tight">Solar Water Pump System</h3>

<p className="text-xs text-slate-400">Price: ¥ 1,520 – ¥ 1,880 / set</p>
<p className="text-xs text-slate-400">MOQ: 5 sets</p>
<div className="flex items-center justify-between mt-1">
<span className="text-[0.6875rem] text-slate-500">Lead time: 15–20 days</span>
<button className="inline-flex items-center space-x-1 rounded-lg bg-blue-600/10 border border-blue-500/50 text-[0.6875rem] text-blue-200 px-2.5 py-1.5 transition">
<span>View details</span>
</button>
</div>
</div>
</div>
</div>

<div className="space-y-3 mt-3 hidden text-xs text-slate-300" id="supplier-company">
<div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-[0.6875rem] text-slate-400">Year established</span>
<span>2014</span>
</div>
<div className="flex items-center justify-between">
<span className="text-[0.6875rem] text-slate-400">Main markets</span>
<span>Africa, Middle East</span>
</div>
<div className="flex items-center justify-between">
<span className="text-[0.6875rem] text-slate-400">Employees</span>
<span>80–120</span>
</div>
</div>
<div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-1.5">
<h4 className="text-xs font-medium text-slate-50">Export Capabilities</h4>
<p className="text-xs text-slate-400">
                    Experience shipping to Nigeria, Ghana, Kenya, South Africa. Supports FOB, CIF, and DDP terms.
                  </p>
</div>
</div>

<div className="space-y-3 mt-3 hidden text-xs text-slate-300" id="supplier-reviews">
<div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-1">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<span className="text-xs text-slate-50">Abuja Import Ltd.</span>
<div className="flex items-center space-x-1 text-amber-300">
<i className="w-3 h-3 fill-amber-400 text-amber-400" data-lucide="star"></i>
<span>5.0</span>
</div>
</div>
<span className="text-[0.625rem] text-slate-500">2 months ago</span>
</div>
<p className="text-xs text-slate-400">Good communication, quality pumps, and on-time shipping to Apapa port.</p>
</div>
</div>
</div>

<div className="absolute inset-x-0 bottom-16 px-5 pb-3 pointer-events-none">
<div className="pointer-events-auto">
<button className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-slate-50 py-3.5 transition" id="supplier-chat-bottom">
                  Chat with Supplier
                </button>
</div>
</div>

<nav className="absolute inset-x-0 bottom-0 h-16 bg-slate-950/95 border-t border-slate-800 flex items-center justify-around px-3">
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-blue-400" data-nav="home">
<i className="w-4 h-4" data-lucide="home"></i>
<span>Home</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="chat">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span>Chat</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="orders">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
<span>Orders</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="learn">
<i className="w-4 h-4" data-lucide="book-open"></i>
<span>Learn</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="profile">
<i className="w-4 h-4" data-lucide="user"></i>
<span>Profile</span>
</button>
</nav>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-chat">
<div className="h-full flex flex-col">

<div className="px-4 pt-4 pb-2 flex items-center justify-between border-b border-slate-900">
<div className="flex items-center space-x-2">
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-slate-800" id="chat-back">
<i className="w-4 h-4 text-slate-50" data-lucide="chevron-left"></i>
</button>
<div className="flex items-center space-x-2">
<div className="w-9 h-9 rounded-full bg-slate-800"></div>
<div className="flex flex-col">
<span className="text-sm font-medium text-slate-50 tracking-tight">Foshan Pump Machinery Ltd.</span>
<span className="text-[0.6875rem] text-emerald-400">Online · CN</span>
</div>
</div>
</div>
<button className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border border-slate-800">
<i className="w-4 h-4 text-slate-50" data-lucide="more-vertical"></i>
</button>
</div>

<div className="flex-1 overflow-y-auto px-3 pt-3 pb-28 space-y-3">

<div className="flex justify-center">
<span className="text-[0.6875rem] text-slate-500 bg-slate-900/80 border border-slate-800 rounded-full px-3 py-0.5">Today</span>
</div>

<div className="flex items-start space-x-2">
<div className="w-7 h-7 rounded-full bg-slate-800"></div>
<div className="max-w-[72%] rounded-2xl rounded-tl-sm bg-slate-900 border border-slate-800 p-2.5 space-y-1">
<p className="text-xs text-slate-50">Hello! What quantity do you need?</p>
<div className="flex items-center justify-between">
<span className="text-[0.625rem] text-slate-500">09:18</span>
<span className="text-[0.625rem] text-slate-500">EN → 中文</span>
</div>
</div>
</div>

<div className="flex items-start justify-end space-x-2 space-x-reverse">
<div className="max-w-[72%] rounded-2xl rounded-tr-sm bg-blue-600 text-slate-50 p-2.5 space-y-1">
<p className="text-xs">Do you offer discount for 500 units?</p>
<div className="flex items-center justify-between">
<span className="text-[0.625rem] text-blue-100/80">09:19 · Sent</span>
</div>
</div>
<div className="w-7 h-7 rounded-full bg-blue-600"></div>
</div>

<div className="flex justify-center">
<div className="inline-flex items-center space-x-2 rounded-full bg-blue-600/10 border border-blue-500/40 px-2.5 py-1.5">
<i className="w-3.5 h-3.5 text-blue-300" data-lucide="sparkles"></i>
<span className="text-[0.6875rem] text-blue-100">Tip: “Can you give me a better price?” in Chinese</span>
</div>
</div>

<div className="mt-2 flex items-center justify-between rounded-2xl bg-slate-900 border border-slate-800 px-3 py-2">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-slate-200" data-lucide="languages"></i>
<div className="flex flex-col">
<span className="text-xs text-slate-50">Auto-translate</span>
<span className="text-[0.6875rem] text-slate-400">English ↔ Simplified Chinese</span>
</div>
</div>
<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600" id="translate-toggle">
<span className="inline-block h-4 w-4 transform rounded-full bg-slate-50 translate-x-4"></span>
</button>
</div>
</div>

<div className="absolute inset-x-0 bottom-16 px-3 pb-2 pointer-events-none">
<div className="pointer-events-auto flex items-center justify-between rounded-2xl bg-slate-900/95 border border-slate-800 px-3 py-2">
<div className="flex flex-col">
<span className="text-xs text-slate-100">Ready to proceed?</span>
<span className="text-[0.6875rem] text-slate-400">Create a trade-safe order with this supplier.</span>
</div>
<button className="inline-flex items-center space-x-1 rounded-xl bg-blue-600 hover:bg-blue-500 text-[0.6875rem] text-slate-50 px-3 py-1.5 transition" id="open-create-order">
<i className="w-3.5 h-3.5" data-lucide="file-plus-2"></i>
<span>Create Order</span>
</button>
</div>
</div>

<div className="absolute inset-x-0 bottom-0 bg-slate-950/95 border-t border-slate-900 pt-1.5 pb-3 px-2">

<div className="flex items-center justify-end mb-1">
<button className="inline-flex items-center space-x-1 rounded-full bg-slate-900 border border-slate-800 px-2.5 py-1 text-[0.6875rem] text-slate-200" id="open-phrases">
<i className="w-3.5 h-3.5 text-amber-300" data-lucide="lightbulb"></i>
<span>AI phrases</span>
</button>
</div>
<div className="flex items-end space-x-2">
<button className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
<i className="w-4 h-4 text-slate-300" data-lucide="mic"></i>
</button>
<div className="flex-1 flex items-center bg-slate-900 border border-slate-800 rounded-2xl px-2.5">
<input className="flex-1 bg-transparent text-sm text-slate-100 placeholder-slate-500 py-1.5 focus:outline-none" id="chat-input" placeholder="Type a message…"/>
<button className="w-8 h-8 rounded-full flex items-center justify-center text-slate-300">
<i className="w-4 h-4" data-lucide="image"></i>
</button>
</div>
<button className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
<i className="w-4 h-4 text-slate-50" data-lucide="send"></i>
</button>
</div>
</div>

<div className="hidden absolute inset-x-3 bottom-24 rounded-2xl bg-slate-950 border border-slate-800 shadow-lg" id="phrases-popup">
<div className="flex items-center justify-between px-3 pt-2">
<span className="text-xs text-slate-200">Suggested phrases</span>
<button className="text-[0.6875rem] text-slate-400 hover:text-slate-100" id="close-phrases">
                  Close
                </button>
</div>
<div className="px-3 pb-2 pt-1 space-y-1.5">
<button className="phrase-item w-full text-left text-xs text-slate-100 rounded-xl bg-slate-900 border border-slate-800 px-2.5 py-1.5 hover:border-blue-500/60 transition">
                  Can you send a video of the product?
                </button>
<button className="phrase-item w-full text-left text-xs text-slate-100 rounded-xl bg-slate-900 border border-slate-800 px-2.5 py-1.5 hover:border-blue-500/60 transition">
                  What is your best price for 100 units?
                </button>
<button className="phrase-item w-full text-left text-xs text-slate-100 rounded-xl bg-slate-900 border border-slate-800 px-2.5 py-1.5 hover:border-blue-500/60 transition">
                  Do you support OEM branding?
                </button>
<button className="phrase-item w-full text-left text-xs text-slate-100 rounded-xl bg-slate-900 border border-slate-800 px-2.5 py-1.5 hover:border-blue-500/60 transition">
                  What is the shipping weight?
                </button>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 hidden bg-black/40" id="screen-order-modal">
<div className="absolute inset-x-0 bottom-0 h-[85%] rounded-t-3xl bg-slate-950 border-t border-slate-800 flex flex-col">
<div className="pt-3 pb-2 flex flex-col items-center">
<div className="w-10 h-1 rounded-full bg-slate-700"></div>
<span className="mt-2 text-xs text-slate-400">Create Order</span>
</div>
<div className="px-5 pt-2 pb-4 flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold text-slate-50">New order</h2>
<button className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center" id="order-close">
<i className="w-4 h-4 text-slate-50" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto px-5 pb-6 space-y-4 text-xs">
<div className="space-y-2">
<label className="text-xs text-slate-300">Product selected</label>
<div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 flex items-center space-x-3">
<div className="w-12 h-12 rounded-xl bg-slate-800"></div>
<div className="flex-1">
<p className="text-xs text-slate-50">Industrial Booster Pump 3KW</p>

<p className="text-[0.6875rem] text-slate-400">Price range: ¥ 870 – ¥ 1,090 / unit</p>
</div>
</div>
</div>
<div className="flex items-center space-x-3">
<div className="flex-1 space-y-2">
<label className="text-xs text-slate-300">Quantity</label>
<div className="inline-flex items-center justify-between rounded-xl bg-slate-900 border border-slate-800 px-2.5 py-2">
<button className="w-7 h-7 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
<i className="w-3 h-3 text-slate-300" data-lucide="minus"></i>
</button>
<span className="text-sm text-slate-50">500</span>
<button className="w-7 h-7 rounded-full bg-slate-950 border border-slate-800 flex items-center justify-center">
<i className="w-3 h-3 text-slate-300" data-lucide="plus"></i>
</button>
</div>
</div>
<div className="flex-1 space-y-2">

<label className="text-xs text-slate-300">Unit price (RMB)</label>
<input className="w-full rounded-xl bg-slate-900 border border-slate-800 text-slate-50 text-sm py-2 px-3 focus:outline-none focus:ring-1 focus:ring-blue-500" value="970"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-300">Notes to supplier</label>
<textarea className="w-full rounded-xl bg-slate-900 border border-slate-800 text-slate-50 text-sm py-2 px-3 placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Packaging, branding, shipping terms…" rows="2"></textarea>
</div>
<div className="space-y-2">
<label className="text-xs text-slate-300">Order summary</label>
<div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-1.5">
<div className="flex items-center justify-between text-xs text-slate-300">
<span>Quantity</span>
<span>500 units</span>
</div>
<div className="flex items-center justify-between text-xs text-slate-300">
<span>Unit price</span>

<span>¥ 970.00</span>
</div>
<div className="border-t border-slate-800 pt-1.5 flex items-center justify-between text-xs text-slate-50">
<span>Total (RMB)</span>

<span>¥ 485,000.00</span>
</div>
</div>
</div>
</div>
<div className="px-5 pb-5 pt-2 border-t border-slate-900">
<button className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-slate-50 py-3.5 transition" id="continue-to-payment">
                Continue to Payment
              </button>
</div>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-payment">
<div className="h-full flex flex-col">
<div className="px-4 pt-4 pb-3 flex items-center justify-between">
<button className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center" id="payment-back">
<i className="w-4 h-4 text-slate-50" data-lucide="chevron-left"></i>
</button>
<span className="text-xs text-slate-400">BridgeChat Pay</span>
<div className="w-8"></div>
</div>
<div className="px-5 space-y-3">
<h1 className="text-lg tracking-tight font-semibold text-slate-50">Secure Checkout</h1>
<div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-2 text-xs">
<div className="flex items-center justify-between">
<span className="text-slate-400">Product</span>
<span className="text-slate-100">Industrial Booster Pump 3KW</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">Quantity</span>
<span className="text-slate-100">500 units</span>
</div>

<div className="flex items-center justify-between">
<span className="text-slate-400">Total (RMB)</span>
<span className="text-slate-100">¥ 485,000</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">Charged in NGN</span>
<span className="text-slate-100">₦ 51,000,000</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">FX rate</span>
<span className="text-slate-100">₦ 7.55 → ¥ 1</span>
</div>
<div className="border-t border-slate-800 pt-1.5 flex items-center justify-between">
<span className="text-slate-400">Amount to supplier (RMB)</span>
<span className="text-slate-50 font-medium">¥ 485,000</span>
</div>
</div>
</div>
<div className="flex-1 overflow-y-auto px-5 pb-24 mt-4 space-y-3 text-xs">
<div className="space-y-2">
<label className="text-xs text-slate-300">Card Number</label>
<div className="flex items-center rounded-xl bg-slate-900 border border-slate-800 px-2.5">
<input className="flex-1 bg-transparent text-sm text-slate-50 py-2.5 placeholder-slate-500 focus:outline-none" placeholder="1234 5678 9012 3456"/>
<i className="w-4 h-4 text-slate-500" data-lucide="credit-card"></i>
</div>
</div>
<div className="flex space-x-3">
<div className="flex-1 space-y-2">
<label className="text-xs text-slate-300">Expiry</label>
<input className="w-full rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-50 py-2.5 px-3 placeholder-slate-500 focus:outline-none" placeholder="MM/YY"/>
</div>
<div className="flex-1 space-y-2">
<label className="text-xs text-slate-300">CVV</label>
<input className="w-full rounded-xl bg-slate-900 border border-slate-800 text-sm text-slate-50 py-2.5 px-3 placeholder-slate-500 focus:outline-none" placeholder="123"/>
</div>
</div>
<div className="mt-2 rounded-2xl bg-slate-900 border border-slate-800 p-3 flex items-start justify-between space-x-2">
<div className="flex items-start space-x-2">
<button className="relative inline-flex h-5 w-9 items-center rounded-full bg-blue-600 mt-0.5" id="escrow-toggle">
<span className="inline-block h-4 w-4 transform rounded-full bg-slate-50 translate-x-4"></span>
</button>
<div className="flex flex-col">
<span className="text-xs text-slate-50">Enable escrow for first order</span>
<span className="text-[0.6875rem] text-slate-400">+2% fee. Funds released after you confirm delivery.</span>
</div>
</div>
<span className="text-[0.6875rem] text-slate-300">+₦ 1,020,000</span>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-2 bg-slate-950/95 border-t border-slate-900">
<button className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-slate-50 py-3.5 transition" id="pay-now">
                Pay Now
              </button>
</div>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-success">
<div className="h-full flex flex-col items-center justify-center px-6 space-y-5">
<div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-emerald-500 flex items-center justify-center">
<i className="w-6 h-6 text-slate-50" data-lucide="check"></i>
</div>
</div>
<div className="text-center space-y-2">
<h1 className="text-2xl tracking-tight font-semibold text-slate-50">Payment Successful!</h1>
<p className="text-base text-slate-400">
                Your supplier has received a RMB invoice.
              </p>
</div>
<div className="w-full space-y-2 pt-1">
<button className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-slate-50 py-3.5 transition" id="view-shipping">
                View Shipping Options
              </button>
<button className="w-full inline-flex items-center justify-center rounded-xl border border-slate-700 hover:border-slate-500 text-sm font-semibold text-slate-100 py-3.5 transition" id="return-to-chat">
                Return to Chat
              </button>
</div>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-shipping">
<div className="h-full flex flex-col">
<div className="px-4 pt-4 pb-3 flex items-center justify-between">
<button className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center" id="shipping-back">
<i className="w-4 h-4 text-slate-50" data-lucide="chevron-left"></i>
</button>
<span className="text-xs text-slate-400">Shipment</span>
<div className="w-8"></div>
</div>
<div className="px-5 space-y-2">
<h1 className="text-lg tracking-tight font-semibold text-slate-50">Choose shipping</h1>
<p className="text-xs text-slate-400">Optimized options from Guangzhou to Lagos.</p>
</div>
<div className="flex-1 overflow-y-auto px-5 pb-24 mt-3 space-y-3 text-xs">

<button className="shipping-option w-full text-left rounded-2xl bg-slate-900 border border-blue-500/60 p-3 space-y-1.5" data-option="air">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-blue-300" data-lucide="plane"></i>
<span className="text-sm text-slate-50">Air Cargo</span>
</div>
<span className="inline-flex items-center rounded-full bg-blue-600/10 border border-blue-500/60 text-[0.6875rem] text-blue-200 px-2 py-0.5">
                    Fastest
                  </span>
</div>
<div className="flex items-center justify-between text-xs text-slate-300">
<span>ETA: 5–7 days</span>
<span>$145 / 20kg</span>
</div>
</button>

<button className="shipping-option w-full text-left rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-1.5" data-option="sea">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-slate-200" data-lucide="ship"></i>
<span className="text-sm text-slate-50">Sea Freight</span>
</div>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/60 text-[0.6875rem] text-emerald-200 px-2 py-0.5">
                    Cheapest
                  </span>
</div>
<div className="flex items-center justify-between text-xs text-slate-300">
<span>ETA: 25–30 days</span>
<span>$60 / 20kg</span>
</div>
</button>

<button className="shipping-option w-full text-left rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-1.5" data-option="ddp">
<div className="flex items-center justify-between">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-slate-200" data-lucide="truck"></i>
<span className="text-sm text-slate-50">DDP (Door-to-door)</span>
</div>
</div>
<div className="flex items-center justify-between text-xs text-slate-300">
<span>ETA: 12–15 days</span>
<span>All customs included</span>
</div>
</button>
</div>
<div className="absolute inset-x-0 bottom-0 px-5 pb-5 pt-2 bg-slate-950/95 border-t border-slate-900">
<button className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-slate-50 py-3.5 transition" id="confirm-shipping">
                Confirm Shipping
              </button>
</div>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-tracking">
<div className="h-full flex flex-col">
<div className="px-4 pt-4 pb-3 flex items-center justify-between">
<button className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center" id="tracking-back">
<i className="w-4 h-4 text-slate-50" data-lucide="chevron-left"></i>
</button>
<span className="text-xs text-slate-400">Tracking</span>
<div className="w-8"></div>
</div>
<div className="px-5 space-y-2">
<h1 className="text-lg tracking-tight font-semibold text-slate-50">Shipment to Lagos</h1>
<p className="text-xs text-slate-400">Order #BC-2025-001 · Updated 2 mins ago</p>
</div>
<div className="flex-1 overflow-y-auto px-5 pb-24 mt-3 space-y-4 text-xs">

<div className="rounded-2xl bg-slate-900 border border-slate-800 p-3">
<ol className="relative border-l border-slate-800 ml-3 space-y-3">

<li className="ml-3">
<div className="absolute -left-3.5 mt-0.5 w-3 h-3 rounded-full bg-emerald-400 border border-slate-950"></div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-50">Order received</span>
<span className="text-[0.625rem] text-slate-500">09:45</span>
</div>
</li>

<li className="ml-3">
<div className="absolute -left-3.5 mt-0.5 w-3 h-3 rounded-full bg-emerald-400 border border-slate-950"></div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-50">Package picked</span>
<span className="text-[0.625rem] text-slate-500">11:10</span>
</div>
</li>

<li className="ml-3">
<div className="absolute -left-3.5 mt-0.5 w-3 h-3 rounded-full bg-emerald-400 border border-slate-950"></div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-50">At Chinese warehouse</span>
<span className="text-[0.625rem] text-slate-500">Today</span>
</div>
</li>

<li className="ml-3">
<div className="absolute -left-3.5 mt-0.5 w-3 h-3 rounded-full bg-blue-500 border border-slate-950 animate-pulse"></div>
<div className="flex items-center justify-between">
<span className="text-xs text-slate-50">In transit</span>
<span className="text-[0.625rem] text-blue-300">Current</span>
</div>
</li>

<li className="ml-3">
<div className="absolute -left-3.5 mt-0.5 w-3 h-3 rounded-full bg-slate-600 border border-slate-950"></div>
<span className="text-xs text-slate-400">At destination airport/port</span>
</li>

<li className="ml-3">
<div className="absolute -left-3.5 mt-0.5 w-3 h-3 rounded-full bg-slate-600 border border-slate-950"></div>
<span className="text-xs text-slate-400">Out for delivery</span>
</li>

<li className="ml-3">
<div className="absolute -left-3.5 mt-0.5 w-3 h-3 rounded-full bg-slate-600 border border-slate-950"></div>
<span className="text-xs text-slate-400">Delivered</span>
</li>
</ol>
</div>

<div className="space-y-2">
<span className="text-xs text-slate-300">Live map</span>
<div className="rounded-2xl bg-slate-900 border border-slate-800 h-40 flex items-center justify-center text-[0.6875rem] text-slate-500">
                  Map placeholder
                </div>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-learn-home">
<div className="h-full flex flex-col">
<div className="px-4 pt-4 pb-3 flex items-center justify-between">
<button className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center" id="learn-back-home">
<i className="w-4 h-4 text-slate-50" data-lucide="chevron-left"></i>
</button>
<span className="text-xs text-slate-400">Micro-lessons</span>
<div className="w-8"></div>
</div>
<div className="px-5 space-y-2">
<h1 className="text-lg tracking-tight font-semibold text-slate-50">Trade Chinese Micro-Lessons</h1>
<p className="text-xs text-slate-400">Short phrases you can send directly in chat.</p>
</div>
<div className="flex-1 overflow-y-auto px-5 pb-24 mt-3 space-y-4 text-xs">

<div className="space-y-2">
<span className="text-xs text-slate-300">Categories</span>
<div className="flex flex-wrap gap-2">
<span className="rounded-full bg-blue-600/10 border border-blue-500/60 text-[0.6875rem] text-blue-200 px-2.5 py-1">Negotiation</span>
<span className="rounded-full bg-slate-900 border border-slate-800 text-[0.6875rem] text-slate-200 px-2.5 py-1">Pricing</span>
<span className="rounded-full bg-slate-900 border border-slate-800 text-[0.6875rem] text-slate-200 px-2.5 py-1">Shipping</span>
<span className="rounded-full bg-slate-900 border border-slate-800 text-[0.6875rem] text-slate-200 px-2.5 py-1">Product Search</span>
<span className="rounded-full bg-slate-900 border border-slate-800 text-[0.6875rem] text-slate-200 px-2.5 py-1">Quality Control</span>
</div>
</div>

<div className="space-y-2">
<span className="text-xs text-slate-300">Negotiation · 3 lessons</span>
<button className="w-full text-left rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-1.5" id="open-lesson">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-50">Asking for MOQ</span>
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="chevron-right"></i>
</div>
<p className="text-[0.6875rem] text-slate-400">Learn how to ask about minimum order quantity.</p>
</button>
<button className="w-full text-left rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-50">Negotiating Price Level 1</span>
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="chevron-right"></i>
</div>
<p className="text-[0.6875rem] text-slate-400">Basic polite phrases to request better pricing.</p>
</button>
<button className="w-full text-left rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-1.5">
<div className="flex items-center justify-between">
<span className="text-sm text-slate-50">Payment Terms Vocabulary</span>
<i className="w-3.5 h-3.5 text-slate-500" data-lucide="chevron-right"></i>
</div>
<p className="text-[0.6875rem] text-slate-400">Key words for deposits, balance, and TT payments.</p>
</button>
</div>
</div>

<nav className="absolute inset-x-0 bottom-0 h-16 bg-slate-950/95 border-t border-slate-800 flex items-center justify-around px-3">
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="home">
<i className="w-4 h-4" data-lucide="home"></i>
<span>Home</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="chat">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span>Chat</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="orders">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
<span>Orders</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-blue-400" data-nav="learn">
<i className="w-4 h-4" data-lucide="book-open"></i>
<span>Learn</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="profile">
<i className="w-4 h-4" data-lucide="user"></i>
<span>Profile</span>
</button>
</nav>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-lesson">
<div className="h-full flex flex-col">
<div className="px-4 pt-4 pb-3 flex items-center justify-between">
<button className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center" id="lesson-back">
<i className="w-4 h-4 text-slate-50" data-lucide="chevron-left"></i>
</button>
<span className="text-xs text-slate-400">Negotiation</span>
<div className="w-8"></div>
</div>
<div className="flex-1 flex flex-col items-center justify-center px-6 space-y-4">
<div className="w-full rounded-3xl bg-slate-900 border border-slate-800 p-4 space-y-3">
<div className="flex items-center justify-between">
<h1 className="text-lg tracking-tight font-semibold text-slate-50">Negotiating Price – Level 1</h1>
<span className="text-[0.6875rem] text-slate-400">1/8</span>
</div>
<div className="space-y-1">
<p className="text-base text-slate-50">可以给我更好的价格吗？</p>
<p className="text-xs text-slate-300">Kěyǐ gěi wǒ gèng hǎo de jiàgé ma?</p>
<p className="text-xs text-slate-400">Can you give me a better price?</p>
</div>
<div className="flex items-center justify-between pt-1">
<div className="flex items-center space-x-1 text-[0.6875rem] text-slate-400">
<i className="w-3.5 h-3.5" data-lucide="volume-2"></i>
<span>Tap to listen</span>
</div>
<div className="flex items-center space-x-1 text-[0.6875rem] text-slate-400">
<i className="w-3.5 h-3.5" data-lucide="sparkles"></i>
<span>Beginner</span>
</div>
</div>
</div>
<div className="w-full space-y-2">
<button className="w-full inline-flex items-center justify-center rounded-xl bg-blue-600 hover:bg-blue-500 text-sm font-semibold text-slate-50 py-3.5 transition" id="insert-into-chat">
                  Insert into Chat
                </button>
<button className="w-full inline-flex items-center justify-center rounded-xl border border-slate-700 hover:border-slate-500 text-sm font-semibold text-slate-100 py-3.5 transition" id="lesson-next">
                  Next Phrase
                </button>
</div>
</div>
</div>
</section>

<section className="absolute inset-0 hidden bg-slate-950" id="screen-profile">
<div className="h-full flex flex-col">
<div className="px-4 pt-4 pb-3 flex items-center justify-between">
<button className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center" id="profile-back-home">
<i className="w-4 h-4 text-slate-50" data-lucide="chevron-left"></i>
</button>
<span className="text-xs text-slate-400">Account</span>
<div className="w-8"></div>
</div>
<div className="px-5 space-y-4">
<div className="flex items-center space-x-3">
<div className="w-11 h-11 rounded-2xl bg-blue-600/20 border border-blue-500/60 flex items-center justify-center">
<span className="text-sm font-semibold text-blue-300">AO</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-slate-50 tracking-tight">Adeola Okafor</span>
<span className="text-[0.6875rem] text-slate-400">Importer · Lagos, Nigeria</span>
</div>
</div>
<div className="rounded-2xl bg-slate-900 border border-slate-800 p-3 space-y-2 text-xs">
<div className="flex items-center justify-between">
<span className="text-slate-400">Email</span>
<span className="text-slate-100">adeola@example.com</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">Phone</span>
<span className="text-slate-100">+234 812 345 6789</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-400">Role</span>
<span className="text-slate-100">Importer</span>
</div>
</div>
<div className="space-y-2 text-xs">
<span className="text-slate-300">Settings</span>
<button className="w-full flex items-center justify-between rounded-2xl bg-slate-900 border border-slate-800 px-3 py-2">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-slate-300" data-lucide="globe-2"></i>
<span className="text-slate-100">Language</span>
</div>
<span className="text-[0.6875rem] text-slate-400">English</span>
</button>
<button className="w-full flex items-center justify-between rounded-2xl bg-slate-900 border border-slate-800 px-3 py-2">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-slate-300" data-lucide="shield-check"></i>
<span className="text-slate-100">KYC Status</span>
</div>
<span className="inline-flex items-center rounded-full bg-emerald-500/10 border border-emerald-500/50 text-[0.6875rem] text-emerald-300 px-2 py-0.5">
                    Verified
                  </span>
</button>
<button className="w-full flex items-center justify-between rounded-2xl bg-slate-900 border border-slate-800 px-3 py-2">
<div className="flex items-center space-x-2">
<i className="w-4 h-4 text-slate-300" data-lucide="credit-card"></i>
<span className="text-slate-100">Saved Cards</span>
</div>
<span className="text-[0.6875rem] text-slate-400">Visa •••• 2841</span>
</button>
</div>
<button className="mt-2 w-full inline-flex items-center justify-center rounded-xl border border-red-500/60 text-red-300 text-xs font-semibold py-3 hover:bg-red-500/5 transition">
                Logout
              </button>
</div>

<nav className="absolute inset-x-0 bottom-0 h-16 bg-slate-950/95 border-t border-slate-800 flex items-center justify-around px-3">
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="home">
<i className="w-4 h-4" data-lucide="home"></i>
<span>Home</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="chat">
<i className="w-4 h-4" data-lucide="message-circle"></i>
<span>Chat</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="orders">
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
<span>Orders</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-slate-400" data-nav="learn">
<i className="w-4 h-4" data-lucide="book-open"></i>
<span>Learn</span>
</button>
<button className="nav-item flex flex-col items-center space-y-0.5 text-[0.6875rem] text-blue-400" data-nav="profile">
<i className="w-4 h-4" data-lucide="user"></i>
<span>Profile</span>
</button>
</nav>
</div>
</section>
</div>


</div>

    </>
  );
}
