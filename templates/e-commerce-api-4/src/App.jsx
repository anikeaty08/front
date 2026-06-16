import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    lucide.createIcons({ attrs: { "stroke-width": 1.5 } });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 p-4 sm:p-6 lg:p-10">

<section className="w-full lg:w-1/3 flex flex-col gap-6">
<header className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-slate-800 flex items-center justify-center text-xs font-semibold tracking-tight">
<span>EC</span>
</div>
<div>
<h1 className="text-2xl sm:text-3xl tracking-tight font-semibold text-slate-50">
            E‑commerce API Blueprint
          </h1>
<p className="text-base text-slate-400 mt-1">
            JWT‑secured backend with full auth, OTP password reset, products, cart &amp; favorites.
          </p>
</div>
</header>
<div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5 flex flex-col gap-4">
<h2 className="text-lg tracking-tight font-semibold text-slate-100">
          Tech Stack (Suggested)
        </h2>
<ul className="space-y-2 text-base text-slate-300">
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-400" data-lucide="database"></i>
<span>PostgreSQL / MySQL (relational DB)</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-400" data-lucide="server"></i>
<span>Node.js + Express / NestJS (REST API)</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-400" data-lucide="key-round"></i>
<span>JWT (access + refresh tokens)</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-400" data-lucide="mail"></i>
<span>Nodemailer / external mail service for OTP</span>
</li>
<li className="flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-400" data-lucide="smartphone"></i>
<span>Flutter app via HTTP / Dio / http package</span>
</li>
</ul>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5 text-base text-slate-300 space-y-2">
<h3 className="text-md tracking-tight font-semibold text-slate-100">
          Auth Flow Summary
        </h3>
<ol className="list-decimal list-inside space-y-1">
<li>User registers → email verified (optional extension).</li>
<li>Login → get <span className="font-medium text-slate-100">accessToken</span> + <span className="font-medium text-slate-100">refreshToken</span>.</li>
<li>Protected APIs use <span className="font-medium text-slate-100">Authorization: Bearer &lt;accessToken&gt;</span>.</li>
<li>Forgot password → send OTP to email → verify OTP → set new password.</li>
</ol>
</div>
<div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-4 sm:p-5 text-base text-slate-300 space-y-2">
<h3 className="text-md tracking-tight font-semibold text-slate-100">
          Flutter Integration Tips
        </h3>
<ul className="space-y-1 list-disc list-inside">
<li>Store tokens securely (flutter_secure_storage).</li>
<li>Add interceptor to refresh tokens on 401.</li>
<li>Use models + fromJson/toJson for requests and responses.</li>
</ul>
</div>
</section>

<section className="w-full lg:w-2/3 flex flex-col gap-6">

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between gap-3">
<h2 className="text-lg tracking-tight font-semibold text-slate-100 flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-300" data-lucide="database"></i>
            Database Schema (Relational)
          </h2>
<span className="text-xs text-slate-400 bg-slate-900 border border-slate-800 rounded-full px-2 py-0.5">
            Core Tables
          </span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<h3 className="text-md tracking-tight font-semibold text-slate-100 mb-2">users</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK, uuid / bigint, auto)</li>
<li>name (string)</li>
<li>email (string, unique, indexed)</li>
<li>password_hash (string, bcrypt/argon2)</li>
<li>phone (string, nullable)</li>
<li>role (enum: customer, admin)</li>
<li>is_email_verified (boolean, default false)</li>
<li>created_at, updated_at (timestamp)</li>
</ul>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<h3 className="text-md tracking-tight font-semibold text-slate-100 mb-2">password_reset_otps</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK)</li>
<li>user_id (FK → users.id)</li>
<li>otp_code (string, 6 digits)</li>
<li>expires_at (timestamp)</li>
<li>is_used (boolean)</li>
<li>created_at (timestamp)</li>
</ul>
<h3 className="text-md tracking-tight font-semibold text-slate-100 mt-3 mb-1">refresh_tokens</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK)</li>
<li>user_id (FK → users.id)</li>
<li>token (string, hashed)</li>
<li>expires_at (timestamp)</li>
<li>revoked (boolean)</li>
<li>created_at (timestamp)</li>
</ul>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<h3 className="text-md tracking-tight font-semibold text-slate-100 mb-2">products</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK)</li>
<li>title (string)</li>
<li>slug (string, unique)</li>
<li>description (text)</li>
<li>price (decimal(10,2))</li>
<li>discount_price (decimal(10,2), nullable)</li>
<li>stock (int)</li>
<li>status (enum: active, inactive, draft)</li>
<li>created_at, updated_at</li>
</ul>
<h3 className="text-md tracking-tight font-semibold text-slate-100 mt-3 mb-1">product_images</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK)</li>
<li>product_id (FK → products.id)</li>
<li>image_url (string)</li>
<li>is_primary (boolean)</li>
</ul>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<h3 className="text-md tracking-tight font-semibold text-slate-100 mb-2">categories</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK)</li>
<li>name (string)</li>
<li>slug (string, unique)</li>
<li>parent_id (FK → categories.id, nullable)</li>
</ul>
<h3 className="text-md tracking-tight font-semibold text-slate-100 mt-3 mb-1">product_categories</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>product_id (FK → products.id)</li>
<li>category_id (FK → categories.id)</li>
<li>PK: (product_id, category_id)</li>
</ul>
<h3 className="text-md tracking-tight font-semibold text-slate-100 mt-3 mb-1">favorites</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>user_id (FK → users.id)</li>
<li>product_id (FK → products.id)</li>
<li>PK: (user_id, product_id)</li>
<li>created_at</li>
</ul>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<h3 className="text-md tracking-tight font-semibold text-slate-100 mb-2">carts</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK)</li>
<li>user_id (FK → users.id, unique)</li>
<li>created_at, updated_at</li>
</ul>
<h3 className="text-md tracking-tight font-semibold text-slate-100 mt-3 mb-1">cart_items</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK)</li>
<li>cart_id (FK → carts.id)</li>
<li>product_id (FK → products.id)</li>
<li>quantity (int)</li>
<li>unit_price (decimal(10,2) snapshot)</li>
<li>created_at, updated_at</li>
</ul>
</div>
<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<h3 className="text-md tracking-tight font-semibold text-slate-100 mb-2">orders</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK)</li>
<li>user_id (FK → users.id)</li>
<li>status (enum: pending, paid, shipped, completed, cancelled)</li>
<li>total_amount (decimal(10,2))</li>
<li>payment_method (enum: cod, card, wallet, upi, etc)</li>
<li>shipping_address_id (FK → user_addresses.id)</li>
<li>created_at, updated_at</li>
</ul>
<h3 className="text-md tracking-tight font-semibold text-slate-100 mt-3 mb-1">order_items</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK)</li>
<li>order_id (FK → orders.id)</li>
<li>product_id (FK → products.id)</li>
<li>title_snapshot (string)</li>
<li>unit_price (decimal(10,2))</li>
<li>quantity (int)</li>
</ul>
</div>

<div className="rounded-xl border border-slate-800 bg-slate-950/60 p-4">
<h3 className="text-md tracking-tight font-semibold text-slate-100 mb-2">user_addresses</h3>
<ul className="text-base text-slate-300 space-y-1">
<li>id (PK)</li>
<li>user_id (FK → users.id)</li>
<li>full_name (string)</li>
<li>line1, line2 (string)</li>
<li>city, state, country (string)</li>
<li>postal_code (string)</li>
<li>phone (string)</li>
<li>is_default (boolean)</li>
<li>created_at, updated_at</li>
</ul>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 space-y-4">
<div className="flex items-center justify-between">
<h2 className="text-lg tracking-tight font-semibold text-slate-100 flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-300" data-lucide="network"></i>
            REST API Design
          </h2>
<span className="text-xs text-emerald-300 bg-emerald-900/40 border border-emerald-700/60 rounded-full px-2 py-0.5">
            JWT Secured
          </span>
</div>

<div className="space-y-3">
<h3 className="text-md tracking-tight font-semibold text-slate-100 flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-300" data-lucide="shield-check"></i>
            Auth &amp; User
          </h3>
<div className="border border-slate-800 rounded-xl overflow-hidden">
<table className="w-full text-base text-left text-slate-300">
<thead className="bg-slate-950/80 text-slate-400 text-xs uppercase">
<tr>
<th className="py-2.5 px-3">Method</th>
<th className="py-2.5 px-3">Endpoint</th>
<th className="py-2.5 px-3">Auth</th>
<th className="py-2.5 px-3">Description</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">
<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/auth/register</td>
<td className="py-2.5 px-3 text-xs text-slate-400">Public</td>
<td className="py-2.5 px-3">Create account (name, email, password).</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/auth/login</td>
<td className="py-2.5 px-3 text-xs text-slate-400">Public</td>
<td className="py-2.5 px-3">
                    Returns <span className="text-emerald-300">accessToken</span> (short‑lived) + 
                    <span className="text-emerald-300">refreshToken</span> (long‑lived).
                  </td>
</tr>
<tr>
<td className="py-2.5 px-3 text-sky-300 font-medium">GET</td>
<td className="py-2.5 px-3 text-slate-100">/api/auth/me</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">Current user profile from token.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/auth/refresh</td>
<td className="py-2.5 px-3 text-xs text-slate-400">Refresh token</td>
<td className="py-2.5 px-3">Get new access token using refresh token.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-rose-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/auth/logout</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">Invalidate current refresh token.</td>
</tr>
</tbody>
</table>
</div>

<div className="border border-slate-800 rounded-xl overflow-hidden">
<table className="w-full text-base text-left text-slate-300">
<thead className="bg-slate-950/80 text-slate-400 text-xs uppercase">
<tr>
<th className="py-2.5 px-3">Method</th>
<th className="py-2.5 px-3">Endpoint</th>
<th className="py-2.5 px-3">Auth</th>
<th className="py-2.5 px-3">Description</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">
<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/auth/forgot-password</td>
<td className="py-2.5 px-3 text-xs text-slate-400">Public</td>
<td className="py-2.5 px-3">
                    Body: { email } → generate OTP, save in 
                    <span className="text-slate-100">password_reset_otps</span>, send to email.
                  </td>
</tr>
<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/auth/verify-otp</td>
<td className="py-2.5 px-3 text-xs text-slate-400">Public</td>
<td className="py-2.5 px-3">
                    Body: { email, otp } → validate code &amp; expiration; respond with temporary token or success flag.
                  </td>
</tr>
<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/auth/reset-password</td>
<td className="py-2.5 px-3 text-xs text-slate-400">Public / temp token</td>
<td className="py-2.5 px-3">
                    Body: { email, otp, newPassword } (or { tempToken, newPassword }). Mark OTP as used, update password.
                  </td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-3">
<h3 className="text-md tracking-tight font-semibold text-slate-100 flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-300" data-lucide="package-search"></i>
            Products &amp; Categories
          </h3>
<div className="border border-slate-800 rounded-xl overflow-hidden">
<table className="w-full text-base text-left text-slate-300">
<thead className="bg-slate-950/80 text-slate-400 text-xs uppercase">
<tr>
<th className="py-2.5 px-3">Method</th>
<th className="py-2.5 px-3">Endpoint</th>
<th className="py-2.5 px-3">Auth</th>
<th className="py-2.5 px-3">Description</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">
<tr>
<td className="py-2.5 px-3 text-sky-300 font-medium">GET</td>
<td className="py-2.5 px-3 text-slate-100">
                    /api/products?search=&amp;category=&amp;page=&amp;limit=
                  </td>
<td className="py-2.5 px-3 text-xs text-slate-400">Public</td>
<td className="py-2.5 px-3">List products with pagination, search &amp; filters.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-sky-300 font-medium">GET</td>
<td className="py-2.5 px-3 text-slate-100">/api/products/:id</td>
<td className="py-2.5 px-3 text-xs text-slate-400">Public</td>
<td className="py-2.5 px-3">Single product details with images.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-sky-300 font-medium">GET</td>
<td className="py-2.5 px-3 text-slate-100">/api/categories</td>
<td className="py-2.5 px-3 text-xs text-slate-400">Public</td>
<td className="py-2.5 px-3">List categories (optionally tree).</td>
</tr>

<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/admin/products</td>
<td className="py-2.5 px-3 text-xs text-rose-300">Admin</td>
<td className="py-2.5 px-3">Create product (title, price, images, categories).</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-amber-300 font-medium">PUT</td>
<td className="py-2.5 px-3 text-slate-100">/api/admin/products/:id</td>
<td className="py-2.5 px-3 text-xs text-rose-300">Admin</td>
<td className="py-2.5 px-3">Update product data.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-rose-300 font-medium">DELETE</td>
<td className="py-2.5 px-3 text-slate-100">/api/admin/products/:id</td>
<td className="py-2.5 px-3 text-xs text-rose-300">Admin</td>
<td className="py-2.5 px-3">Delete / soft delete product.</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-3">
<h3 className="text-md tracking-tight font-semibold text-slate-100 flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-300" data-lucide="shopping-bag"></i>
            Cart &amp; Favorites
          </h3>
<div className="border border-slate-800 rounded-xl overflow-hidden">
<table className="w-full text-base text-left text-slate-300">
<thead className="bg-slate-950/80 text-slate-400 text-xs uppercase">
<tr>
<th className="py-2.5 px-3">Method</th>
<th className="py-2.5 px-3">Endpoint</th>
<th className="py-2.5 px-3">Auth</th>
<th className="py-2.5 px-3">Description</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">

<tr>
<td className="py-2.5 px-3 text-sky-300 font-medium">GET</td>
<td className="py-2.5 px-3 text-slate-100">/api/cart</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">Get current user's cart with items.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/cart/items</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">
                    Body: { productId, quantity } → add/update cart item.
                  </td>
</tr>
<tr>
<td className="py-2.5 px-3 text-amber-300 font-medium">PATCH</td>
<td className="py-2.5 px-3 text-slate-100">/api/cart/items/:id</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">Update quantity.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-rose-300 font-medium">DELETE</td>
<td className="py-2.5 px-3 text-slate-100">/api/cart/items/:id</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">Remove item from cart.</td>
</tr>

<tr>
<td className="py-2.5 px-3 text-sky-300 font-medium">GET</td>
<td className="py-2.5 px-3 text-slate-100">/api/favorites</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">List favorite products for user.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/favorites</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">Body: { productId } → add to favorites.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-rose-300 font-medium">DELETE</td>
<td className="py-2.5 px-3 text-slate-100">/api/favorites/:productId</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">Remove from favorites.</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-3">
<h3 className="text-md tracking-tight font-semibold text-slate-100 flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-300" data-lucide="receipt-text"></i>
            Orders &amp; Checkout
          </h3>
<div className="border border-slate-800 rounded-xl overflow-hidden">
<table className="w-full text-base text-left text-slate-300">
<thead className="bg-slate-950/80 text-slate-400 text-xs uppercase">
<tr>
<th className="py-2.5 px-3">Method</th>
<th className="py-2.5 px-3">Endpoint</th>
<th className="py-2.5 px-3">Auth</th>
<th className="py-2.5 px-3">Description</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-800">
<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/orders</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">
                    Create order from cart. Body: { addressId, paymentMethod }.
                  </td>
</tr>
<tr>
<td className="py-2.5 px-3 text-sky-300 font-medium">GET</td>
<td className="py-2.5 px-3 text-slate-100">/api/orders</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">List current user's orders.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-sky-300 font-medium">GET</td>
<td className="py-2.5 px-3 text-slate-100">/api/orders/:id</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">Order detail with items.</td>
</tr>

<tr>
<td className="py-2.5 px-3 text-sky-300 font-medium">GET</td>
<td className="py-2.5 px-3 text-slate-100">/api/addresses</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">List user addresses.</td>
</tr>
<tr>
<td className="py-2.5 px-3 text-emerald-300 font-medium">POST</td>
<td className="py-2.5 px-3 text-slate-100">/api/addresses</td>
<td className="py-2.5 px-3 text-xs text-emerald-300">Bearer</td>
<td className="py-2.5 px-3">Create address.</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="space-y-3">
<h3 className="text-md tracking-tight font-semibold text-slate-100 flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-300" data-lucide="code-2"></i>
            Example Request / Response
          </h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="border border-slate-800 rounded-xl bg-slate-950/70 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-emerald-300">POST /api/auth/login</span>
<span className="text-[0.65rem] text-slate-500">Request</span>
</div>
<pre className="text-xs text-slate-300 overflow-auto whitespace-pre-wrap">
{
  "email": "user@example.com",
  "password": "StrongPassword123"
}
              </pre>
</div>
<div className="border border-slate-800 rounded-xl bg-slate-950/70 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-emerald-300">200 OK</span>
<span className="text-[0.65rem] text-slate-500">Response</span>
</div>
<pre className="text-xs text-slate-300 overflow-auto whitespace-pre-wrap">
{
  "user": {
    "id": 1,
    "name": "Demo User",
    "email": "user@example.com",
    "role": "customer"
  },
  "accessToken": "jwt-access-token",
  "refreshToken": "jwt-refresh-token"
}
              </pre>
</div>
<div className="border border-slate-800 rounded-xl bg-slate-950/70 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-emerald-300">POST /api/auth/forgot-password</span>
<span className="text-[0.65rem] text-slate-500">Request</span>
</div>
<pre className="text-xs text-slate-300 overflow-auto whitespace-pre-wrap">
{
  "email": "user@example.com"
}
              </pre>
</div>
<div className="border border-slate-800 rounded-xl bg-slate-950/70 p-3">
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-emerald-300">200 OK</span>
<span className="text-[0.65rem] text-slate-500">Response</span>
</div>
<pre className="text-xs text-slate-300 overflow-auto whitespace-pre-wrap">
{
  "message": "OTP sent to your email"
}
              </pre>
</div>
</div>
</div>
</div>

<div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 sm:p-5 space-y-3">
<h2 className="text-lg tracking-tight font-semibold text-slate-100 flex items-center gap-2">
<i className="w-4 h-4 stroke-slate-300" data-lucide="smartphone"></i>
          Flutter HTTP Usage (Pseudo)
        </h2>
<pre className="text-xs text-slate-200 bg-slate-950/80 border border-slate-800 rounded-xl p-3 overflow-auto whitespace-pre-wrap">
final client = Dio(BaseOptions(baseUrl: 'https://your-api.com'));

Future&lt;void&gt; login(String email, String password) async {
  final response = await client.post('/api/auth/login', data: {
    'email': email,
    'password': password,
  });

  final accessToken = response.data['accessToken'];
  final refreshToken = response.data['refreshToken'];

  // Save tokens securely and attach Authorization header
}

Future&lt;List&lt;dynamic&gt;&gt; getProducts() async {
  final response = await client.get('/api/products', queryParameters: {
    'page': 1,
    'limit': 20,
  });
  return response.data['items'];
}
        </pre>
</div>
</section>
</div>


    </>
  );
}
