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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}
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
      

<header className="bg-white shadow">
<div className="mx-auto max-w-7xl px-4 py-5 flex items-center justify-between">
<div className="flex items-center space-x-2">
<svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" strokeWidth="2"></circle><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-xl font-bold text-blue-700">OpenAPI Docs</span>
</div>
<nav className="space-x-6">
<a className="text-gray-700 hover:text-blue-600" href="#">首页</a>
<a className="text-gray-700 hover:text-blue-600" href="#reference">接口参考</a>
<a className="text-gray-700 hover:text-blue-600" href="#examples">示例</a>
<a className="text-gray-700 hover:text-blue-600" href="#contact">联系我们</a>
</nav>
</div>
</header>

<main className="max-w-7xl mx-auto py-10 px-4">

<section className="mb-10">
<h1 className="text-3xl font-extrabold mb-4 text-blue-600">欢迎使用 OpenAPI 文档</h1>
<p className="mb-3 text-lg">
          本站点提供高效易用的 API 文档，帮助开发者快速集成我们的服务。
        </p>
<div className="bg-blue-50 border-l-4 border-blue-500 p-4">
<span className="font-semibold text-blue-700">API Base URL：</span>
<span className="font-mono text-blue-800">https://api.example.com/v1/</span>
</div>
</section>

<section className="mb-12" id="auth">
<h2 className="text-2xl font-semibold text-gray-800 mb-3">认证</h2>
<p className="mb-2">
          所有接口请求需要携带 <span className="font-mono bg-gray-100 px-1 py-0.5 rounded">Authorization</span> 头部传递 API Token。
        </p>
<pre className="bg-gray-800 text-green-200 rounded p-4 text-sm overflow-x-auto"><code>Authorization: Bearer {"<"}your_api_key{">"}</code></pre>
</section>

<section className="mb-12" id="reference">
<h2 className="text-2xl font-semibold text-gray-800 mb-5">接口列表</h2>
<div className="space-y-8">

<div className="bg-white p-6 rounded shadow border">
<div className="flex items-center mb-2 space-x-2">
<span className="inline-block px-2 py-0.5 bg-blue-100 text-blue-800 font-medium text-xs rounded">GET</span>
<span className="font-mono text-sm text-gray-900">/users</span>
</div>
<p className="mb-2 text-gray-700">获取用户列表。</p>
<details>
<summary className="cursor-pointer text-blue-700 hover:underline text-sm">请求示例</summary>
<pre className="bg-gray-900 text-gray-100 rounded mt-2 mb-2 p-3 text-xs overflow-x-auto"><code>GET https://api.example.com/v1/users
Authorization: Bearer {"<"}your_api_key{">"}</code></pre>
</details>
<div className="mt-2">
<span className="font-semibold text-gray-700">响应示例：</span>
<pre className="bg-gray-100 rounded mt-1 p-3 text-xs overflow-x-auto"><code>{"{"}
  "users": [
    {"{"}"id": 1, "name": "张三"{"}"},
    {"{"}"id": 2, "name": "李四"{"}"}
  ]
{"}"}</code></pre>
</div>
</div>

<div className="bg-white p-6 rounded shadow border">
<div className="flex items-center mb-2 space-x-2">
<span className="inline-block px-2 py-0.5 bg-green-100 text-green-800 font-medium text-xs rounded">POST</span>
<span className="font-mono text-sm text-gray-900">/users</span>
</div>
<p className="mb-2 text-gray-700">创建新的用户。</p>
<details>
<summary className="cursor-pointer text-green-700 hover:underline text-sm">请求示例</summary>
<pre className="bg-gray-900 text-gray-100 rounded mt-2 mb-2 p-3 text-xs overflow-x-auto"><code>POST https://api.example.com/v1/users
Content-Type: application/json
Authorization: Bearer {"<"}your_api_key{">"}

{"{"}
  "name": "王五"
{"}"}</code></pre>
</details>
<div className="mt-2">
<span className="font-semibold text-gray-700">响应示例：</span>
<pre className="bg-gray-100 rounded mt-1 p-3 text-xs overflow-x-auto"><code>{"{"}
  "id": 3,
  "name": "王五"
{"}"}</code></pre>
</div>
</div>
</div>
</section>

<section className="mb-12" id="examples">
<h2 className="text-2xl font-semibold text-gray-800 mb-4">使用示例</h2>
<div className="grid gap-8 md:grid-cols-2">
<div>
<h3 className="text-lg font-bold text-gray-700 mb-2">Python 示例</h3>
<pre className="bg-gray-900 text-gray-100 rounded p-4 text-xs overflow-x-auto"><code>import requests

headers = {"{"}
  "Authorization": "Bearer {"<"}your_api_key{">"}"
{"}"}
res = requests.get("https://api.example.com/v1/users", headers=headers)
print(res.json())</code></pre>
</div>
<div>
<h3 className="text-lg font-bold text-gray-700 mb-2">cURL 示例</h3>
<pre className="bg-gray-900 text-gray-100 rounded p-4 text-xs overflow-x-auto"><code>curl -H "Authorization: Bearer {"<"}your_api_key{">"}" \
  https://api.example.com/v1/users</code></pre>
</div>
</div>
</section>

<section className="mb-10" id="contact">
<h2 className="text-2xl font-semibold text-gray-800 mb-3">联系我们</h2>
<p className="mb-1">如有疑问或需要技术支持，请发送邮件至 <a className="text-blue-600 underline" href="mailto:support@example.com">support@example.com</a>。</p>
</section>
</main>
<footer className="border-t bg-white py-4 mt-16">
<div className="text-center text-sm text-gray-500">© 2024 OpenAPI 文档. 保留所有权利。</div>
</footer>

    </>
  );
}
