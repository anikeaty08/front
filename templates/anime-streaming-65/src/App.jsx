import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<?php
  session_start();

  // =========================
  // CONFIG (EDIT THIS)
  // =========================
  // IMPORTANT:
  // - Keep Client ID in code (public)
  // - Keep Client Secret ONLY in server environment (not in this file)
  //
  // cPanel examples:
  // - Setup "Environment Variables" (if available) or add to .htaccess:
  //   SetEnv MAL_CLIENT_SECRET "your_secret_here"
  //
  // You can also set it in server config / php-fpm pool.
  $MAL_CLIENT_ID = '104a110153499ca7047f033a16cbc7d6';
  $MAL_CLIENT_SECRET = getenv('MAL_CLIENT_SECRET') ?: ''; // <-- not stored in file

  // Auto-detect redirect URI based on current URL (works on cPanel).
  $scheme = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? 'https' : 'http';
  $host = $_SERVER['HTTP_HOST'] ?? 'localhost';
  $path = strtok($_SERVER['REQUEST_URI'], '?');
  $REDIRECT_URI = $scheme . '://' . $host . $path;

  // Optional: embed providers (replace with your own sources).
  $EMBED_PROVIDERS = [
    [
      'name' => 'Provider A',
      'note' =&gt; 'Search embed by title',
      'url'  =&gt; 'https://example.com/embed/search?q={query}',
    ],
    [
      'name' =&gt; 'Provider B',
      'note' =&gt; 'Search embed by title',
      'url'  =&gt; 'https://example.org/player?search={query}',
    ],
  ];

  // =========================
  // HELPERS
  // =========================
  function base64url_encode($data) {
    return rtrim(strtr(base64_encode($data), '+/', '-_'), '=');
  }
  function random_verifier($len = 64) {
    $bytes = random_bytes($len);
    return base64url_encode($bytes);
  }
  function pkce_challenge($verifier) {
    return base64url_encode(hash('sha256', $verifier, true));
  }
  function http_json($url, $headers = [], $method = 'GET', $body = null) {
    $opts = [
      'http' =&gt; [
        'method' =&gt; $method,
        'header' =&gt; implode("\r\n", $headers),
        'ignore_errors' =&gt; true,
      ],
    ];
    if ($body !== null) {
      $opts['http']['content'] = $body;
    }
    $context = stream_context_create($opts);
    $res = @file_get_contents($url, false, $context);
    $status = 0;
    if (isset($http_response_header) &amp;&amp; is_array($http_response_header)) {
      foreach ($http_response_header as $h) {
        if (preg_match('#^HTTP/\S+\s+(\d{3})#', $h, $m)) { $status = intval($m[1]); break; }
      }
    }
    $json = json_decode($res ?? '', true);
    return [$status, $json, $res];
  }
  function esc($s) {
    return htmlspecialchars((string)$s, ENT_QUOTES, 'UTF-8');
  }

  // =========================
  // ROUTING
  // =========================
  $view = $_GET['view'] ?? 'home';
  $q = trim($_GET['q'] ?? '');
  $type = $_GET['type'] ?? 'all';
  $season = $_GET['season'] ?? '';
  $year = $_GET['year'] ?? '';
  $id = $_GET['id'] ?? '';
  $embed = $_GET['embed'] ?? '';

  $error = '';
  $notice = '';

  // =========================
  // AUTH: Login / Logout / Callback
  // =========================
  if (isset($_GET['logout'])) {
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
      $params = session_get_cookie_params();
      setcookie(session_name(), '', time() - 42000, $params["path"], $params["domain"], $params["secure"], $params["httponly"]);
    }
    session_destroy();
    header("Location: " . $REDIRECT_URI);
    exit;
  }

  // Require secret only for OAuth token exchange (login/callback).
  if (isset($_GET['login'])) {
    if (!$MAL_CLIENT_SECRET) {
      $error = 'MAL_CLIENT_SECRET belum diset di server environment. Set dulu sebelum login.';
    } else {
      $state = base64url_encode(random_bytes(24));
      $verifier = random_verifier(48);
      $challenge = pkce_challenge($verifier);
      $_SESSION['oauth_state'] = $state;
      $_SESSION['pkce_verifier'] = $verifier;

      $authUrl = "https://myanimelist.net/v1/oauth2/authorize?"
        . http_build_query([
          'response_type' =&gt; 'code',
          'client_id' =&gt; $MAL_CLIENT_ID,
          'redirect_uri' =&gt; $REDIRECT_URI,
          'code_challenge' =&gt; $challenge,
          'code_challenge_method' =&gt; 'S256',
          'state' =&gt; $state,
        ]);

      header("Location: " . $authUrl);
      exit;
    }
  }

  if (isset($_GET['code'])) {
    if (!$MAL_CLIENT_SECRET) {
      $error = 'MAL_CLIENT_SECRET belum diset di server environment. Tidak bisa menukar code menjadi token.';
    } else {
      $code = $_GET['code'];
      $state = $_GET['state'] ?? '';
      $expected = $_SESSION['oauth_state'] ?? '';
      $verifier = $_SESSION['pkce_verifier'] ?? '';

      if (!$expected || !$verifier || !$state || $state !== $expected) {
        $error = 'OAuth state tidak valid. Coba login ulang.';
      } else {
        $tokenUrl = "https://myanimelist.net/v1/oauth2/token";
        $post = http_build_query([
          'client_id' =&gt; $MAL_CLIENT_ID,
          'client_secret' =&gt; $MAL_CLIENT_SECRET,
          'grant_type' =&gt; 'authorization_code',
          'code' =&gt; $code,
          'redirect_uri' =&gt; $REDIRECT_URI,
          'code_verifier' =&gt; $verifier,
        ]);

        [$status, $json, $raw] = http_json(
          $tokenUrl,
          [
            "Content-Type: application/x-www-form-urlencoded",
          ],
          "POST",
          $post
        );

        if ($status &gt;= 200 &amp;&amp; $status &lt; 300 &amp;&amp; isset($json['access_token'])) {
          $_SESSION['mal_token'] = $json;
          unset($_SESSION['oauth_state'], $_SESSION['pkce_verifier']);
          header("Location: " . $REDIRECT_URI . "?view=browse");
          exit;
        } else {
          $error = 'Gagal mendapatkan token dari MAL. Pastikan Client ID/Secret benar dan Redirect URL cocok.';
        }
      }
    }
  }

  // =========================
  // MAL API CALLS
  // =========================
  $token = $_SESSION['mal_token']['access_token'] ?? null;

  function mal_get($endpoint, $token, $clientId) {
    $url = "https://api.myanimelist.net/v2/" . ltrim($endpoint, '/');
    $headers = [
      "Accept: application/json",
    ];
    if ($token) $headers[] = "Authorization: Bearer " . $token;
    else $headers[] = "X-MAL-CLIENT-ID: " . $clientId;

    return http_json($url, $headers, "GET", null);
  }

  $user = null;
  if ($token) {
    [$sU, $jU] = mal_get("users/@me?fields=anime_statistics", $token, $MAL_CLIENT_ID);
    if ($sU &gt;= 200 &amp;&amp; $sU &lt; 300) $user = $jU;
  }

  $browseItems = [];
  $browseMeta = ['next' =&gt; null];
  if ($view === 'browse') {
    if ($q !== '') {
      $fields = "id,title,main_picture,mean,rank,popularity,media_type,num_episodes,status,start_date,genres";
      $limit = 24;
      $endpoint = "anime?q=" . urlencode($q) . "&amp;limit=" . $limit . "&amp;fields=" . urlencode($fields);
      [$s, $j] = mal_get($endpoint, $token, $MAL_CLIENT_ID);
      if ($s &gt;= 200 &amp;&amp; $s &lt; 300) {
        $browseItems = $j['data'] ?? [];
        $browseMeta['next'] = $j['paging']['next'] ?? null;
      } else {
        $error = 'Gagal mengambil data pencarian dari MAL.';
      }
    } else if ($season &amp;&amp; $year) {
      $fields = "id,title,main_picture,mean,rank,popularity,media_type,num_episodes,status,start_date,genres";
      $limit = 24;
      $endpoint = "anime/season/" . urlencode($year) . "/" . urlencode($season)
        . "?limit=" . $limit . "&amp;fields=" . urlencode($fields);
      [$s, $j] = mal_get($endpoint, $token, $MAL_CLIENT_ID);
      if ($s &gt;= 200 &amp;&amp; $s &lt; 300) {
        $browseItems = $j['data'] ?? [];
        $browseMeta['next'] = $j['paging']['next'] ?? null;
      } else {
        $error = 'Gagal mengambil data season dari MAL.';
      }
    } else {
      $fields = "id,title,main_picture,mean,rank,popularity,media_type,num_episodes,status,start_date,genres";
      $limit = 24;
      $rankingType = "all";
      $endpoint = "anime/ranking?ranking_type=" . urlencode($rankingType) . "&amp;limit=" . $limit . "&amp;fields=" . urlencode($fields);
      [$s, $j] = mal_get($endpoint, $token, $MAL_CLIENT_ID);
      if ($s &gt;= 200 &amp;&amp; $s &lt; 300) {
        $browseItems = $j['data'] ?? [];
        $browseMeta['next'] = $j['paging']['next'] ?? null;
      } else {
        $error = 'Gagal mengambil ranking dari MAL.';
      }
    }

    if ($type !== 'all' &amp;&amp; $browseItems) {
      $browseItems = array_values(array_filter($browseItems, function($row) use ($type) {
        $mt = strtolower($row['node']['media_type'] ?? '');
        if ($type === 'tv') return in_array($mt, ['tv', 'tv_special', 'ona', 'ova'], true);
        if ($type === 'movie') return ($mt === 'movie');
        return true;
      }));
    }
  }

  $detail = null;
  if (($view === 'detail' || $view === 'watch') &amp;&amp; $id) {
    $fields = "id,title,main_picture,alternative_titles,start_date,end_date,synopsis,mean,rank,popularity,num_list_users,num_scoring_users,media_type,status,num_episodes,average_episode_duration,genres,studios,source,rating,nsfw,created_at,updated_at";
    [$sD, $jD] = mal_get("anime/" . urlencode($id) . "?fields=" . urlencode($fields), $token, $MAL_CLIENT_ID);
    if ($sD &gt;= 200 &amp;&amp; $sD &lt; 300) $detail = $jD;
    else $error = 'Gagal mengambil detail anime.';
  }

  $embedUrl = '';
  $embedLabel = '';
  if ($view === 'watch' &amp;&amp; $detail) {
    $title = $detail['title'] ?? '';
    $safeQuery = urlencode($title);
    if ($embed !== '') {
      foreach ($EMBED_PROVIDERS as $p) {
        if ($p['name'] === $embed) {
          $embedUrl = str_replace('{query}', $safeQuery, $p['url']);
          $embedLabel = $p['name'];
          break;
        }
      }
    }
  }

  $brand = "ANISTREAM";
?&gt;

  <div className="relative">
<div className="absolute inset-0 -z-10">
<div className="h-72 w-full bg-gradient-to-b from-indigo-500/15 via-slate-950 to-slate-950"></div>
<div className="pointer-events-none absolute inset-0 opacity-60" style={{backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(99,102,241,0.22) 0%, rgba(2,6,23,0) 45%), radial-gradient(circle at 80% 30%, rgba(56,189,248,0.14) 0%, rgba(2,6,23,0) 55%)'}}></div>
</div>
<header className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between py-6">
<a className="group inline-flex items-center gap-3" href="?view=home">
<div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 backdrop-blur">
<span className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: 'DM Sans, Inter, system-ui'}}>AS</span>
</div>
<div className="leading-tight">
<div className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: 'DM Sans, Inter, system-ui', letterSpacing: '-0.02em'}}>
<?php echo esc($brand); ?>
</div>
<div className="text-xs text-slate-300/80">Anime TV &amp; Movie • English UI</div>
</div>
</a>
<nav className="hidden items-center gap-2 sm:flex">
<a className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/5" href="?view=browse">
<iconify-icon className="text-slate-300" height="18" icon="lucide:compass" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
            Browse
          </a>
<a className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/5" href="?view=browse&amp;type=tv">
<iconify-icon className="text-slate-300" height="18" icon="lucide:tv" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
            TV
          </a>
<a className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-200 ring-1 ring-white/10 hover:bg-white/5" href="?view=browse&amp;type=movie">
<iconify-icon className="text-slate-300" height="18" icon="lucide:clapperboard" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
            Movies
          </a>
</nav>
<div className="flex items-center gap-2">
<?php if ($user): ?>
<div className="hidden items-center gap-2 rounded-xl bg-white/5 px-3 py-2 ring-1 ring-white/10 sm:flex">
<iconify-icon className="text-slate-300" height="18" icon="lucide:user" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<div className="text-xs">
<div className="font-medium text-slate-100"><?php echo esc($user['name'] ?? 'User'); ?></div>
<div className="text-slate-300/80">Connected</div>
</div>
</div>
<a className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10" href="?logout=1">
<iconify-icon className="text-slate-300" height="18" icon="lucide:log-out" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
              Logout
            </a>
<?php else: ?>
<a className="inline-flex items-center gap-2 rounded-xl bg-indigo-500/20 px-3 py-2 text-xs font-medium text-indigo-100 ring-1 ring-indigo-400/20 hover:bg-indigo-500/25" href="?login=1">
<iconify-icon className="text-indigo-200" height="18" icon="lucide:shield-check" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
              Connect MAL
            </a>
<?php endif; ?>
</div>
</div>
</header>
<main className="mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
<?php if ($error): ?>
<div className="mb-6 rounded-2xl bg-rose-500/10 p-4 ring-1 ring-rose-400/20">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-rose-200" height="18" icon="lucide:triangle-alert" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<div>
<div className="text-sm font-medium tracking-tight text-rose-100">Error</div>
<div className="mt-1 text-xs text-rose-100/80"><?php echo esc($error); ?></div>
</div>
</div>
</div>
<?php endif; ?>
<?php if ($notice): ?>
<div className="mb-6 rounded-2xl bg-sky-500/10 p-4 ring-1 ring-sky-400/20">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-sky-200" height="18" icon="lucide:info" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<div>
<div className="text-sm font-medium tracking-tight text-sky-100">Notice</div>
<div className="mt-1 text-xs text-sky-100/80"><?php echo esc($notice); ?></div>
</div>
</div>
</div>
<?php endif; ?>
<?php if ($view === 'home'): ?>
<section className="grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-7">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur">
<div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 ring-1 ring-white/10">
<iconify-icon className="text-slate-300" height="18" icon="lucide:sparkles" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<span className="text-xs font-medium text-slate-200">Anime TV &amp; Movie discovery</span>
</div>
<h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'DM Sans, Inter, system-ui'}}>
                Browse anime from MAL, then watch via your own embeds.
              </h1>
<p className="mt-3 text-sm text-slate-200/80">
                Template ini fokus untuk browsing data (judul, rating, genre, sinopsis) dari MyAnimeList. Fitur “watch” memakai embed provider yang kamu tentukan sendiri.
              </p>
<div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-500/20 px-4 py-3 text-sm font-medium text-indigo-100 ring-1 ring-indigo-400/20 hover:bg-indigo-500/25" href="?view=browse">
<iconify-icon className="text-indigo-200" height="18" icon="lucide:compass" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                  Start browsing
                </a>
<?php if (!$user): ?>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10" href="?login=1">
<iconify-icon className="text-slate-200" height="18" icon="lucide:shield-check" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Connect account (optional)
                  </a>
<?php endif; ?>
</div>
<div className="mt-6 grid gap-3 sm:grid-cols-3">
<div className="rounded-2xl bg-slate-900/40 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-medium text-slate-200">
<iconify-icon className="text-slate-300" height="18" icon="lucide:search" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Search
                  </div>
<div className="mt-2 text-xs text-slate-300/80">Cari TV atau movie berdasarkan judul.</div>
</div>
<div className="rounded-2xl bg-slate-900/40 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-medium text-slate-200">
<iconify-icon className="text-slate-300" height="18" icon="lucide:calendar" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Seasonal
                  </div>
<div className="mt-2 text-xs text-slate-300/80">Filter anime per season &amp; year.</div>
</div>
<div className="rounded-2xl bg-slate-900/40 p-4 ring-1 ring-white/10">
<div className="flex items-center gap-2 text-xs font-medium text-slate-200">
<iconify-icon className="text-slate-300" height="18" icon="lucide:play-circle" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Watch
                  </div>
<div className="mt-2 text-xs text-slate-300/80">Embed player via provider pilihanmu.</div>
</div>
</div>
</div>
<div className="mt-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between gap-4">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: 'DM Sans, Inter, system-ui'}}>Quick search</div>
<div className="mt-1 text-xs text-slate-300/80">Contoh: “Frieren”, “One Piece”, “Your Name”.</div>
</div>
<a className="hidden items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10 sm:inline-flex" href="?view=browse">
<iconify-icon className="text-slate-300" height="18" icon="lucide:arrow-right" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                  Browse
                </a>
</div>
<form action="" className="mt-4" method="get">
<input name="view" type="hidden" value="browse"/>
<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
<div className="relative flex-1">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<iconify-icon className="text-slate-400" height="18" icon="lucide:search" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<input className="w-full rounded-2xl bg-slate-900/50 py-3 pl-10 pr-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/30" name="q" placeholder="Search anime title…" value=""/>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-500/20 px-4 py-3 text-sm font-medium text-indigo-100 ring-1 ring-indigo-400/20 hover:bg-indigo-500/25">
<iconify-icon className="text-indigo-200" height="18" icon="lucide:sparkles" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Search
                  </button>
</div>
</form>
</div>
</div>
<aside className="lg:col-span-5">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center justify-between">
<div>
<div className="text-sm font-semibold tracking-tight text-slate-100" style={{fontFamily: 'DM Sans, Inter, system-ui'}}>Seasonal browse</div>
<div className="mt-1 text-xs text-slate-300/80">Ambil data dari endpoint season.</div>
</div>
<iconify-icon className="text-slate-300" height="20" icon="lucide:calendar-days" style={{-IconifyStrokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<form action="" className="mt-4 grid gap-3 sm:grid-cols-2" method="get">
<input name="view" type="hidden" value="browse"/>
<div className="rounded-2xl bg-slate-900/50 p-3 ring-1 ring-white/10">
<label className="text-xs font-medium text-slate-200">Season</label>
<select className="mt-2 w-full rounded-xl bg-slate-950/40 px-3 py-2 text-sm text-slate-100 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/30" name="season">
<option value="">Pick</option>
<option value="winter">Winter</option>
<option value="spring">Spring</option>
<option value="summer">Summer</option>
<option value="fall">Fall</option>
</select>
</div>
<div className="rounded-2xl bg-slate-900/50 p-3 ring-1 ring-white/10">
<label className="text-xs font-medium text-slate-200">Year</label>
<input className="mt-2 w-full rounded-xl bg-slate-950/40 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/30" inputmode="numeric" name="year" placeholder="2026"/>
</div>
<div className="sm:col-span-2">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10">
<iconify-icon className="text-slate-300" height="18" icon="lucide:filter" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Browse season
                  </button>
</div>
</form>
<div className="mt-5 rounded-2xl bg-slate-900/40 p-4 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-slate-300" height="18" icon="lucide:lock" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<div>
<div className="text-xs font-medium text-slate-200">Catatan penting</div>
<div className="mt-1 text-xs text-slate-300/80">
                      Client Secret sudah dipindah ke environment server. File ini tidak menyimpan secret.
                    </div>
</div>
</div>
</div>
</div>
</aside>
</section>
<?php elseif ($view === 'browse'): ?>
<section className="mb-6">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'DM Sans, Inter, system-ui'}}>Browse</h2>
<div className="mt-1 text-xs text-slate-300/80">Search, seasonal, atau ranking. Klik kartu untuk detail.</div>
</div>
<div className="flex flex-col gap-2 sm:flex-row sm:items-center">
<form action="" className="flex items-center gap-2" method="get">
<input name="view" type="hidden" value="browse"/>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
<iconify-icon className="text-slate-400" height="18" icon="lucide:search" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<input className="w-full rounded-2xl bg-slate-900/50 py-2.5 pl-10 pr-3 text-sm text-slate-100 placeholder:text-slate-500 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/30 sm:w-64" name="q" placeholder="Search…" value="&lt;?php echo esc($q); ?&gt;"/>
</div>
<select className="rounded-2xl bg-slate-900/50 px-3 py-2.5 text-sm text-slate-100 ring-1 ring-white/10 focus:outline-none focus:ring-2 focus:ring-indigo-400/30" name="type">
<option $type="=='all'?'selected':'';" <?php="" ?="" echo="" value="all">&gt;All</option>
<option $type="=='tv'?'selected':'';" <?php="" ?="" echo="" value="tv">&gt;TV</option>
<option $type="=='movie'?'selected':'';" <?php="" ?="" echo="" value="movie">&gt;Movie</option>
</select>
<button className="inline-flex items-center gap-2 rounded-2xl bg-indigo-500/20 px-3 py-2.5 text-sm font-medium text-indigo-100 ring-1 ring-indigo-400/20 hover:bg-indigo-500/25">
<iconify-icon className="text-indigo-200" height="18" icon="lucide:arrow-right" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                  Go
                </button>
</form>
</div>
</div>
</section>
<section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
<?php if (!$browseItems): ?>
<div className="sm:col-span-2 lg:col-span-3 xl:col-span-4 rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-slate-300" height="18" icon="lucide:inbox" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<div>
<div className="text-sm font-medium tracking-tight text-slate-100">No results</div>
<div className="mt-1 text-xs text-slate-300/80">Coba kata kunci lain atau buka halaman browse tanpa search untuk ranking.</div>
</div>
</div>
</div>
<?php endif; ?>
<?php foreach ($browseItems as $row): ?>
<?php
              $n = $row['node'] ?? [];
              $aid = $n['id'] ?? '';
              $title = $n['title'] ?? '';
              $pic = $n['main_picture']['large'] ?? ($n['main_picture']['medium'] ?? '');
              $mean = $n['mean'] ?? null;
              $media = strtoupper((string)($n['media_type'] ?? ''));
              $eps = $n['num_episodes'] ?? null;
            ?>
<a className="group rounded-3xl bg-white/5 ring-1 ring-white/10 hover:bg-white/10 overflow-hidden" href="?view=detail&amp;id=&lt;?php echo esc($aid); ?&gt;">
<div className="relative aspect-[4/5] bg-slate-900/40">
<?php if ($pic): ?>
<img alt="&lt;?php echo esc($title); ?&gt;" className="h-full w-full object-cover opacity-95 transition group-hover:opacity-100" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<?php else: ?>
<div className="flex h-full w-full items-center justify-center text-xs text-slate-400">No image</div>
<?php endif; ?>
<div className="absolute inset-x-0 bottom-0 p-3" style={{background: 'linear-gradient(to top, rgba(2,6,23,0.92), rgba(2,6,23,0))'}}>
<div className="flex items-center justify-between gap-2">
<div className="inline-flex items-center gap-2 rounded-full bg-slate-950/50 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
<iconify-icon className="text-slate-300" height="16" icon="lucide:clapperboard" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
<?php echo esc($media ?: 'ANIME'); ?>
</div>
<?php if ($mean): ?>
<div className="inline-flex items-center gap-1 rounded-full bg-slate-950/50 px-2.5 py-1 text-xs text-slate-200 ring-1 ring-white/10 backdrop-blur">
<iconify-icon className="text-amber-200" height="16" icon="lucide:star" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
<?php echo esc(number_format((float)$mean, 2)); ?>
</div>
<?php endif; ?>
</div>
</div>
</div>
<div className="p-4">
<div className="text-sm font-semibold tracking-tight text-slate-50" style={{fontFamily: 'DM Sans, Inter, system-ui'}}>
<?php echo esc($title); ?>
</div>
<div className="mt-2 flex items-center justify-between gap-3">
<div className="text-xs text-slate-300/80">
<?php echo $eps ? esc($eps . ' eps') : '—'; ?>
</div>
<div className="inline-flex items-center gap-2 text-xs font-medium text-slate-200">
                    View
                    <iconify-icon className="text-slate-300" height="16" icon="lucide:arrow-right" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
</div>
</div>
</div>
</a>
<?php endforeach; ?>
</section>
<?php elseif ($view === 'detail' && $detail): ?>
<?php
          $title = $detail['title'] ?? '';
          $pic = $detail['main_picture']['large'] ?? ($detail['main_picture']['medium'] ?? '');
          $synopsis = $detail['synopsis'] ?? '';
          $mean = $detail['mean'] ?? null;
          $rank = $detail['rank'] ?? null;
          $pop = $detail['popularity'] ?? null;
          $media = strtoupper((string)($detail['media_type'] ?? ''));
          $eps = $detail['num_episodes'] ?? null;
          $status = $detail['status'] ?? '';
          $genres = $detail['genres'] ?? [];
          $studios = $detail['studios'] ?? [];
        ?>
<section className="grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-4">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="aspect-[4/5] bg-slate-900/40">
<?php if ($pic): ?>
<img alt="&lt;?php echo esc($title); ?&gt;" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<?php else: ?>
<div className="flex h-full w-full items-center justify-center text-xs text-slate-400">No image</div>
<?php endif; ?>
</div>
<div className="p-4">
<div className="flex flex-wrap items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">
<iconify-icon className="text-slate-300" height="16" icon="lucide:clapperboard" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
<?php echo esc($media ?: 'ANIME'); ?>
</span>
<?php if ($eps): ?>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">
<iconify-icon className="text-slate-300" height="16" icon="lucide:list-video" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
<?php echo esc($eps . ' eps'); ?>
</span>
<?php endif; ?>
</div>
<div className="mt-4 grid grid-cols-3 gap-2">
<div className="rounded-2xl bg-slate-900/40 p-3 ring-1 ring-white/10">
<div className="text-xs text-slate-300/80">Score</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-50"><?php echo $mean ? esc(number_format((float)$mean, 2)) : '—'; ?></div>
</div>
<div className="rounded-2xl bg-slate-900/40 p-3 ring-1 ring-white/10">
<div className="text-xs text-slate-300/80">Rank</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-50"><?php echo $rank ? esc('#' . $rank) : '—'; ?></div>
</div>
<div className="rounded-2xl bg-slate-900/40 p-3 ring-1 ring-white/10">
<div className="text-xs text-slate-300/80">Pop.</div>
<div className="mt-1 text-sm font-semibold tracking-tight text-slate-50"><?php echo $pop ? esc('#' . $pop) : '—'; ?></div>
</div>
</div>
<div className="mt-4 flex flex-col gap-2">
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-500/20 px-4 py-3 text-sm font-medium text-indigo-100 ring-1 ring-indigo-400/20 hover:bg-indigo-500/25" href="?view=watch&amp;id=&lt;?php echo esc($detail['id']); ?&gt;">
<iconify-icon className="text-indigo-200" height="18" icon="lucide:play" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Watch
                  </a>
<a className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10" href="?view=browse">
<iconify-icon className="text-slate-300" height="18" icon="lucide:arrow-left" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                    Back to browse
                  </a>
</div>
</div>
</div>
</div>
<div className="lg:col-span-8">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'DM Sans, Inter, system-ui'}}><?php echo esc($title); ?></h2>
<div className="mt-3 flex flex-wrap gap-2">
<?php if ($status): ?>
<span className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">
<iconify-icon className="text-slate-300" height="16" icon="lucide:activity" style={{-IconifyStrokeWidth: '1.5'}} width="16"></iconify-icon>
<?php echo esc(ucwords(str_replace('_',' ', $status))); ?>
</span>
<?php endif; ?>
<?php foreach (array_slice($genres, 0, 6) as $g): ?>
<span className="inline-flex items-center rounded-full bg-slate-900/40 px-3 py-1 text-xs text-slate-200 ring-1 ring-white/10">
<?php echo esc($g['name'] ?? ''); ?>
</span>
<?php endforeach; ?>
</div>
<div className="mt-5 grid gap-4 sm:grid-cols-2">
<div className="rounded-2xl bg-slate-900/40 p-4 ring-1 ring-white/10">
<div className="text-xs font-medium text-slate-200">Studios</div>
<div className="mt-2 text-xs text-slate-300/80">
<?php
                      if (!$studios) echo '—';
                      else {
                        $names = array_map(fn($s) => $s['name'] ?? '', $studios);
                        echo esc(implode(', ', array_filter($names)));
                      }
                    ?&gt;
                  </div>
</div>
<div className="rounded-2xl bg-slate-900/40 p-4 ring-1 ring-white/10">
<div className="text-xs font-medium text-slate-200">Source</div>
<div className="mt-2 text-xs text-slate-300/80"><?php echo esc($detail['source'] ?? '—'); ?></div>
</div>
</div>
<div className="mt-6 rounded-2xl bg-slate-900/40 p-5 ring-1 ring-white/10">
<div className="flex items-center justify-between gap-4">
<div className="text-xs font-medium text-slate-200">Synopsis</div>
<div className="text-xs text-slate-400">from MAL</div>
</div>
<p className="mt-3 text-sm text-slate-200/80 whitespace-pre-line"><?php echo esc($synopsis ?: '—'); ?></p>
</div>
</div>
</div>
</section>
<?php elseif ($view === 'watch' && $detail): ?>
<?php
          $title = $detail['title'] ?? '';
          $pic = $detail['main_picture']['large'] ?? ($detail['main_picture']['medium'] ?? '');
        ?>
<section className="mb-6">
<div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
<div className="min-w-0">
<div className="flex items-center gap-3">
<a className="inline-flex items-center gap-2 rounded-xl bg-white/5 px-3 py-2 text-xs font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10" href="?view=detail&amp;id=&lt;?php echo esc($detail['id']); ?&gt;">
<iconify-icon className="text-slate-300" height="18" icon="lucide:arrow-left" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                  Detail
                </a>
<div className="text-xs text-slate-300/80">Watch</div>
</div>
<h2 className="mt-3 truncate text-2xl font-semibold tracking-tight text-slate-50" style={{fontFamily: 'DM Sans, Inter, system-ui'}}><?php echo esc($title); ?></h2>
<div className="mt-1 text-xs text-slate-300/80">Pilih embed provider (contoh) atau ganti URL provider di konfigurasi.</div>
</div>
</div>
</section>
<section className="grid gap-6 lg:grid-cols-12">
<div className="lg:col-span-8">
<div className="rounded-3xl bg-white/5 ring-1 ring-white/10 overflow-hidden">
<div className="aspect-video bg-slate-900/50">
<?php if ($embedUrl): ?>
<iframe allow="autoplay; fullscreen; picture-in-picture" allowfullscreen="" className="h-full w-full" loading="lazy" referrerpolicy="no-referrer" src="&lt;?php echo esc($embedUrl); ?&gt;" title="&lt;?php echo esc($title . ' — ' . $embedLabel); ?&gt;"></iframe>
<?php else: ?>
<div className="flex h-full w-full items-center justify-center p-8 text-center">
<div className="max-w-md">
<div className="mx-auto inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-slate-200 ring-1 ring-white/10">
<iconify-icon className="text-slate-300" height="18" icon="lucide:play-circle" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                        No embed selected
                      </div>
<div className="mt-4 text-sm text-slate-200/80">
                        Pilih provider di panel kanan untuk memuat player.
                      </div>
</div>
</div>
<?php endif; ?>
</div>
</div>
<div className="mt-4 rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-slate-300" height="18" icon="lucide:info" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<div>
<div className="text-xs font-medium text-slate-200">Tips</div>
<div className="mt-1 text-xs text-slate-300/80">
                    Untuk TV (multi-episode), kamu bisa kembangkan endpoint watch jadi menerima parameter <span className="font-medium text-slate-200">ep</span> lalu bentuk URL embed sesuai provider.
                  </div>
</div>
</div>
</div>
</div>
<aside className="lg:col-span-4">
<div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10">
<div className="flex items-center gap-3">
<div className="h-12 w-12 overflow-hidden rounded-2xl bg-slate-900/50 ring-1 ring-white/10">
<?php if ($pic): ?>
<img alt="&lt;?php echo esc($title); ?&gt;" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<?php endif; ?>
</div>
<div className="min-w-0">
<div className="truncate text-sm font-semibold tracking-tight text-slate-50" style={{fontFamily: 'DM Sans, Inter, system-ui'}}><?php echo esc($title); ?></div>
<div className="mt-1 text-xs text-slate-300/80">Select a provider</div>
</div>
</div>
<div className="mt-5 grid gap-2">
<?php foreach ($EMBED_PROVIDERS as $p): ?>
<?php
                    $active = ($embed === $p['name']);
                    $href = "?view=watch&id=" . urlencode($detail['id']) . "&embed=" . urlencode($p['name']);
                  ?>
<a className="&lt;?php echo $active ? 'bg-indigo-500/15 ring-indigo-400/25' : 'bg-slate-900/40 ring-white/10 hover:bg-white/10'; ?&gt; group rounded-2xl p-4 ring-1" href="&lt;?php echo esc($href); ?&gt;">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-medium tracking-tight text-slate-100"><?php echo esc($p['name']); ?></div>
<div className="mt-1 text-xs text-slate-300/80"><?php echo esc($p['note']); ?></div>
</div>
<iconify-icon className="&lt;?php echo $active ? 'text-indigo-200' : 'text-slate-300'; ?&gt;" height="18" icon="lucide:external-link" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
</a>
<?php endforeach; ?>
</div>
<div className="mt-5 rounded-2xl bg-amber-500/10 p-4 ring-1 ring-amber-400/20">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-amber-200" height="18" icon="lucide:shield-alert" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<div>
<div className="text-xs font-medium text-amber-100">Legal &amp; safety</div>
<div className="mt-1 text-xs text-amber-100/80">
                      Gunakan hanya sumber embed yang kamu miliki haknya/diizinkan. Template ini hanya contoh integrasi data &amp; UI.
                    </div>
</div>
</div>
</div>
</div>
</aside>
</section>
<?php else: ?>
<div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
<div className="flex items-start gap-3">
<iconify-icon className="mt-0.5 text-slate-300" height="18" icon="lucide:route-off" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
<div>
<div className="text-sm font-medium tracking-tight text-slate-100">Page not found</div>
<div className="mt-1 text-xs text-slate-300/80">Coba kembali ke browse.</div>
<div className="mt-4">
<a className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-slate-100 ring-1 ring-white/10 hover:bg-white/10" href="?view=browse">
<iconify-icon className="text-slate-300" height="18" icon="lucide:compass" style={{-IconifyStrokeWidth: '1.5'}} width="18"></iconify-icon>
                  Browse
                </a>
</div>
</div>
</div>
</div>
<?php endif; ?>
</main>
<footer className="border-t border-white/10">
<div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-4 py-8 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<span className="font-medium tracking-tight text-slate-300" style={{fontFamily: 'DM Sans, Inter, system-ui', letterSpacing: '-0.02em'}}><?php echo esc($brand); ?></span>
<span>•</span>
<span>Data by MyAnimeList API</span>
</div>
<div className="flex items-center gap-4">
<a className="hover:text-slate-200" href="?view=home">Home</a>
<a className="hover:text-slate-200" href="?view=browse">Browse</a>
<a className="hover:text-slate-200" href="?view=browse&amp;type=movie">Movies</a>
</div>
</div>
</footer>
</div>

    </>
  );
}
