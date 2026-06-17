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
      
      document.addEventListener('DOMContentLoaded', () => {
        // Icons
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }

        // Year
        const y = document.getElementById('year');
        if (y) y.textContent = new Date().getFullYear();

        // Mobile nav
        const menuBtn = document.getElementById('menuBtn');
        const mobileNav = document.getElementById('mobileNav');
        if (menuBtn && mobileNav) {
          let open = false;
          menuBtn.addEventListener('click', () => {
            open = !open;
            mobileNav.classList.toggle('hidden', !open);
            menuBtn.innerHTML = '';
            const icon = document.createElement('i');
            icon.setAttribute('data-lucide', open ? 'x' : 'menu');
            menuBtn.appendChild(icon);
            if (window.lucide) window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
          });
        }

        // Copy code
        const copyBtn = document.getElementBy
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
      
<div className="relative min-h-screen overflow-hidden">

<div className="pointer-events-none absolute inset-0 -z-10">
<div className="absolute left-1/2 top-[-10%] h-[50rem] w-[50rem] -translate-x-1/2 rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(60,150,255,0.25) 0%, rgba(120,60,255,0.12) 45%, rgba(0,0,0,0) 70%)'}}></div>
<div className="absolute right-[-10%] bottom-[-10%] h-[36rem] w-[36rem] rounded-full blur-3xl opacity-25" style={{background: 'radial-gradient(50% 50% at 50% 50%, rgba(60,255,210,0.2) 0%, rgba(0,0,0,0) 65%)'}}></div>
</div>

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/60">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex h-16 items-center justify-between border-b border-white/10">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/15">
<span className="text-sm font-semibold tracking-tight">NA</span>
</div>
<span className="text-[15px] leading-none font-semibold tracking-tight">NovaAI</span>
<span className="ml-3 hidden h-5 w-px bg-white/10 sm:block"></span>
<nav className="ml-2 hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition-colors" href="#product">产品</a>
<a className="hover:text-white transition-colors" href="#solutions">解决方案</a>
<a className="hover:text-white transition-colors" href="#pricing">价格</a>
<a className="hover:text-white transition-colors" href="#docs">文档</a>
</nav>
</div>
<div className="hidden md:flex items-center gap-2">
<a className="px-3 py-1.5 text-sm rounded-md text-neutral-300 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/10 transition-colors" href="#">登录</a>
<a className="px-3.5 py-1.5 text-sm rounded-md bg-white text-neutral-900 hover:bg-neutral-100 transition-colors" href="#">立即开始</a>
</div>
<button aria-label="打开菜单" className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-md ring-1 ring-inset ring-white/10 hover:bg-white/5 transition-colors" id="menuBtn">
<i data-lucide="menu"></i>
</button>
</div>

<div className="md:hidden hidden border-b border-white/10" id="mobileNav">
<nav className="px-2 py-3 grid gap-1 text-sm">
<a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/5" href="#product">
<span>产品</span><i data-lucide="box"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/5" href="#solutions">
<span>解决方案</span><i data-lucide="puzzle"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/5" href="#pricing">
<span>价格</span><i data-lucide="credit-card"></i>
</a>
<a className="flex items-center justify-between rounded-md px-3 py-2 hover:bg-white/5" href="#docs">
<span>文档</span><i data-lucide="book"></i>
</a>
<div className="mt-2 flex gap-2 px-2 pb-3">
<a className="flex-1 text-center px-3 py-2 text-sm rounded-md text-neutral-300 hover:text-white hover:bg-white/5 ring-1 ring-inset ring-white/10 transition-colors" href="#">登录</a>
<a className="flex-1 text-center px-3 py-2 text-sm rounded-md bg-white text-neutral-900 hover:bg-neutral-100 transition-colors" href="#">开始使用</a>
</div>
</nav>
</div>
</div>
</header>

<section className="relative" id="product">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center py-16 sm:py-24">
<div className="space-y-6">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-300">
<span className="inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                实时推理 · 企业级安全 · 全球加速
              </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
                构建下一代<br className="hidden sm:block"/>通用 AI 体验
              </h1>
<p className="text-neutral-300 text-base sm:text-lg leading-relaxed">
                使用同一平台完成聊天、检索、函数调用和工作流编排。简单的 API，强大的可观测性与访问控制，帮助团队更快迭代与部署。
              </p>
<div className="flex flex-col sm:flex-row gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium hover:bg-neutral-100 transition-colors" href="#get-started">
<i data-lucide="rocket"></i> 立即开始
                </a>
<a className="inline-flex items-center justify-center gap-2 rounded-md ring-1 ring-inset ring-white/10 px-4 py-2.5 text-sm text-neutral-200 hover:bg-white/5 hover:text-white transition-colors" href="#docs">
<i data-lucide="book-open"></i> API 文档
                </a>
</div>
<div className="flex items-center gap-6 pt-2">
<div className="flex -space-x-3">
<img alt="用户" className="h-8 w-8 rounded-full ring-2 ring-neutral-950" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<img alt="用户" className="h-8 w-8 rounded-full ring-2 ring-neutral-950" src="https://images.unsplash.com/photo-1502828331539-51c709e80300?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<img alt="用户" className="h-8 w-8 rounded-full ring-2 ring-neutral-950" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
</div>
<p className="text-sm text-neutral-400">超过 20,000+ 开发者正在使用</p>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 -z-10 rounded-2xl opacity-25 blur-2xl" style={{background: 'radial-gradient(60% 60% at 50% 40%, rgba(255,255,255,0.06) 0%, rgba(0,0,0,0) 70%)'}}></div>
<div className="grid gap-4">

<div className="rounded-xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.03]">
<div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i className="text-neutral-200" data-lucide="terminal-square"></i>
<span>快速上手 · JavaScript</span>
</div>
<button className="inline-flex items-center gap-2 text-xs px-2.5 py-1.5 rounded-md ring-1 ring-inset ring-white/10 hover:bg-white/5 text-neutral-200" id="copyBtn">
<i data-lucide="copy"></i> 复制
                    </button>
</div>
<pre className="overflow-x-auto text-[13.5px] leading-6 p-4 sm:p-5 text-neutral-200"><code>import { Nova } from "@nova-ai/sdk";

const client = new Nova({
  apiKey: process.env.NOVA_API_KEY
});

// 流式对话
const stream = await client.chat.completions.create({
  model: "nova-3.5-pro",
  stream: true,
  messages: [
    { role: "system", content: "你是一个可靠的助手" },
    { role: "user", content: "用三点概括 RAG 的核心流程" }
  ],
  tools: [
    { type: "function", function: { name: "search", parameters: { q: "string" } } }
  ]
});

for await (const chunk of stream) {
  process.stdout.write(chunk.delta);
}</code></pre>
</div>

<div className="grid sm:grid-cols-2 gap-4">
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-400">请求成功率</span>
<i data-lucide="shield-check"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">99.97%</div>
<p className="text-xs text-neutral-400 mt-1">过去 24 小时 · 全球</p>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<span className="text-sm text-neutral-400">平均延迟</span>
<i data-lucide="activity"></i>
</div>
<div className="mt-2 text-2xl font-semibold tracking-tight">132 ms</div>
<p className="text-xs text-neutral-400 mt-1">p50 · 标准模型</p>
</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between pb-2 border-b border-white/10">
<div className="flex items-center gap-2 text-sm text-neutral-300">
<i data-lucide="line-chart"></i> 每分钟请求数
                    </div>
<div className="text-xs text-neutral-400">近 60 分钟</div>
</div>
<div className="pt-3">
<div className="relative h-48">
<canvas className="absolute inset-0" id="requestsChart"></canvas>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-8 border-y border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-80">
<span className="text-xs uppercase tracking-widest text-neutral-400">被以下团队信任</span>
<div className="flex items-center gap-8">
<div className="text-neutral-400 text-sm font-medium tracking-tight">ALPHA</div>
<div className="text-neutral-400 text-sm font-medium tracking-tight">ZENLABS</div>
<div className="text-neutral-400 text-sm font-medium tracking-tight">PIXEL</div>
<div className="text-neutral-400 text-sm font-medium tracking-tight">CORTEX</div>
<div className="text-neutral-400 text-sm font-medium tracking-tight">NIMBUS</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24" id="solutions">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">为产品团队与平台工程而生</h2>
<p className="mt-3 text-neutral-300">统一的 API 与权限模型，开箱即用的遥测、速率控制与审计，帮助你在数日内完成从原型到上线。</p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="group rounded-xl ring-1 ring-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15">
<i className="text-emerald-300" data-lucide="sparkles"></i>
</div>
<h3 className="font-semibold tracking-tight">多模态推理</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">文本、图像与结构化数据统一上下文，支持函数调用与工具编排。</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<i data-lucide="cpu"></i> 支持流式与批处理
              </div>
</div>
<div className="group rounded-xl ring-1 ring-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15">
<i className="text-sky-300" data-lucide="puzzle"></i>
</div>
<h3 className="font-semibold tracking-tight">RAG 与检索</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">内置向量检索、重排序与片段增补，轻松对接你的私有知识库。</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<i data-lucide="folder-kanban"></i> 数据加密与可视审计
              </div>
</div>
<div className="group rounded-xl ring-1 ring-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15">
<i className="text-violet-300" data-lucide="server"></i>
</div>
<h3 className="font-semibold tracking-tight">可观测与限流</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">速率限制、重试与熔断策略开箱可用，指标与日志一体化。</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<i data-lucide="bar-chart-3"></i> 可插拔后端与区域路由
              </div>
</div>
<div className="group rounded-xl ring-1 ring-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15">
<i className="text-amber-300" data-lucide="key-round"></i>
</div>
<h3 className="font-semibold tracking-tight">企业级安全</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">细粒度密钥与角色权限，PII 脱敏与数据最小化。</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<i data-lucide="lock"></i> SSO · SCIM · 审计日志
              </div>
</div>
<div className="group rounded-xl ring-1 ring-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15">
<i className="text-pink-300" data-lucide="workflow"></i>
</div>
<h3 className="font-semibold tracking-tight">工作流编排</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">通过 DSL 或 SDK 把工具、检索与模型拼装成可靠的流水线。</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<i data-lucide="git-branch"></i> 可视化 DAG 调试
              </div>
</div>
<div className="group rounded-xl ring-1 ring-white/10 bg-white/[0.04] hover:bg-white/[0.06] transition-colors p-5">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md bg-white/10 flex items-center justify-center ring-1 ring-inset ring-white/15">
<i className="text-teal-300" data-lucide="globe-2"></i>
</div>
<h3 className="font-semibold tracking-tight">全球化部署</h3>
</div>
<p className="mt-2 text-sm text-neutral-300">多区域多活与边缘加速，遵循本地化合规要求。</p>
<div className="mt-4 flex items-center gap-2 text-xs text-neutral-300">
<i data-lucide="route"></i> 智能路由与回退
              </div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-t border-white/10" id="docs">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-10">
<div className="max-w-xl">
<h3 className="text-2xl sm:text-3xl font-semibold tracking-tight">五分钟接入 · 简洁一致的 API</h3>
<p className="mt-3 text-neutral-300">统一的 Chat、Completions、Embeddings 与 Files 接口，自动重试与速率控制。</p>
<ul className="mt-6 space-y-3 text-sm text-neutral-300">
<li className="flex items-start gap-3"><i className="text-emerald-300 mt-0.5" data-lucide="check-circle-2"></i> SDK 覆盖 Node、Python、Go、Rust</li>
<li className="flex items-start gap-3"><i className="text-emerald-300 mt-0.5" data-lucide="check-circle-2"></i> 事件流与函数调用，天然支持工具链</li>
<li className="flex items-start gap-3"><i className="text-emerald-300 mt-0.5" data-lucide="check-circle-2"></i> 全量审计与组织级密钥管理</li>
</ul>
<div className="mt-6 flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm hover:bg-neutral-100" href="#">
<i data-lucide="file-text"></i> 查看文档
                </a>
<a className="inline-flex items-center gap-2 rounded-md ring-1 ring-inset ring-white/10 px-4 py-2.5 text-sm text-neutral-200 hover:bg-white/5 hover:text-white" href="#">
<i data-lucide="codesandbox"></i> 在沙盒中试用
                </a>
</div>
</div>
<div className="rounded-xl ring-1 ring-white/10 bg-white/5 p-4">
<div className="grid gap-4 sm:grid-cols-2">
<div className="rounded-lg ring-1 ring-white/10 bg-neutral-950/60 p-4">
<div className="text-xs text-neutral-400 flex items-center gap-2">
<i data-lucide="network"></i> cURL
                  </div>
<pre className="mt-2 overflow-x-auto text-[12.5px] leading-6 text-neutral-200"><code>curl https://api.nova.ai/v1/chat/completions \
  -H "Authorization: Bearer $NOVA_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "nova-3.5-pro",
    "messages": [
      {"role":"user","content":"写一首关于海风的俳句"}
    ]
  }'</code></pre>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-neutral-950/60 p-4">
<div className="text-xs text-neutral-400 flex items-center gap-2">
<i data-lucide="braces"></i> Python
                  </div>
<pre className="mt-2 overflow-x-auto text-[12.5px] leading-6 text-neutral-200"><code>from nova import Nova

client = Nova(api_key=os.environ["NOVA_API_KEY"])

resp = client.chat.completions.create(
  model="nova-3.5-pro",
  messages=[{"role":"user","content":"列出三条性能优化建议"}],
  temperature=0.2
)

print(resp.choices[0].message.content)</code></pre>
</div>
<div className="rounded-lg ring-1 ring-white/10 bg-neutral-950/60 p-4 sm:col-span-2">
<div className="text-xs text-neutral-400 flex items-center gap-2">
<i data-lucide="cable"></i> 函数调用
                  </div>
<pre className="mt-2 overflow-x-auto text-[12.5px] leading-6 text-neutral-200"><code>tools = [{
  "type": "function",
  "function": {
    "name": "get_weather",
    "parameters": { "city": "string" }
  }
}]

# 模型会在需要时调用 get_weather，并返回结构化响应</code></pre>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-24 border-t border-white/10" id="pricing">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-3xl text-center">
<h3 className="text-3xl sm:text-4xl font-semibold tracking-tight">透明、可预测的价格</h3>
<p className="mt-3 text-neutral-300">按使用计费，按需扩展。针对初创与企业提供灵活方案。</p>
</div>
<div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 flex flex-col">
<div className="flex items-center justify-between">
<div className="text-lg font-semibold tracking-tight">入门</div>
<i data-lucide="feather"></i>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">免费</div>
<p className="mt-2 text-sm text-neutral-300">适合个人与原型</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i data-lucide="check"></i> 每月 5 万 tokens</li>
<li className="flex items-center gap-2"><i data-lucide="check"></i> 基础模型与日志</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-3.5 py-2 text-sm hover:bg-neutral-100" href="#">开始</a>
</div>
<div className="relative rounded-2xl ring-2 ring-white/30 bg-white/5 p-6 flex flex-col">
<div className="absolute -top-3 right-4 rounded-full bg-emerald-400/90 px-2 py-0.5 text-[11px] font-medium text-neutral-900">推荐</div>
<div className="flex items-center justify-between">
<div className="text-lg font-semibold tracking-tight">专业</div>
<i data-lucide="zap"></i>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">¥ 299/月</div>
<p className="mt-2 text-sm text-neutral-300">用于小团队上线与增长</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i data-lucide="check"></i> 每月 2,000 万 tokens</li>
<li className="flex items-center gap-2"><i data-lucide="check"></i> RAG 与函数调用</li>
<li className="flex items-center gap-2"><i data-lucide="check"></i> 组织权限与审计</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md bg-white text-neutral-900 px-3.5 py-2 text-sm hover:bg-neutral-100" href="#">试用专业版</a>
</div>
<div className="rounded-2xl ring-1 ring-white/10 bg-white/5 p-6 flex flex-col">
<div className="flex items-center justify-between">
<div className="text-lg font-semibold tracking-tight">企业</div>
<i data-lucide="building-2"></i>
</div>
<div className="mt-2 text-3xl font-semibold tracking-tight">自定义</div>
<p className="mt-2 text-sm text-neutral-300">高合规与私有化部署</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><i data-lucide="check"></i> 私有网络与专属配额</li>
<li className="flex items-center gap-2"><i data-lucide="check"></i> SLA 与安全评估</li>
<li className="flex items-center gap-2"><i data-lucide="check"></i> 专属技术支持</li>
</ul>
<a className="mt-6 inline-flex items-center justify-center gap-2 rounded-md ring-1 ring-inset ring-white/10 px-3.5 py-2 text-sm text-neutral-200 hover:bg-white/5 hover:text-white" href="#">联系销售</a>
</div>
</div>
</div>
</section>

<section className="py-16 sm:py-20 border-t border-white/10" id="get-started">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-gradient-to-b from-white/5 to-white/[0.04] p-8">
<div className="absolute -inset-16 opacity-20 blur-2xl" style={{background: 'radial-gradient(50% 50% at 30% 50%, rgba(99,102,241,0.35), rgba(0,0,0,0) 70%)'}}></div>
<div className="relative">
<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
<div>
<h4 className="text-2xl font-semibold tracking-tight">今天启动你的 AI 项目</h4>
<p className="mt-2 text-neutral-300">创建组织、生成密钥，五分钟内完成接入与首条请求。</p>
</div>
<div className="flex gap-3">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm hover:bg-neutral-100" href="#">
<i data-lucide="key"></i> 生成 API Key
                  </a>
<a className="inline-flex items-center gap-2 rounded-md ring-1 ring-inset ring-white/10 px-4 py-2.5 text-sm text-neutral-200 hover:bg-white/5 hover:text-white" href="#">
<i data-lucide="play"></i> 快速上手
                  </a>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-10 border-t border-white/10">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
<div>
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/5 ring-1 ring-inset ring-white/15">
<span className="text-sm font-semibold tracking-tight">NA</span>
</div>
<span className="text-[15px] leading-none font-semibold tracking-tight">NovaAI</span>
</div>
<p className="mt-3 text-sm text-neutral-400">统一模型接入与运维平台。为开发者与企业提供稳定可靠的 AI 基础设施。</p>
</div>
<div>
<div className="text-sm font-medium mb-3">产品</div>
<ul className="space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">控制台</a></li>
<li><a className="hover:text-white transition-colors" href="#">模型目录</a></li>
<li><a className="hover:text-white transition-colors" href="#">用量与账单</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-3">资源</div>
<ul className="space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">文档</a></li>
<li><a className="hover:text-white transition-colors" href="#">状态页</a></li>
<li><a className="hover:text-white transition-colors" href="#">变更日志</a></li>
</ul>
</div>
<div>
<div className="text-sm font-medium mb-3">公司</div>
<ul className="space-y-2 text-sm text-neutral-300">
<li><a className="hover:text-white transition-colors" href="#">关于我们</a></li>
<li><a className="hover:text-white transition-colors" href="#">隐私与合规</a></li>
<li><a className="hover:text-white transition-colors" href="#">联系我们</a></li>
</ul>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
<p>© <span id="year"></span> NovaAI. 保留所有权利。</p>
<div className="flex items-center gap-4">
<a className="hover:text-white transition-colors" href="#">服务条款</a>
<a className="hover:text-white transition-colors" href="#">隐私政策</a>
<a className="hover:text-white transition-colors" href="#">Cookie</a>
</div>
</div>
</div>
</footer>
</div>

    </>
  );
}
