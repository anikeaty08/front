import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}


mermaid.initialize({ startOnLoad: true, theme: 'dark' });
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/40 border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center h-14">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded bg-white/10 flex items-center justify-center tracking-tight text-xs font-semibold">K</div>
<span className="text-zinc-100 text-sm font-medium tracking-tight">KeuAI</span>
<span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 ml-2">MVP Spec</span>
</div>
<div className="ml-auto flex items-center gap-3">
<span className="text-[11px] text-zinc-400">Production-ready • Scalable</span>
</div>
</div>
</header>
<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-12 gap-6">

<aside className="col-span-12 lg:col-span-3">
<nav className="p-3 rounded-xl border border-white/10 bg-white/5">
<div className="text-xs uppercase tracking-tight text-zinc-400 mb-3">Navigasi</div>
<ul className="space-y-1 text-sm">
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#1">1) Arsitektur &amp; Stack</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#2">2) Folder &amp; Infra</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#3">3) ENV &amp; Konfig</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#4">4) ERD &amp; Skema</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#5">5) RBAC, Auth, Audit</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#6">6) Integrasi Chat</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#7">7) AI Pipeline</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#8">8) Fitur Fungsional</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#9">9) Subscription &amp; Payment</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#10">10) OpenAPI</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#11">11) Dashboard UI</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#12">12) Keamanan</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#13">13) Non-Functional</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#14">14) Testing &amp; QA</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#15">15) Observability</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#16">16) Deployment</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#17">17) Dokumentasi</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#18">18) Konten Default</a></li>
<li><a className="group flex items-center gap-2 px-2 py-1.5 rounded hover:bg-white/5 hover:text-white" href="#19-24">19-24) Deliverables &amp; QA</a></li>
</ul>
<div className="mt-4 pt-4 border-t border-white/10">
<div className="text-xs text-zinc-400 mb-2">Quick Start</div>
<pre className="text-[11px] bg-black/40 rounded p-3 border border-white/10 overflow-auto"><code>git clone https://example.com/keuai.git
cd keuai
cp .env.example .env
make bootstrap
docker compose up -d --build
make migrate seed</code></pre>
</div>
</nav>
</aside>

<section className="col-span-12 lg:col-span-9 space-y-10">

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="1">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">1) Arsitektur &amp; Stack</h2>
<p className="text-sm text-zinc-400 mt-2">Dua mode: Microservices (skala besar) dan Monolith (MVP cepat). Keduanya production-ready, dapat dioper ke mode lain.</p>
<div className="mt-4 grid grid-cols-1 gap-6">
<div className="rounded-lg border border-white/10 p-4 bg-black/30">
<div className="text-sm font-semibold tracking-tight text-white mb-2">Mode A — Microservices</div>
<pre className="mermaid text-[12px] leading-5">
graph TD
  subgraph Clients
    U1[WA Users]:::c --&gt; GW
    U2[Telegram Users]:::c --&gt; GW
    U3[Slack Users]:::c --&gt; GW
    D[Dashboard Web]:::c --&gt; DASH
  end

  GW[chat-gateway (Node.js)\nWPPConnect/Telegram/Slack]:::s --&gt; MQ[(RabbitMQ/Kafka)]:::q
  MQ --&gt; AI[ai-processor (Python FastAPI)\nLangChain + OCR + STT]:::s
  MQ --&gt; API[core-api (Laravel 12)]:::s
  DASH[dashboard (Next.js 15)]:::s --&gt; API

  API --&gt; PG[(PostgreSQL)]:::d
  API --&gt; RD[(Redis cache/rate-limit)]:::d
  API --&gt; S3[(S3/R2/MinIO)]:::d
  AI --&gt; S3
  GW --&gt; S3
  GW --&gt; RD

  subgraph Sec/Obs
    OT[OpenTelemetry]:::o --&gt; LG[JSON Logs]:::o
    PR[Reverse Proxy (Nginx/Traefik)]:::o --&gt; GW
    PR --&gt; API
    PR --&gt; DASH
  end

  classDef s fill:#111,stroke:#888,stroke-width:1px,color:#fff;
  classDef d fill:#0b132b,stroke:#5bc0be,color:#9be7ff;
  classDef q fill:#1b1b1f,stroke:#f0b90b,color:#ffe8a3;
  classDef c fill:#111827,stroke:#374151,color:#cbd5e1;
  classDef o fill:#141414,stroke:#6b7280,color:#d1d5db;
              </pre>
<ul className="text-sm text-zinc-300 mt-3 list-disc pl-5">
<li>Gateway chat handle webhook dan sesi WA multi-nomor</li>
<li>AI Processor menangani OCR/STT/LLM via queue</li>
<li>Core API Laravel untuk domain, RBAC, billing, audit</li>
<li>Dashboard Next.js konsumsi Core API</li>
</ul>
</div>
<div className="rounded-lg border border-white/10 p-4 bg-black/30">
<div className="text-sm font-semibold tracking-tight text-white mb-2">Mode B — Monolith</div>
<pre className="mermaid text-[12px] leading-5">
graph TD
  U1[WA/Telegram/Slack]:::c --&gt; PR[Reverse Proxy]:::o --&gt; APP[Laravel 12 + Inertia Vue3]:::s
  APP --&gt; WKR[Queue Workers (Horizon)]:::s
  APP --&gt; PG[(PostgreSQL)]:::d
  APP --&gt; RD[(Redis)]:::d
  APP --&gt; S3[(S3/R2/MinIO)]:::d
  subgraph Sidecars
    OCR[OCR (Paddle/Tesseract)]:::s
    STT[Whisper (local/api)]:::s
  end
  WKR --&gt; OCR
  WKR --&gt; STT
  APP --&gt; OT[OpenTelemetry/Logs]:::o

  classDef s fill:#111,stroke:#888,color:#fff;
  classDef d fill:#0b132b,stroke:#5bc0be,color:#9be7ff;
  classDef c fill:#111827,stroke:#374151,color:#cbd5e1;
  classDef o fill:#141414,stroke:#6b7280,color:#d1d5db;
              </pre>
</div>
</div>
<div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="rounded-lg border border-white/10 p-4 bg-black/30">
<div className="text-sm font-semibold text-white tracking-tight mb-2">Trade-off Singkat</div>
<ul className="text-sm text-zinc-300 space-y-1">
<li>- Microservices: +Scaling +Fault Isolation +Team velocity | -Biaya -Kompleksitas</li>
<li>- Monolith: +Kecepatan dev +Biaya rendah +Observability sederhana | -Scaling tim -Bounded context</li>
</ul>
</div>
<div className="rounded-lg border border-white/10 p-4 bg-black/30">
<div className="text-sm font-semibold text-white tracking-tight mb-2">Target NFR</div>
<ul className="text-sm text-zinc-300 space-y-1">
<li>P99 &lt; 500ms; 50 rps pada 2 vCPU/4GB</li>
<li>OCR/STT 95% ≤ 60s untuk &lt;5MB</li>
<li>Uptime: probes liveness/readiness</li>
</ul>
</div>
</div>
<div className="mt-4 text-xs text-zinc-400">Stack: Node.js, FastAPI, Laravel 12, Next.js/Vue3, PostgreSQL, Redis, RabbitMQ/Kafka, S3/R2, OpenTelemetry.</div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="2">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">2) Folder &amp; Infra</h2>
<p className="text-sm text-zinc-400 mt-2">Struktur proyek untuk kedua mode, plus docker-compose, Dockerfile, dan Makefile/skrip.</p>
<h3 className="text-lg tracking-tight font-semibold mt-4">Struktur — Microservices</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>.
├─ services/
│  ├─ chat-gateway/        # Node.js (WPPConnect/Telegram/Slack)
│  │  ├─ src/
│  │  │  ├─ index.ts
│  │  │  ├─ adapters/{whatsapp,telegram,slack}.ts
│  │  │  └─ queue/publisher.ts
│  │  ├─ package.json
│  │  └─ Dockerfile
│  ├─ ai-processor/        # FastAPI (OCR/STT/Extract)
│  │  ├─ app/main.py
│  │  ├─ app/ocr.py
│  │  ├─ app/stt.py
│  │  ├─ app/extract.py
│  │  ├─ requirements.txt
│  │  └─ Dockerfile
│  ├─ core-api/            # Laravel 12
│  │  ├─ app/...
│  │  ├─ database/migrations/...
│  │  ├─ database/seeders/...
│  │  ├─ composer.json
│  │  └─ Dockerfile
│  └─ dashboard/           # Next.js 15
│     ├─ app/...
│     ├─ package.json
│     └─ Dockerfile
├─ infra/
│  ├─ docker-compose.micro.yml
│  ├─ docker-compose.monolith.yml
│  ├─ nginx/
│  │  └─ default.conf
│  ├─ traefik/
│  │  └─ traefik.yml
│  └─ supervisor/
│     ├─ horizon.conf
│     └─ workers.conf
├─ scripts/
│  ├─ dev.sh
│  ├─ test.sh
│  ├─ migrate.sh
│  ├─ seed.sh
│  └─ backup.sh
├─ Makefile
├─ .env.example
├─ openapi.yaml
└─ README.md</code></pre>
<h3 className="text-lg tracking-tight font-semibold mt-4">Struktur — Monolith</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>.
├─ app/ (Laravel 12)
│  ├─ Http/Controllers/...
│  ├─ Models/...
│  ├─ Policies/...
│  ├─ Jobs/...
│  ├─ Services/AI/...
│  └─ Services/Banking/...
├─ resources/js/ (Inertia + Vue3)
│  ├─ Pages/{Auth,Onboarding,Dashboard,Transactions,Categories,Channels,Plans,Audit}.vue
│  └─ Components/{Chart,Table,Drawer,Uploader,Wizard}.vue
├─ database/migrations/*.php
├─ database/seeders/*.php
├─ Dockerfile
├─ docker-compose.yml
└─ Makefile</code></pre>
<h3 className="text-lg tracking-tight font-semibold mt-4">Docker Compose (Microservices)</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code># infra/docker-compose.micro.yml
version: "3.9"
services:
  postgres:
    image: postgres:16
    environment:
      POSTGRES_DB: keuai
      POSTGRES_USER: keuai
      POSTGRES_PASSWORD: keuai
    ports: ["5432:5432"]
    volumes: ["pgdata:/var/lib/postgresql/data"]
  redis:
    image: redis:7
    ports: ["6379:6379"]
  rabbitmq:
    image: rabbitmq:3-management
    ports: ["5672:5672", "15672:15672"]
  minio:
    image: minio/minio:latest
    command: server /data --console-address ":9001"
    environment:
      MINIO_ROOT_USER: keuai
      MINIO_ROOT_PASSWORD: keuai123456
    ports: ["9000:9000","9001:9001"]
    volumes: ["minio:/data"]
  chat-gateway:
    build: ../services/chat-gateway
    environment:
      RABBITMQ_URL: amqp://rabbitmq:5672
      S3_ENDPOINT: http://minio:9000
      S3_KEY: keuai
      S3_SECRET: keuai123456
      S3_BUCKET: keuai
      WA_SESSION_DIR: /sessions
    volumes: ["wa-sessions:/sessions"]
    depends_on: [rabbitmq, minio]
    ports: ["8081:8081"]
  ai-processor:
    build: ../services/ai-processor
    environment:
      OPENAI_API_KEY: ${OPENAI_API_KEY:-}
      OCR_ENGINE: paddle
      WHISPER_MODE: local
      RABBITMQ_URL: amqp://rabbitmq:5672
      S3_ENDPOINT: http://minio:9000
      S3_KEY: keuai
      S3_SECRET: keuai123456
      S3_BUCKET: keuai
    depends_on: [rabbitmq, minio]
    ports: ["8082:8080"]
  core-api:
    build: ../services/core-api
    environment:
      APP_ENV: local
      APP_KEY: base64:xxxxxxxxxxxxxxxx
      DB_HOST: postgres
      DB_PORT: 5432
      DB_DATABASE: keuai
      DB_USERNAME: keuai
      DB_PASSWORD: keuai
      REDIS_HOST: redis
      QUEUE_CONNECTION: redis
      FILESYSTEM_DISK: s3
      S3_ENDPOINT: http://minio:9000
      S3_BUCKET: keuai
      S3_KEY: keuai
      S3_SECRET: keuai123456
      S3_REGION: us-east-1
    depends_on: [postgres, redis, minio]
    ports: ["8080:8000"]
  dashboard:
    build: ../services/dashboard
    environment:
      CORE_API_URL: http://core-api:8000
    depends_on: [core-api]
    ports: ["3000:3000"]
volumes:
  pgdata: {}
  minio: {}
  wa-sessions: {}
</code></pre>
<h3 className="text-lg tracking-tight font-semibold mt-4">Docker Compose (Monolith)</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code># infra/docker-compose.monolith.yml
version: "3.9"
services:
  app:
    build: ..
    env_file: ../.env
    depends_on: [postgres, redis, minio]
    ports: ["8080:8000"]
  postgres:
    image: postgres:16
    environment:
      POSTGRES_DB: keuai
      POSTGRES_USER: keuai
      POSTGRES_PASSWORD: keuai
    ports: ["5432:5432"]
    volumes: ["pgdata:/var/lib/postgresql/data"]
  redis:
    image: redis:7
    ports: ["6379:6379"]
  minio:
    image: minio/minio:latest
    command: server /data --console-address ":9001"
    environment:
      MINIO_ROOT_USER: keuai
      MINIO_ROOT_PASSWORD: keuai123456
    ports: ["9000:9000","9001:9001"]
    volumes: ["minio:/data"]
  horizon:
    image: ghcr.io/renovatebot/docker-composer:latest
    depends_on: [app, redis]
    command: ["sh","-lc","php artisan horizon"]
volumes:
  pgdata: {}
  minio: {}
</code></pre>
<h3 className="text-lg tracking-tight font-semibold mt-4">Dockerfile (Service Contoh)</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code># services/chat-gateway/Dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY src ./src
EXPOSE 8081
CMD ["node","src/index.js"]

# services/ai-processor/Dockerfile
FROM python:3.11-slim
WORKDIR /app
COPY app/requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt
COPY app ./app
EXPOSE 8080
CMD ["uvicorn","app.main:app","--host","0.0.0.0","--port","8080"]

# services/core-api/Dockerfile (Laravel 12)
FROM composer:2 as vendor
WORKDIR /app
COPY . /app
RUN composer install --no-dev --no-interaction --prefer-dist

FROM php:8.3-fpm-alpine
RUN apk add --no-cache bash git libpq-dev oniguruma-dev zip unzip icu-dev libzip-dev \
 &amp;&amp; docker-php-ext-install pdo pdo_pgsql intl zip
WORKDIR /var/www/html
COPY --from=vendor /app /var/www/html
EXPOSE 8000
CMD ["php","artisan","serve","--host=0.0.0.0","--port=8000"]

# services/dashboard/Dockerfile (Next.js 15)
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev
COPY . .
EXPOSE 3000
CMD ["npm","run","start"]
</code></pre>
<h3 className="text-lg tracking-tight font-semibold mt-4">Makefile &amp; Skrip</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code># Makefile (root)
SHELL := /bin/bash
DC_MICRO := docker compose -f infra/docker-compose.micro.yml
DC_MONO  := docker compose -f infra/docker-compose.monolith.yml

bootstrap:
\tcp .env.example .env || true

up-micro:
\t$(DC_MICRO) up -d --build

up-mono:
\t$(DC_MONO) up -d --build

down:
\tdocker compose down -v || true

migrate:
\tdocker compose -f infra/docker-compose.micro.yml exec core-api php artisan migrate --force || true

seed:
\tdocker compose -f infra/docker-compose.micro.yml exec core-api php artisan db:seed --force || true

test:
\tdocker compose -f infra/docker-compose.micro.yml exec core-api php artisan test -q || true
\tdocker compose -f infra/docker-compose.micro.yml exec chat-gateway npm test || true
\tdocker compose -f infra/docker-compose.micro.yml exec ai-processor pytest -q || true

lint:
\tdocker compose -f infra/docker-compose.micro.yml exec core-api ./vendor/bin/pint
\tdocker compose -f infra/docker-compose.micro.yml exec chat-gateway npm run lint
\tdocker compose -f infra/docker-compose.micro.yml exec dashboard npm run lint

fmt:
\tdocker compose -f infra/docker-compose.micro.yml exec core-api ./vendor/bin/pint -v

backup:
\tbash scripts/backup.sh

# scripts/dev.sh
#!/usr/bin/env bash
set -euo pipefail
make up-micro &amp;&amp; sleep 3 &amp;&amp; make migrate seed

# scripts/migrate.sh
#!/usr/bin/env bash
docker compose -f infra/docker-compose.micro.yml exec core-api php artisan migrate --force

# scripts/backup.sh
#!/usr/bin/env bash
DATE=$(date +%F)
mkdir -p backups
docker exec $$(docker ps -qf "name=postgres") pg_dump -U keuai -d keuai | gzip &gt; backups/db-$DATE.sql.gz
</code></pre>
<div className="mt-3 text-sm text-zinc-300">
            Ringkasan &amp; Run:
            <ul className="list-disc pl-5">
<li>Gunakan up-micro untuk mode microservices, up-mono untuk monolith.</li>
<li>Pastikan kredensial S3 MinIO dan DB sesuai .env.</li>
</ul>
</div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="3">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">3) ENV &amp; Konfigurasi</h2>
<p className="text-sm text-zinc-400 mt-2">Contoh .env lengkap + best practice secret management.</p>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code># .env.example
APP_NAME=KeuAI
APP_ENV=production
APP_KEY=
APP_URL=https://app.domain.tld
APP_TIMEZONE=Asia/Makassar
APP_LOCALE=id

DB_CONNECTION=pgsql
DB_HOST=postgres
DB_PORT=5432
DB_DATABASE=keuai
DB_USERNAME=keuai
DB_PASSWORD=keuai

CACHE_DRIVER=redis
QUEUE_CONNECTION=redis
REDIS_HOST=redis
REDIS_PORT=6379

FILESYSTEM_DISK=s3
S3_ENDPOINT=https://&lt;r2-or-minio-endpoint&gt;
S3_BUCKET=keuai
S3_KEY=
S3_SECRET=
S3_REGION=auto
S3_USE_PATH_STYLE=true

MAIL_MAILER=smtp
MAIL_HOST=smtp.mailgun.org
MAIL_PORT=587
MAIL_USERNAME=
MAIL_PASSWORD=
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=noreply@domain.tld
MAIL_FROM_NAME="KeuAI"

PAYMENT_PROVIDER=xendit # midtrans|stripe
XENDIT_KEY=
MIDTRANS_SERVER_KEY=
STRIPE_KEY=
STRIPE_WEBHOOK_SECRET=

# WhatsApp (WPPConnect / WA WebJS)
WA_MULTI=true
WA_SESSION_DIR=/data/wa-sessions

# Telegram
TELEGRAM_BOT_TOKEN=

# Slack
SLACK_BOT_TOKEN=
SLACK_SIGNING_SECRET=

# AI
OPENAI_API_KEY=
LLM_PROVIDER=openai # deepseek|ollama
WHISPER_MODE=local # local|api
OCR_ENGINE=paddle # paddle|tesseract

# Security
HASH_IDS_SALT=
DATA_ENCRYPTION_KEY=
RATE_LIMIT_GLOBAL=120
SANCTUM_STATEFUL_DOMAINS=localhost
JWT_SECRET=

# Bank Mutation (opsional)
BANK_SCRAPER_PROVIDER=rekon
BANK_API_KEY=

# Observability
OTEL_EXPORTER_OTLP_ENDPOINT=http://otel-collector:4317
LOG_CHANNEL=stack
REQUEST_ID_HEADER=X-Request-Id

# Webhooks
WEBHOOK_SIGNING_SECRET=
          </code></pre>
<div className="mt-3 text-sm text-zinc-300">
            Best Practice Secret:
            <ul className="list-disc pl-5">
<li>Gunakan dotenv-vault/parameter store (SOPS, AWS SSM) untuk prod</li>
<li>Rotasi kunci berkala; jangan commit .env</li>
<li>Gunakan variable mapping per environment (dev/stg/prod)</li>
</ul>
</div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="4">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">4) ERD &amp; Skema Database</h2>
<pre className="mermaid text-[12px] leading-5">
erDiagram
  tenants ||--o{ users : has
  tenants ||--o{ subscriptions : has
  users }o--o{ roles : many_to_many
  roles }o--o{ permissions : many_to_many
  tenants ||--o{ channels : has
  channels ||--o{ messages : has
  messages ||--o{ attachments : has
  tenants ||--o{ categories : has
  tenants ||--o{ transactions : has
  transactions }o--|| categories : in
  tenants ||--o{ balances : has
  tenants ||--o{ cashflows : has
  tenants ||--o{ audit_logs : has
  tenants ||--o{ ocr_jobs : has
  tenants ||--o{ stt_jobs : has
  tenants ||--o{ api_keys : has
  tenants ||--o{ webhooks : has
  tenants ||--o{ rate_limits : has
          </pre>
<h3 className="text-lg tracking-tight font-semibold mt-4">Migrasi (Contoh Penting)</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>// database/migrations/2025_01_01_000000_create_core_tables.php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
  public function up(): void {
    Schema::create('tenants', function (Blueprint $t) {
      $t->uuid('id')-&gt;primary();
      $t-&gt;string('name');
      $t-&gt;string('slug')-&gt;unique();
      $t-&gt;jsonb('settings')-&gt;nullable();
      $t-&gt;timestamps();
      $t-&gt;softDeletes();
    });

    Schema::create('users', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id');
      $t-&gt;string('name');
      $t-&gt;string('email')-&gt;unique();
      $t-&gt;string('phone')-&gt;nullable();
      $t-&gt;string('password')-&gt;nullable();
      $t-&gt;string('magic_token')-&gt;nullable();
      $t-&gt;timestamp('magic_expires_at')-&gt;nullable();
      $t-&gt;rememberToken();
      $t-&gt;timestamps();
      $t-&gt;softDeletes();
      $t-&gt;foreign('tenant_id')-&gt;references('id')-&gt;on('tenants');
    });

    Schema::create('subscriptions', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id');
      $t-&gt;string('plan'); // starter|growth|pro|enterprise
      $t-&gt;timestamp('starts_at');
      $t-&gt;timestamp('ends_at');
      $t-&gt;timestamp('grace_until')-&gt;nullable();
      $t-&gt;string('provider')-&gt;nullable();
      $t-&gt;string('provider_ref')-&gt;nullable();
      $t-&gt;jsonb('meta')-&gt;nullable();
      $t-&gt;timestamps();
      $t-&gt;foreign('tenant_id')-&gt;references('id')-&gt;on('tenants');
    });

    Schema::create('channels', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id');
      $t-&gt;enum('type', ['whatsapp','telegram','slack']);
      $t-&gt;string('account'); // e.g., +628xxx, @botname, team id
      $t-&gt;jsonb('config')-&gt;nullable();
      $t-&gt;timestamps();
      $t-&gt;foreign('tenant_id')-&gt;references('id')-&gt;on('tenants');
    });

    Schema::create('messages', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id');
      $t-&gt;uuid('channel_id');
      $t-&gt;string('message_id')-&gt;index();
      $t-&gt;string('sender_id')-&gt;index();
      $t-&gt;enum('type',['text','image','audio','pdf','docx','xlsx','csv']);
      $t-&gt;text('content'); // plaintext or URL
      $t-&gt;jsonb('meta')-&gt;nullable();
      $t-&gt;timestampTz('sent_at')-&gt;index();
      $t-&gt;timestamps();
      $t-&gt;foreign('tenant_id')-&gt;references('id')-&gt;on('tenants');
      $t-&gt;foreign('channel_id')-&gt;references('id')-&gt;on('channels');
    });

    Schema::create('attachments', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('message_id')-&gt;index();
      $t-&gt;string('path');
      $t-&gt;string('mime');
      $t-&gt;bigInteger('size')-&gt;default(0);
      $t-&gt;jsonb('meta')-&gt;nullable();
      $t-&gt;timestamps();
      $t-&gt;foreign('message_id')-&gt;references('id')-&gt;on('messages');
    });

    Schema::create('categories', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id');
      $t-&gt;string('name');
      $t-&gt;enum('type',['income','expense']);
      $t-&gt;timestamps();
      $t-&gt;foreign('tenant_id')-&gt;references('id')-&gt;on('tenants');
    });

    Schema::create('transactions', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id')-&gt;index();
      $t-&gt;uuid('category_id')-&gt;nullable()-&gt;index();
      $t-&gt;date('date')-&gt;index();
      $t-&gt;enum('type',['income','expense'])-&gt;index();
      $t-&gt;decimal('amount', 18, 2);
      $t-&gt;string('currency',3)-&gt;default('IDR');
      $t-&gt;enum('source',['cash','bank','ewallet'])-&gt;default('cash');
      $t-&gt;string('account_name')-&gt;nullable();
      $t-&gt;string('ref')-&gt;nullable(); // encrypted
      $t-&gt;text('description')-&gt;nullable();
      $t-&gt;jsonb('flags')-&gt;nullable();
      $t-&gt;float('confidence')-&gt;nullable();
      $t-&gt;uuid('message_id')-&gt;nullable();
      $t-&gt;timestamps();
      $t-&gt;softDeletes();
      $t-&gt;foreign('tenant_id')-&gt;references('id')-&gt;on('tenants');
      $t-&gt;foreign('category_id')-&gt;references('id')-&gt;on('categories');
    });

    Schema::create('balances', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id');
      $t-&gt;string('account'); // kas, bank-bca, ewallet-ovo
      $t-&gt;decimal('amount',18,2)-&gt;default(0);
      $t-&gt;date('as_of')-&gt;index();
      $t-&gt;timestamps();
      $t-&gt;foreign('tenant_id')-&gt;references('id')-&gt;on('tenants');
    });

    Schema::create('cashflows', function (Blueprint $t) {
      $t-&gt;bigIncrements('id');
      $t-&gt;uuid('tenant_id')-&gt;index();
      $t-&gt;date('date')-&gt;index();
      $t-&gt;decimal('in',18,2)-&gt;default(0);
      $t-&gt;decimal('out',18,2)-&gt;default(0);
      $t-&gt;decimal('net',18,2)-&gt;default(0);
      $t-&gt;jsonb('by_category')-&gt;nullable();
      $t-&gt;timestamps();
    });

    Schema::create('ocr_jobs', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id');
      $t-&gt;uuid('message_id');
      $t-&gt;string('status')-&gt;default('queued');
      $t-&gt;jsonb('result')-&gt;nullable();
      $t-&gt;timestamps();
    });

    Schema::create('stt_jobs', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id');
      $t-&gt;uuid('message_id');
      $t-&gt;string('status')-&gt;default('queued');
      $t-&gt;jsonb('result')-&gt;nullable();
      $t-&gt;timestamps();
    });

    Schema::create('audit_logs', function (Blueprint $t) {
      $t-&gt;bigIncrements('id');
      $t-&gt;uuid('tenant_id')-&gt;index();
      $t-&gt;uuid('user_id')-&gt;nullable()-&gt;index();
      $t-&gt;string('action');
      $t-&gt;string('entity_type');
      $t-&gt;string('entity_id');
      $t-&gt;jsonb('changes')-&gt;nullable();
      $t-&gt;string('ip')-&gt;nullable();
      $t-&gt;string('user_agent')-&gt;nullable();
      $t-&gt;string('channel')-&gt;nullable();
      $t-&gt;timestampTz('created_at')-&gt;useCurrent();
    });

    Schema::create('webhooks', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id');
      $t-&gt;string('url');
      $t-&gt;string('secret');
      $t-&gt;boolean('enabled')-&gt;default(true);
      $t-&gt;timestamps();
    });

    Schema::create('api_keys', function (Blueprint $t) {
      $t-&gt;uuid('id')-&gt;primary();
      $t-&gt;uuid('tenant_id');
      $t-&gt;string('name');
      $t-&gt;string('key')-&gt;unique();
      $t-&gt;boolean('active')-&gt;default(true);
      $t-&gt;timestamps();
    });

    Schema::create('rate_limits', function (Blueprint $t) {
      $t-&gt;bigIncrements('id');
      $t-&gt;uuid('tenant_id')-&gt;index();
      $t-&gt;string('scope'); // global|webhook|export|ai
      $t-&gt;integer('limit');
      $t-&gt;integer('window_seconds');
      $t-&gt;timestamps();
    });
  }

  public function down(): void {
    Schema::dropIfExists('rate_limits');
    Schema::dropIfExists('api_keys');
    Schema::dropIfExists('webhooks');
    Schema::dropIfExists('audit_logs');
    Schema::dropIfExists('stt_jobs');
    Schema::dropIfExists('ocr_jobs');
    Schema::dropIfExists('cashflows');
    Schema::dropIfExists('balances');
    Schema::dropIfExists('transactions');
    Schema::dropIfExists('categories');
    Schema::dropIfExists('attachments');
    Schema::dropIfExists('messages');
    Schema::dropIfExists('channels');
    Schema::dropIfExists('subscriptions');
    Schema::dropIfExists('users');
    Schema::dropIfExists('tenants');
  }
};
</code></pre>
<h3 className="text-lg tracking-tight font-semibold mt-4">Seeder (Kategori + Role)</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>// database/seeders/InitSeeder.php
<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use App\Models\{Tenant,Category,User};

class InitSeeder extends Seeder {
  public function run(): void {
    $tenant = Tenant::firstOrCreate(['id'=>Str::uuid()], ['name'=&gt;'Demo Tenant','slug'=&gt;'demo']);

    $roles = ['Owner','Admin','Finance','Staff','Auditor'];
    foreach ($roles as $r) Role::firstOrCreate(['name'=&gt;$r,'guard_name'=&gt;'web']);

    $perms = ['transactions.view','transactions.create','transactions.update','transactions.delete','export','settings','audit.view'];
    foreach ($perms as $p) Permission::firstOrCreate(['name'=&gt;$p,'guard_name'=&gt;'web']);

    Role::findByName('Owner')-&gt;givePermissionTo($perms);
    Role::findByName('Admin')-&gt;givePermissionTo($perms);
    Role::findByName('Finance')-&gt;givePermissionTo(['transactions.*','export']);
    Role::findByName('Staff')-&gt;givePermissionTo(['transactions.create','transactions.view']);
    Role::findByName('Auditor')-&gt;givePermissionTo(['audit.view','transactions.view']);

    $user = User::firstOrCreate(['email'=&gt;'owner@demo.tld'], [
      'id'=&gt;Str::uuid(),'tenant_id'=&gt;$tenant-&gt;id,'name'=&gt;'Owner Demo','password'=&gt;bcrypt('password')
    ]);
    $user-&gt;assignRole('Owner');

    $income = ['Penjualan','Komisi &amp; Bagi Hasil','Pendanaan','Pengembalian Piutang','Bunga/Deposito','Lain-lain'];
    $expense = ['Bahan Baku','Operasional','Gaji &amp; Upah','Marketing','Sewa','Utilitas','Transportasi','Pajak','Peralatan','Perawatan','Admin Bank','Langganan SaaS','Lain-lain'];

    foreach ($income as $n) Category::firstOrCreate(['tenant_id'=&gt;$tenant-&gt;id,'name'=&gt;$n,'type'=&gt;'income','id'=&gt;Str::uuid()]);
    foreach ($expense as $n) Category::firstOrCreate(['tenant_id'=&gt;$tenant-&gt;id,'name'=&gt;$n,'type'=&gt;'expense','id'=&gt;Str::uuid()]);
  }
}
</code></pre>
<div className="mt-3 text-sm text-zinc-300">Ringkasan: ERD memenuhi multi-tenant, RBAC, audit, dan job OCR/STT. Jalankan: php artisan migrate --seed.</div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="5">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">5) RBAC, Auth, &amp; Audit</h2>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>// AuthController.php (passwordless + login)
public function magicLink(Request $r) {
  $user = User::where('email',$r-&gt;email)-&gt;firstOrFail();
  $user-&gt;magic_token = Str::random(32);
  $user-&gt;magic_expires_at = now()-&gt;addMinutes(15);
  $user-&gt;save();
  // kirim via email/WA/Telegram
  Mail::to($user-&gt;email)-&gt;queue(new MagicLinkMail($user-&gt;magic_token));
  return response()-&gt;json(['status'=&gt;'sent']);
}
public function login(Request $r) {
  if (Auth::attempt($r-&gt;only('email','password'))) {
    $token = $r-&gt;user()-&gt;createToken('api')-&gt;plainTextToken;
    return response()-&gt;json(['token'=&gt;$token]);
  }
  abort(401,'Invalid credentials');
}
public function consumeMagic(Request $r) {
  $user = User::where('magic_token',$r-&gt;token)-&gt;where('magic_expires_at','&gt;',now())-&gt;firstOrFail();
  $user-&gt;magic_token = null; $user-&gt;magic_expires_at = null; $user-&gt;save();
  $token = $user-&gt;createToken('api')-&gt;plainTextToken;
  return response()-&gt;json(['token'=&gt;$token]);
}

// Model contoh: enkripsi at rest
protected $casts = [
  'ref' =&gt; \App\Casts\Encrypted::class, // libsodium via custom cast
];

// Audit (laravel-auditing)
protected $auditInclude = ['amount','category_id','date','description'];
</code></pre>
<div className="mt-3 text-sm text-zinc-300">Role via spatie/laravel-permission: Owner, Admin, Finance, Staff, Auditor. Audit menyimpan IP, user-agent, channel.</div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="6">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">6) Integrasi Chat</h2>
<h3 className="text-lg tracking-tight font-semibold mt-2">Standar Payload</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>{
  "tenant_id": "uuid",
  "channel": "whatsapp|telegram|slack",
  "channel_account": "+628xxxx",
  "sender_id": "chat-user-id",
  "message_id": "ext-msg-id",
  "type": "text|image|audio|pdf|docx|xlsx|csv",
  "content": "(plaintext or url)",
  "timestamp": 1730700000
}</code></pre>
<h3 className="text-lg tracking-tight font-semibold mt-4">chat-gateway (Node.js) — Minimal</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>// services/chat-gateway/src/index.js
const express = require('express');
const bodyParser = require('body-parser');
const amqp = require('amqplib');
const { v4: uuid } = require('uuid');

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));
let amqpConn;

(async () =&gt; {
  amqpConn = await amqp.connect(process.env.RABBITMQ_URL || 'amqp://localhost:5672');
})().catch(console.error);

async function publish(queue, msg) {
  const ch = await amqpConn.createChannel();
  await ch.assertQueue(queue, { durable: true });
  ch.sendToQueue(queue, Buffer.from(JSON.stringify(msg)), { persistent: true });
}

app.post('/webhook/:provider', async (req, res) =&gt; {
  const provider = req.params.provider; // whatsapp|telegram|slack
  const event = req.body; // normalize downstream in ai/core
  const payload = {
    id: uuid(),
    provider,
    ...event
  };
  await publish('chat.ingest', payload);
  res.json({ ok: true });
});

// health
app.get('/healthz', (_, res) =&gt; res.json({ ok: true }));

app.listen(8081, () =&gt; console.log('chat-gateway up on :8081'));
</code></pre>
<div className="mt-3 text-sm text-zinc-300">WA multi-number: simpan sesi di S3/MinIO (upload/download session JSON). Telegram commands: /start, /help, /catat, /saldo, /mutasi, /ringkasan, /export, /langganan. Slack: slash commands catat, saldo, ringkasan.</div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="7">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">7) AI Pipeline</h2>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code># services/ai-processor/app/requirements.txt
fastapi==0.115.0
uvicorn==0.30.6
pydantic==2.9.2
python-multipart==0.0.9
openai==1.51.2

# services/ai-processor/app/main.py
from fastapi import FastAPI, UploadFile, File, Form
from pydantic import BaseModel
from datetime import datetime
import os, asyncio

app = FastAPI(title="KeuAI AI Processor")

class ExtractRequest(BaseModel):
  text: str

@app.post("/stt")
async def stt(file: UploadFile = File(...)):
  # TODO: integrate whisper local/api based on env
  text = "Contoh transkripsi voice note."
  return {"text": text, "confidence": 0.92}

@app.post("/ocr")
async def ocr(file: UploadFile = File(...)):
  # TODO: integrate Paddle/Tesseract then LLM post-processing
  text = "Struk kopi 120000 pada 2025-10-02 kategori Operasional."
  return {"text": text, "confidence": 0.88}

@app.post("/extract")
async def extract(req: ExtractRequest):
  # Simple regex/LLM-like mock
  data = {
    "date": datetime.utcnow().date().isoformat(),
    "type": "expense",
    "category": "Operasional",
    "amount": 120000.0,
    "currency": "IDR",
    "source": "cash",
    "description": req.text[:140],
    "ref": None,
    "flags": [],
    "confidence": 0.85
  }
  return {"final": data}
</code></pre>
<div className="mt-3 text-sm text-zinc-300">
            Validasi: nominal &gt; 0; kategori map ke 19 kategori; jika ambigu → flags + human review queue. Realtime via queue/worker.
          </div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="8">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">8) Fitur Fungsional</h2>
<ul className="text-sm text-zinc-300 list-disc pl-5">
<li>Pencatatan natural language via chat → transaksi</li>
<li>Input: teks, struk (gambar), voice note, PDF/DOCX/XLSX/CSV</li>
<li>Cek mutasi bank via WA (adapter Xendit/flip/rekon)</li>
<li>Ringkasan periode, saldo per akun, batch import, ekspor CSV/XLSX</li>
<li>Langganan 1/3/6/12 bulan dengan gating fitur</li>
</ul>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="9">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">9) Subscription &amp; Payment</h2>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>// routes/api.php
Route::post('/billing/xendit/webhook', [BillingController::class,'xenditWebhook']);

// app/Http/Controllers/BillingController.php
public function xenditWebhook(Request $r) {
  // verify signature
  $invoice = $r-&gt;input('data');
  // update subscriptions
  // set plan, starts_at, ends_at, grace
  return response()-&gt;json(['ok'=&gt;true]);
}
</code></pre>
<div className="mt-3 text-sm text-zinc-300">Paket: Starter(1 WA), Growth(5), Pro(15), Enterprise(custom). Terapkan middleware gating berdasar tenant-&gt;subscription-&gt;plan.</div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="10">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">10) OpenAPI 3.1</h2>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code># openapi.yaml (ringkas, inti)
openapi: 3.1.0
info:
  title: KeuAI Core API
  version: 1.0.0
servers:
  - url: https://api.domain.tld
paths:
  /auth/login:
    post:
      requestBody:
        required: true
        content:
          application/json:
            schema: { type: object, properties: { email: {type: string}, password: {type: string} }, required: [email,password] }
      responses:
        "200": { description: OK, content: { application/json: { schema: { type: object, properties: { token: {type: string} } } } } }
  /auth/magic-link:
    post:
      requestBody: { required: true, content: { application/json: { schema: { type: object, properties: { email: {type: string} }, required: [email] } } } }
      responses: { "200": { description: Sent } }
  /auth/magic-consume:
    post:
      requestBody: { required: true, content: { application/json: { schema: { type: object, properties: { token: {type: string} }, required: [token] } } } }
      responses: { "200": { description: OK } }
  /api/chat/ingest:
    post:
      summary: Ingest chat payload
      requestBody:
        required: true
        content:
          application/json:
            schema: { $ref: "#/components/schemas/ChatIngest" }
      responses:
        "202": { description: Accepted }
  /api/chat/webhook/{provider}:
    post:
      parameters:
        - in: path
          name: provider
          required: true
          schema: { type: string, enum: [whatsapp,telegram,slack] }
      responses: { "200": { description: OK } }
  /jobs/ocr:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema: { type: object, properties: { file: { type: string, format: binary } }, required: [file] }
      responses: { "200": { description: OK } }
  /jobs/ocr/{id}:
    get: { responses: { "200": { description: Status/Result } } }
  /jobs/stt:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema: { type: object, properties: { file: { type: string, format: binary } }, required: [file] }
      responses: { "200": { description: OK } }
  /transactions:
    get: { responses: { "200": { description: List } } }
    post:
      requestBody: { content: { application/json: { schema: { $ref: "#/components/schemas/Transaction" } } } }
      responses: { "201": { description: Created } }
  /transactions/{id}:
    get: { responses: { "200": { description: Detail } } }
    put:
      requestBody: { content: { application/json: { schema: { $ref: "#/components/schemas/Transaction" } } } }
      responses: { "200": { description: Updated } }
    delete: { responses: { "204": { description: Deleted } } }
  /transactions/import:
    post:
      requestBody:
        content:
          multipart/form-data:
            schema: { type: object, properties: { file: { type: string, format: binary } }, required: [file] }
      responses: { "202": { description: Accepted } }
  /transactions/export:
    get:
      parameters:
        - in: query
          name: format
          schema: { type: string, enum: [csv,xlsx] }
      responses: { "200": { description: Download } }
  /cashflow/summary:
    get:
      parameters:
        - in: query
          name: start
          schema: { type: string, format: date }
        - in: query
          name: end
          schema: { type: string, format: date }
      responses: { "200": { description: Summary } }
  /subscriptions/plans:
    get: { responses: { "200": { description: Plans } } }
  /subscriptions/subscribe:
    post:
      requestBody: { content: { application/json: { schema: { type: object, properties: { plan: {type: string} }, required: [plan] } } } }
      responses: { "200": { description: Link/Invoice } }
  /admin/tenants:
    get: { responses: { "200": { description: List tenants } } }
components:
  schemas:
    ChatIngest:
      type: object
      properties:
        tenant_id: { type: string, format: uuid }
        channel: { type: string, enum: [whatsapp,telegram,slack] }
        channel_account: { type: string }
        sender_id: { type: string }
        message_id: { type: string }
        type: { type: string, enum: [text,image,audio,pdf,docx,xlsx,csv] }
        content: { type: string }
        timestamp: { type: integer }
      required: [tenant_id,channel,sender_id,message_id,type,content,timestamp]
    Transaction:
      type: object
      properties:
        date: { type: string, format: date }
        type: { type: string, enum: [income,expense] }
        category_id: { type: string, format: uuid }
        amount: { type: number }
        currency: { type: string, default: IDR }
        source: { type: string, enum: [cash,bank,ewallet] }
        description: { type: string }
        ref: { type: string }
</code></pre>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="11">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">11) Dashboard UI (Inertia + Vue3)</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-3">
<div className="p-4 rounded-lg border border-white/10 bg-black/30">
<div className="text-xs text-zinc-400">Net Cashflow</div>
<div className="text-2xl tracking-tight font-semibold text-white mt-1">Rp 42.500.000</div>
<div className="text-[11px] text-emerald-400 mt-1">+12% vs bulan lalu</div>
</div>
<div className="p-4 rounded-lg border border-white/10 bg-black/30">
<div className="text-xs text-zinc-400">Cash In</div>
<div className="text-2xl tracking-tight font-semibold text-white mt-1">Rp 120.000.000</div>
</div>
<div className="p-4 rounded-lg border border-white/10 bg-black/30">
<div className="text-xs text-zinc-400">Cash Out</div>
<div className="text-2xl tracking-tight font-semibold text-white mt-1">Rp 77.500.000</div>
</div>
</div>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto mt-4"><code>// resources/js/Pages/Dashboard.vue (cuplikan)
&lt;template&gt;
  &lt;div className="space-y-6"&gt;
    &lt;ChartCashflow :series="series" /&gt;
    &lt;TableCategory :rows="categorySummary" /&gt;
  &lt;/div&gt;
&lt;/template&gt;
&lt;script setup&gt;
import ChartCashflow from '@/Components/ChartCashflow.vue'
import TableCategory from '@/Components/TableCategory.vue'
const props = defineProps({ series: Array, categorySummary: Array })
&lt;/script&gt;
</code></pre>
<h3 className="text-lg tracking-tight font-semibold mt-4">Design Tokens</h3>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>// tokens (mengacu util classes)
colors: { bg: #0B0B0F, surface: #0f1115, border: rgba(255,255,255,0.1), text: #e5e7eb, subtle: #9ca3af, accent: #22c55e }
radii: { sm: 8px, md: 12px }
shadows: { sm: 0 1px 0 rgba(255,255,255,0.05) }
</code></pre>
<div className="mt-3 text-sm text-zinc-300">Komponen: Chart cash-in/out &amp; net, tabel ringkasan kategori, drawer detail transaksi, wizard onboarding, uploader drag&amp;drop.</div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="12">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">12) Keamanan &amp; Kepatuhan</h2>
<ul className="text-sm text-zinc-300 list-disc pl-5">
<li>Enkripsi kolom sensitif (libsodium) via custom cast</li>
<li>TLS end-to-end; Signed URL file; IP allow/deny untuk webhook</li>
<li>Rate-limit global &amp; per-tenant (Redis)</li>
<li>Isolasi data per-tenant, soft delete + audit</li>
<li>Backup harian ke R2/S3 (7/30/90 hari)</li>
<li>Logging terstruktur (request_id, tenant_id, channel, latency_ms, queue_time_ms)</li>
</ul>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="13">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">13) Non-Functional</h2>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>// k6 test example: tests/perf/cashflow.js
import http from 'k6/http';
import { check, sleep } from 'k6';
export const options = { vus: 20, duration: '1m', thresholds: { http_req_duration: ['p(99)&lt;500'] } };
export default function () {
  const res = http.get('http://localhost:8080/api/cashflow/summary?start=2025-10-01&amp;end=2025-10-31', { headers: { Authorization: 'Bearer TOKEN' }});
  check(res, { 'status 200': r =&gt; r.status === 200 });
  sleep(0.5);
}
</code></pre>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="14">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">14) Testing &amp; QA</h2>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>// core-api tests/Feature/TransactionFlowTest.php
public function test_ingest_extract_persist() {
  $payload = [
    "tenant_id" =&gt; Str::uuid(),
    "channel" =&gt; "whatsapp",
    "channel_account" =&gt; "+6281",
    "sender_id" =&gt; "user1",
    "message_id" =&gt; "m1",
    "type" =&gt; "text",
    "content" =&gt; "catat 120000 operasional kopi",
    "timestamp" =&gt; time()
  ];
  $this-&gt;postJson('/api/chat/ingest', $payload)-&gt;assertAccepted();
  // simulate worker processed → create transaction ...
  $this-&gt;assertDatabaseHas('transactions', ['amount'=&gt;120000.00, 'type'=&gt;'expense']);
}

// ai-processor tests/test_extract.py
def test_extract(client):
  resp = client.post("/extract", json={"text":"catat 250000 penjualan kopi kemasan"})
  assert resp.status_code == 200
  assert resp.json()["final"]["amount"] &gt; 0

// chat-gateway __tests__/ingest.test.js
it('accepts webhook and publish', async () =&gt; {
  const res = await request(app).post('/webhook/whatsapp').send({ message_id:"1", type:"text", content:"hi" });
  expect(res.status).toBe(200);
});
</code></pre>
<div className="mt-3 text-sm text-zinc-300">E2E (Playwright/Cypress) skenario: Ingest chat → AI extract → transaksi tercatat; Upload struk → OCR → simpan; Voice note → STT; Saldo &amp; Ringkasan via WA; Subscription → webhook → akses berubah.</div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="15">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">15) Observability</h2>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>// contoh log JSON terstruktur
{"ts":"2025-10-02T10:10:10Z","level":"info","msg":"chat ingested","request_id":"req_abc","tenant_id":"t1","channel":"whatsapp","latency_ms":42}
{"ts":"2025-10-02T10:10:11Z","level":"info","msg":"ai extract done","request_id":"req_abc","queue_time_ms":120}
</code></pre>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="16">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">16) Deployment</h2>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code># infra/nginx/default.conf (contoh)
server {
  listen 80;
  server_name _;
  location /api/ { proxy_pass http://core-api:8000/; }
  location /gateway/ { proxy_pass http://chat-gateway:8081/; }
  location / { proxy_pass http://dashboard:3000/; }
}

# .github/workflows/ci.yml (ringkas)
name: ci
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - uses: shivammathur/setup-php@v2
        with: { php-version: '8.3' }
      - run: make lint
      - run: make test
      - run: docker build -t ghcr.io/org/keuai-core:$(git rev-parse --short HEAD) services/core-api

# supervisor/pm2 (workers)
# infra/supervisor/workers.conf
[program:queue]
command=php artisan queue:work --sleep=1 --tries=3
autostart=true
autorestart=true
stderr_logfile=/var/log/queue.err.log
stdout_logfile=/var/log/queue.out.log
</code></pre>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="17">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">17) Dokumentasi Pengguna &amp; Dev</h2>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code># README.md (ringkas)
## Jalankan Lokal
- cp .env.example .env
- make up-micro
- make migrate seed
- Buka API: http://localhost:8080, Gateway: :8081, Dashboard: :3000

## Perintah
- make test | lint | fmt | backup

# CONTRIBUTING.md
- Branching: main, feat/*, fix/*
- Commit: conventional commits (feat:, fix:, chore:)
- PR Checklist: lint ok, test ok, docs updated

# SECURITY.md
- Laporkan ke security@domain.tld
- SLA triage 48 jam, patch 7 hari

# API.md
- Lihat openapi.yaml
- Contoh cURL:
  curl -H "Authorization: Bearer &lt;token&gt;" http://localhost:8080/transactions
</code></pre>

<div className="mt-4 rounded-lg border border-white/10 bg-black/30 p-4">
<div className="flex items-center gap-2">
<svg className="h-4 w-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 13a8 8 0 0 1 16 0v6a2 2 0 0 1-2 2h-4l-2 2-2-2H6a2 2 0 0 1-2-2v-6Z"></path><path d="M9 10h.01"></path><path d="M15 10h.01"></path><path d="M12 10h.01"></path>
</svg>
<div className="text-sm font-semibold text-white tracking-tight">Jalankan di Cursor (AI IDE)</div>
</div>
<ol className="mt-3 text-sm text-zinc-300 list-decimal pl-5 space-y-1">
<li>Buka Cursor → File → Open Folder → pilih folder repo ini.</li>
<li>Buka Terminal (View → Terminal), pastikan Docker aktif.</li>
<li>Copy env: <span className="text-zinc-200 bg-white/5 px-1.5 py-0.5 rounded border border-white/10">cp .env.example .env</span> lalu isi nilai yang diperlukan.</li>
<li>Pilih mode:
                <ul className="list-disc pl-5 mt-1 space-y-1">
<li>Microservices (disarankan): jalankan
                    <pre className="text-[11px] bg-black/40 rounded p-3 border border-white/10 overflow-auto mt-1"><code>make up-micro
make migrate
make seed</code></pre>
                    Akses: API http://localhost:8080 • Gateway http://localhost:8081 • Dashboard http://localhost:3000
                  </li>
<li>Monolith:
                    <pre className="text-[11px] bg-black/40 rounded p-3 border border-white/10 overflow-auto mt-1"><code>docker compose -f infra/docker-compose.monolith.yml up -d --build
docker compose -f infra/docker-compose.monolith.yml exec app php artisan migrate --force
docker compose -f infra/docker-compose.monolith.yml exec app php artisan db:seed --force</code></pre>
                    Akses: App http://localhost:8080
                  </li>
</ul>
</li>
<li>Gunakan Panel Problems/Terminal di Cursor untuk melihat log build/containers.</li>
<li>Optional: minta bantuan AI di Cursor dengan konteks file Makefile dan docker-compose untuk menjalankan perintah yang sama dari Command Palette.</li>
</ol>
<div className="mt-3 text-[12px] text-zinc-400 border-t border-white/10 pt-3">
              Tips: jika port bentrok, ubah mapping port di file docker-compose terkait. Jika skrip gagal karena izin, jalankan <span className="text-zinc-200 bg-white/5 px-1 py-0.5 rounded border border-white/10">chmod +x scripts/*.sh</span>.
            </div>
</div>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="18">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">18) Konten Default &amp; Copy</h2>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code># Bot Templates (ID)
/start → "Halo, saya asisten pencatatan KeuAI. Ketik 'catat &lt;jumlah&gt; &lt;kategori&gt; &lt;deskripsi&gt;'"
/help → "Perintah: catat, saldo, ringkasan, export, langganan"
/catat → "OK, transaksi disimpan: {amount} {category} - {description}"
/saldo → "Saldo per akun:\n- Kas: Rp x\n- Bank-BCA: Rp y"
/ringkasan → "Ringkasan {start}-{end} terkirim. Cek detail di dashboard."
/export → "File export {format} siap. Link: {url}"
Pengingat langganan → "Langganan akan berakhir {date}. Ketik 'langganan' untuk perpanjang."
</code></pre>
</article>

<article className="p-5 rounded-xl border border-white/10 bg-white/5" id="19-24">
<h2 className="text-xl sm:text-2xl tracking-tight font-semibold text-white">19-24) Deliverables, Acceptance, Bonus, Gaya Output</h2>
<ul className="text-sm text-zinc-300 list-disc pl-5">
<li>Kode sumber (micro + mono), diagram arsitektur + ERD + OpenAPI, migrasi/seed, test minimal, panduan run/deploy, contoh log</li>
<li>Acceptance: WA ≥5 nomor; proses teks/gambar/audio/file → transaksi; Perintah WA: saldo, ringkasan 1-30/09/2025, export csv, catat 120.000 operasional kopi → berhasil</li>
<li>Keamanan: kolom terenkripsi, rate-limit aktif, audit-log berjalan</li>
<li>Bonus: integrasi e-wallet, webhook akuntansi, deteksi duplikasi/anomali, rekonsiliasi semi-otomatis</li>
</ul>
<div className="mt-4 rounded-lg border border-white/10 bg-black/30 p-4">
<div className="text-sm font-semibold text-white tracking-tight mb-2">Contoh Perintah Bot (ID) – Siap Pakai</div>
<pre className="text-[12px] bg-black/40 rounded p-4 border border-white/10 overflow-auto"><code>catat 250000 penjualan kopi kemasan #kas
catat 120000 operasional pengiriman #bank-bca
saldo
saldo bank-bca
ringkasan 01/10/2025-31/10/2025
export csv 09/2025
langganan
</code></pre>
</div>
<div className="mt-4 text-sm text-zinc-300">
            Assumption &amp; Rationale:
            <ul className="list-disc pl-5">
<li>Gunakan MinIO lokal sebagai S3-compatible untuk sesi WA &amp; berkas</li>
<li>AI Processor mock agar dev bisa jalan tanpa kredensial LLM</li>
<li>Dashboard Next.js untuk microservices; Inertia+Vue untuk monolith</li>
</ul>
</div>
<div className="mt-4 text-sm text-zinc-300">
            Jalankan cepat:
            <pre className="text-[12px] bg-black/40 rounded p-3 border border-white/10 overflow-auto"><code>make up-micro
make migrate seed
# uji endpoint
curl http://localhost:8081/healthz
curl http://localhost:8080/api/transactions -H "Authorization: Bearer &lt;token&gt;"</code></pre>
</div>
</article>

<div className="text-xs text-zinc-500 text-center pt-6 border-t border-white/10">
          © 2025 KeuAI — Spec &amp; Starter Kit
        </div>
</section>
</main>

    </>
  );
}
