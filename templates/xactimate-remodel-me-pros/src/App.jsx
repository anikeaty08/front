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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



// ═══ STATE ═══
var S={model:null,stream:null,facing:'environment',mode:'INT',features:[],captures:[],live:[],gps:null,detOn:true,busy:false,raf:null,xact:null};

// ═══ PLATFORM DETECT ═══
var UA=navigator.userAgent||'';
var isAndroid=/android/i.test(UA);
var isiOS=/iphone|ipad|ipod/i.test(UA);
var isChrome=/chrome/i.test(UA)&&!/edg/i.test(UA);
var isFirefox=/firefox/i.test(UA);
var isSafari=/safari/i.test(UA)&&!isChrome;
var isSecure=location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1';

// ═══ LABEL MAP ═══
var LM={'door':{x:'Door — Interior',c:'#c53030',cat:'DOR'},'window':{x:'Window — Single',c:'#2563eb',cat:'WIN'},'chair':{x:'Furniture (Chair)',c:'#7c3aed',cat:'MSC'},'couch':{x:'Furniture (Sofa)',c:'#7c3aed',cat:'MSC'},'sofa':{x:'Furniture (Sofa)',c:'#7c3aed',cat:'MSC'},'bed':{x:'Furniture (Bed)',c:'#7c3aed',cat:'MSC'},'dining table':{x:'Furniture (Table)',c:'#7c3aed',cat:'MSC'},'refrigerator':{x:'Appliance (Refrigerator)',c:'#0891b2',cat:'APP'},'oven':{x:'Appliance (Oven)',c:'#0891b2',cat:'APP'},'microwave':{x:'Appliance (Microwave)',c:'#0891b2',cat:'APP'},'sink':{x:'Plumbing (Sink)',c:'#0d9488',cat:'PLB'},'toilet':{x:'Plumbing (Toilet)',c:'#0d9488',cat:'PLB'},'tv':{x:'Electronics (TV)',c:'#d97706',cat:'ELC'},'monitor':{x:'Electronics (Monitor)',c:'#d97706',cat:'ELC'},'clock':{x:'Fixture (Clock)',c:'#65a30d',cat:'FIX'},'person':null,'car':null,'truck':null,'bicycle':null,'motorcycle':null,'cat':null,'dog':null,'bird':null};
function ml(lbl){var l=lbl.toLowerCase();if(LM.hasOwnProperty(l))return LM[l];return{x:lbl.charAt(0).toUpperCase()+lbl.slice(1),c:'#64748b',cat:'MSC'};}

// ═══ DOM ═══
var video=document.getElementById('video'),dc=document.getElementById('detCanvas'),ctx=dc.getContext('2d'),cap=document.getElementById('cc');

// ═══ WIRE BUTTONS ═══
function on(id,fn){var el=document.getElementById(id);if(!el)return;el.addEventListener('click',function(e){e.preventDefault();fn();});}
on('startBtn',startCamera);on('restartBtn',startCamera);
on('retryBtn',function(){document.getElementById('errScreen').classList.remove('show');startCamera();});
on('capBtn',capture);on('flipBtn',function(){S.facing=S.facing==='environment'?'user':'environment';startCamera();});
on('detToggle',toggleDetect);
on('mpINT',function(){setMode('INT');});on('mpEXT',function(){setMode('EXT');});on('mpROOF',function(){setMode('ROOF');});
on('addFeatBtn',openModal);on('modalCancel',closeModal);on('modalOk',addManualFeature);
on('btnGen',genXact);on('btnJSON',dlJSON);on('btnCSV',dlCSV);on('btnCopy',copyJSON);
on('tabMeasure',function(){showTab('Measure');});on('tabMedia',function(){showTab('Media');});on('tabExport',function(){showTab('Export');});
document.getElementById('modalBg').addEventListener('click',function(e){if(e.target===this)closeModal();});
document.getElementById('lightbox').addEventListener('click',function(){this.classList.remove('on');});
['iL','iW','iH'].forEach(function(id){document.getElementById(id).addEventListener('input',recalc);});
document.getElementById('iDate').valueAsDate=new Date();

// Update start note with platform info
(function(){
  var note=document.getElementById('sNote');
  if(note){
    var p=isAndroid?'Android':(isiOS?'iOS':'Desktop');
    var secure=isSecure?'✅ HTTPS':'⚠️ Not HTTPS';
    note.innerHTML=secure+' · Detected: '+p+' · Tap to allow camera';
  }
})();

function platformName(){
  if(isAndroid&&isChrome) return 'Android Chrome';
  if(isAndroid&&isFirefox) return 'Android Firefox';
  if(isAndroid) return 'Android';
  if(isiOS&&isSafari) return 'iOS Safari';
  if(isiOS) return 'iOS';
  if(isChrome) return 'Chrome';
  if(isFirefox) return 'Firefox';
  if(isSafari) return 'Safari';
  return 'this browser';
}

// ═══ START CAMERA ═══
function startCamera(){
  document.getElementById('startScreen').style.display='none';
  document.getElementById('errScreen').classList.remove('show');
  document.getElementById('camDot').className='dot busy';
  document.getElementById('camTxt').textContent='STARTING';
  if(S.stream){S.stream.getTracks().forEach(function(t){t.stop();});S.stream=null;}

  // Check secure context first
  if(!isSecure){
    showErr('HTTPS Required',
      'Camera access requires a secure connection.\n\n'+
      'Current URL:\n  '+location.href+'\n\n'+
      'Fix: serve this page over HTTPS.\n'+
      'Quick options:\n  • ngrok http 8080\n  • npx serve --ssl\n  • Any HTTPS host');
    return;
  }

  if(!navigator.mediaDevices||!navigator.mediaDevices.getUserMedia){
    showErr('Camera Not Supported',
      platformName()+' does not support camera access here.\n\n'+
      'Try opening this page directly in '+
      (isAndroid?'Chrome':'Safari')+
      ' (not inside another app\'s browser).');
    return;
  }

  // On Android Chrome, try Permissions API first for better error info
  var permCheck=Promise.resolve('unknown');
  if(navigator.permissions&&navigator.permissions.query){
    permCheck=navigator.permissions.query({name:'camera'}).then(function(r){return r.state;}).catch(function(){return 'unknown';});
  }

  permCheck.then(function(permState){
    if(permState==='denied'){
      showErr('Camera Blocked',getPermHint('denied'));
      document.getElementById('camDot').className='dot err';
      document.getElementById('camTxt').textContent='BLOCKED';
      return;
    }
    // Attempt getUserMedia with fallback chain
    doGUM({video:{facingMode:{ideal:S.facing},width:{ideal:1920},height:{ideal:1080}},audio:false})
      .catch(function(){return doGUM({video:{facingMode:S.facing},audio:false});})
      .catch(function(){return doGUM({video:true,audio:false});})
      .then(function(stream){
        if(!stream)return;
        S.stream=stream;video.srcObject=stream;
        video.onloadedmetadata=function(){dc.width=video.videoWidth||1280;dc.height=video.videoHeight||720;};
        var p=video.play();
        if(p&&p.then)p.then(camReady).catch(camReady);
        else camReady();
      })
      .catch(handleCamError);
  });
}
function doGUM(c){return navigator.mediaDevices.getUserMedia(c);}

function camReady(){
  document.getElementById('camDot').className='dot live';
  document.getElementById('camTxt').textContent='LIVE';
  document.getElementById('camBar').classList.add('on');
  document.getElementById('capBtn').disabled=false;
  document.getElementById('detToggle').classList.add('on');
  ['hudMode','hudGPS','hudAI'].forEach(function(id){document.getElementById(id).classList.add('on');});
  document.querySelectorAll('.brk').forEach(function(el){el.classList.add('on');});
  if(!S.model)document.getElementById('aiBanner').classList.add('on');
  if(S.model)startLoop();
  getGPS();
  toast('📷 Camera live on '+platformName());
}

function getPermHint(reason){
  if(isAndroid&&isChrome){
    return 'Android Chrome — camera '+reason+':\n\n'+
      '1. Tap the lock/tune icon 🔒 in the\n   address bar (top-left)\n'+
      '2. Tap "Permissions" or "Site settings"\n'+
      '3. Set Camera → "Allow"\n'+
      '4. Tap "Try Again" below\n\n'+
      'Or: Settings → Apps → Chrome →\n  Permissions → Camera → Allow';
  }
  if(isAndroid){
    return 'Android — camera '+reason+':\n\n'+
      '1. Open your browser settings\n'+
      '2. Go to Site Settings → Camera\n'+
      '3. Allow camera for this site\n'+
      '4. Tap "Try Again" below';
  }
  if(isiOS&&isSafari){
    return 'iOS Safari — camera '+reason+':\n\n'+
      '1. Go to iPhone Settings\n'+
      '2. Scroll to Safari\n'+
      '3. Tap Camera → set to "Allow"\n'+
      '4. Come back and tap "Try Again"';
  }
  if(isiOS){
    return 'iOS — camera '+reason+':\n\n'+
      '1. Go to iPhone Settings\n'+
      '2. Find this browser app\n'+
      '3. Enable Camera permission\n'+
      '4. Come back and tap "Try Again"';
  }
  return 'Camera '+reason+':\n\n'+
    '1. Click the lock/site icon in the address bar\n'+
    '2. Find Camera permission\n'+
    '3. Set to "Allow"\n'+
    '4. Tap "Try Again" below';
}

function handleCamError(e){
  document.getElementById('camDot').className='dot err';
  document.getElementById('camTxt').textContent='ERROR';
  var msg='Camera access failed.',hint='';
  if(e){
    switch(e.name){
      case'NotAllowedError':case'PermissionDeniedError':
        msg='Camera permission denied.';
        hint=getPermHint('denied');
        break;
      case'NotFoundError':case'DevicesNotFoundError':
        msg='No camera found.';
        hint='No camera detected on this device.\n\nIf you have a camera, try:\n  • Closing other camera apps\n  • Restarting '+platformName();
        break;
      case'NotReadableError':case'TrackStartError':
        msg='Camera is busy.';
        hint='Another app is using the camera.\n\n'+
          'Close any app that might be using it:\n  • Other browser tabs with camera\n  • Video call apps\n  • Camera app\n\nThen tap "Try Again".';
        break;
      case'OverconstrainedError':
        msg='Camera config error.';
        hint='Could not match camera settings.\nThis usually resolves on retry.\n\nTap "Try Again".';
        break;
      case'SecurityError':
        msg='HTTPS required.';
        hint='Camera needs a secure (HTTPS) page.\n\nCurrent: '+location.protocol+'//'+location.host+'\n\nDeploy with HTTPS or use:\n  ngrok http 8080\n  npx serve --ssl';
        break;
      default:
        msg='Camera error'+(e.name?' ('+e.name+')':'');
        hint='Error: '+(e.message||'Unknown')+'\n\nTry:\n  • Refreshing the page\n  • Using '+
          (isAndroid?'Chrome':'Safari')+'\n  • Checking camera permissions';
    }
  }
  showErr(msg,hint);
}
function showErr(msg,hint){
  document.getElementById('errMsg').textContent=msg;
  document.getElementById('errHint').textContent=hint;
  document.getElementById('errScreen').classList.add('show');
}

// ═══ AI MODEL ═══
function loadModel(){
  document.getElementById('aiDot').className='dot busy';document.getElementById('aiTxt').textContent='AI LOADING';
  function inj(src){return new Promise(function(res,rej){var s=document.createElement('script');s.src=src;s.async=true;s.onload=res;s.onerror=rej;document.head.appendChild(s);});}
  inj('https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@4.17.0/dist/tf.min.js')
    .then(function(){return inj('https://cdn.jsdelivr.net/npm/@tensorflow-models/coco-ssd@2.2.3/dist/coco-ssd.min.js');})
    .then(function(){return cocoSsd.load({base:'mobilenet_v2'});})
    .then(function(m){S.model=m;document.getElementById('aiDot').className='dot live';document.getElementById('aiTxt').textContent='AI READY';document.getElementById('aiBanner').classList.remove('on');toast('🤖 AI model loaded');if(S.stream)startLoop();})
    .catch(function(){document.getElementById('aiDot').className='dot err';document.getElementById('aiTxt').textContent='AI UNAVAIL';document.getElementById('aiBanner').classList.remove('on');toast('⚠ AI unavailable — manual mode');});
}
loadModel();

// ═══ DETECTION LOOP ═══
function startLoop(){
  if(S.raf)cancelAnimationFrame(S.raf);var last=0;
  function loop(ts){
    if(ts-last>450&&S.model&&S.detOn&&!S.busy&&video.readyState>=2&&video.videoWidth>0){
      last=ts;S.busy=true;
      S.model.detect(video,12,0.32).then(function(preds){
        S.live=preds.filter(function(p){return LM[p.class.toLowerCase()]!==null;});
        drawBoxes(S.live);
        var n=S.live.length,h=document.getElementById('hudAI');
        h.textContent=n?(n+' FEATURE'+(n>1?'S':'')+' DETECTED'):'SCANNING…';
        h.style.color=n?'var(--green)':'var(--mist)';S.busy=false;
      }).catch(function(){S.busy=false;});
    }
    S.raf=requestAnimationFrame(loop);
  }
  S.raf=requestAnimationFrame(loop);
}

// ═══ DRAW BOXES ═══
function drawBoxes(preds){
  var vr=video.getBoundingClientRect();dc.style.width=vr.width+'px';dc.style.height=vr.height+'px';
  ctx.clearRect(0,0,dc.width,dc.height);if(!preds||!preds.length)return;
  var sx=dc.width/(video.videoWidth||dc.width),sy=dc.height/(video.videoHeight||dc.height);
  preds.forEach(function(p){
    var m=ml(p.class);if(!m)return;
    var b=p.bbox,x=b[0]*sx,y=b[1]*sy,w=b[2]*sx,h=b[3]*sy,col=m.c,conf=Math.round(p.score*100);
    ctx.strokeStyle=col;ctx.lineWidth=2.5;ctx.strokeRect(x,y,w,h);
    ctx.fillStyle=h2r(col,0.08);ctx.fillRect(x,y,w,h);
    var cs=16;ctx.lineWidth=3;ctx.strokeStyle=col;
    [[x,y,1,1],[x+w,y,-1,1],[x,y+h,1,-1],[x+w,y+h,-1,-1]].forEach(function(c){ctx.beginPath();ctx.moveTo(c[0]+c[2]*cs,c[1]);ctx.lineTo(c[0],c[1]);ctx.lineTo(c[0],c[1]+c[3]*cs);ctx.stroke();});
    ctx.font='600 12px "JetBrains Mono", monospace';
    var lbl=m.x+'  '+conf+'%',tw=ctx.measureText(lbl).width+16,th=22;
    var lx=Math.max(0,Math.min(x,dc.width-tw)),ly=y>th+4?y-th-2:y+h+2;
    ctx.fillStyle='rgba(255,255,255,0.92)';rr(ctx,lx,ly,tw,th,4);ctx.fill();
    ctx.strokeStyle=col;ctx.lineWidth=1.5;rr(ctx,lx,ly,tw,th,4);ctx.stroke();
    ctx.fillStyle=col;ctx.fillText(lbl,lx+8,ly+15);
  });
}
function h2r(hex,a){var r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return'rgba('+r+','+g+','+b+','+a+')';}
function rr(c,x,y,w,h,r){c.beginPath();c.moveTo(x+r,y);c.lineTo(x+w-r,y);c.arcTo(x+w,y,x+w,y+r,r);c.lineTo(x+w,y+h-r);c.arcTo(x+w,y+h,x+w-r,y+h,r);c.lineTo(x+r,y+h);c.arcTo(x,y+h,x,y+h-r,r);c.lineTo(x,y+r);c.arcTo(x,y,x+r,y,r);c.closePath();}

// ═══ TOGGLE DETECT ═══
function toggleDetect(){S.detOn=!S.detOn;document.getElementById('trk').className='trk'+(S.detOn?' on':'');document.getElementById('trkLbl').textContent=S.detOn?'DETECT ON':'DETECT OFF';if(!S.detOn){ctx.clearRect(0,0,dc.width,dc.height);S.live=[];document.getElementById('hudAI').textContent='DETECT OFF';}toast(S.detOn?'🤖 Detection on':'Detection paused');}

// ═══ CAPTURE ═══
function capture(){
  if(!S.stream){toast('⚠ Start camera first');return;}
  var fl=document.getElementById('flash');fl.style.transition='opacity .04s';fl.style.opacity='.85';
  setTimeout(function(){fl.style.transition='opacity .5s';fl.style.opacity='0';},80);
  cap.width=video.videoWidth||1280;cap.height=video.videoHeight||720;var cc=cap.getContext('2d');cc.drawImage(video,0,0);
  if(S.detOn&&S.live.length){S.live.forEach(function(p){
    var m=ml(p.class);if(!m)return;var b=p.bbox,x=b[0],y=b[1],w=b[2],h=b[3],col=m.c;
    cc.strokeStyle=col;cc.lineWidth=3;cc.strokeRect(x,y,w,h);cc.fillStyle=h2r(col,0.08);cc.fillRect(x,y,w,h);
    cc.font='bold 16px "JetBrains Mono", monospace';var lbl=m.x+'  '+Math.round(p.score*100)+'%';
    var tw=cc.measureText(lbl).width+20,th=26,lx=x,ly=y>th?y-th:y+h;
    cc.fillStyle='rgba(255,255,255,0.92)';rr(cc,lx,ly,tw,th,5);cc.fill();cc.strokeStyle=col;cc.lineWidth=1.5;rr(cc,lx,ly,tw,th,5);cc.stroke();
    cc.fillStyle=col;cc.fillText(lbl,lx+10,ly+18);
  });}
  var dataUrl=cap.toDataURL('image/jpeg',0.92);
  var room=document.getElementById('iRoom').value||S.mode,ts=new Date();
  var label=room+' · '+ts.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'});
  var H=parseFloat(document.getElementById('iH').value)||8,fh=video.videoHeight||720;
  S.live.filter(function(p){return LM[p.class.toLowerCase()]!==null;}).forEach(function(p){
    var m=ml(p.class),hIn=Math.round((p.bbox[3]/fh)*H*12),wIn=Math.round((p.bbox[2]/fh)*H*12);
    if(!S.features.find(function(f){return f.type===m.x;}))S.features.push({type:m.x,color:m.c,cat:m.cat,w:wIn,h:hIn,conf:Math.round(p.score*100),notes:'AI '+Math.round(p.score*100)+'% · '+S.mode,src:'ai'});
  });
  S.captures.push({dataUrl:dataUrl,label:label,ts:ts.toISOString(),dc:S.live.length,mode:S.mode});
  renderFeats();renderMedia();recalc();toast('📸 Captured · '+S.live.length+' feature'+(S.live.length!==1?'s':''));showTab('Media');
}

// ═══ GPS ═══
function getGPS(){
  var el=document.getElementById('hudGPS');
  if(!navigator.geolocation){el.textContent='📍 GPS unavailable';return;}
  navigator.geolocation.getCurrentPosition(function(pos){
    S.gps={lat:pos.coords.latitude.toFixed(6),lon:pos.coords.longitude.toFixed(6),acc:Math.round(pos.coords.accuracy)};
    el.textContent='📍 '+S.gps.lat+', '+S.gps.lon+' ±'+S.gps.acc+'m';
    fetch('https://nominatim.openstreetmap.org/reverse?lat='+S.gps.lat+'&lon='+S.gps.lon+'&format=json',{headers:{'Accept-Language':'en'}})
      .then(function(r){return r.json();}).then(function(d){if(d.display_name){var short=d.display_name.split(',').slice(0,4).join(',').trim();var addr=document.getElementById('iAddr');if(!addr.value)addr.value=short;el.textContent='📍 '+d.display_name.split(',')[0];}}).catch(function(){});
  },function(){el.textContent='📍 GPS unavailable';},{enableHighAccuracy:true,timeout:10000});
}

// ═══ RECALC ═══
function recalc(){var L=parseFloat(document.getElementById('iL').value)||0,W=parseFloat(document.getElementById('iW').value)||0,H=parseFloat(document.getElementById('iH').value)||8;var f=L*W,w=2*(L+W)*H,p=2*(L+W);document.getElementById('sfF').textContent=f?f.toFixed(1):'—';document.getElementById('sfW').textContent=w?w.toFixed(1):'—';document.getElementById('sfC').textContent=f?f.toFixed(1):'—';document.getElementById('iPerim').value=p?p.toFixed(1):'';}

// ═══ FEATURES ═══
function renderFeats(){
  var el=document.getElementById('featList');
  if(!S.features.length){el.innerHTML='<div style="font-size:12px;color:var(--mist);padding:6px 0;line-height:1.7">No features yet — capture a photo to detect.</div>';return;}
  el.innerHTML=S.features.map(function(f,i){return'<div class="fi"><div class="fdot" style="background:'+(f.color||'#64748b')+'"></div><div class="finfo"><div class="ftype">'+f.type+'</div><div class="fsub">'+(f.notes||'')+'</div></div><div class="fdim">'+f.w+'"×'+f.h+'"</div><button class="fdel" data-i="'+i+'">×</button></div>';}).join('');
  el.querySelectorAll('.fdel').forEach(function(btn){btn.addEventListener('click',function(){S.features.splice(parseInt(btn.dataset.i),1);renderFeats();recalc();});});
}

// ═══ MEDIA ═══
function renderMedia(){
  var grid=document.getElementById('mgrid');
  if(!S.captures.length){grid.innerHTML='<div class="mempty">No photos yet.<br>Tap 📷 to capture annotated frames.</div>';return;}
  grid.innerHTML=S.captures.map(function(c,i){return'<div class="mth" data-i="'+i+'"><img src="'+c.dataUrl+'" loading="lazy" alt="capture"><div class="mlbl">'+c.label+'</div>'+(c.dc>0?'<div class="mbadge">'+c.dc+' FEAT</div>':'')+'</div>';}).join('');
  grid.querySelectorAll('.mth').forEach(function(el){el.addEventListener('click',function(){document.getElementById('lbImg').src=S.captures[parseInt(el.dataset.i)].dataUrl;document.getElementById('lightbox').classList.add('on');});});
}

// ═══ MODAL ═══
function openModal(){document.getElementById('modalBg').classList.add('open');}
function closeModal(){document.getElementById('modalBg').classList.remove('open');}
function addManualFeature(){
  var type=document.getElementById('mType').value,w=parseFloat(document.getElementById('mW').value)||36,h=parseFloat(document.getElementById('mH').value)||80,notes=document.getElementById('mNotes').value;
  var color='#64748b',cat='MSC';if(type.indexOf('Door')>-1){color='#c53030';cat='DOR';}else if(type.indexOf('Window')>-1){color='#2563eb';cat='WIN';}
  S.features.push({type:type,w:w,h:h,notes:notes,color:color,cat:cat,src:'manual'});renderFeats();recalc();closeModal();toast('✅ Added: '+type);
  document.getElementById('mW').value='';document.getElementById('mH').value='';document.getElementById('mNotes').value='';
}

// ═══ TABS & MODE ═══
function showTab(name){['Measure','Media','Export'].forEach(function(n){document.getElementById('tab'+n).classList.toggle('on',n===name);document.getElementById('pane'+n).classList.toggle('on',n===name);});}
function setMode(m){S.mode=m;['INT','EXT','ROOF'].forEach(function(id){document.getElementById('mp'+id).classList.toggle('on',id===m);});document.getElementById('hudMode').textContent={INT:'INTERIOR SCAN',EXT:'EXTERIOR SCAN',ROOF:'ROOF SCAN'}[m];}

// ═══ XACTIMATE ═══
function buildXact(){
  var L=parseFloat(document.getElementById('iL').value)||0,W=parseFloat(document.getElementById('iW').value)||0,H=parseFloat(document.getElementById('iH').value)||8;
  var fSF=+(L*W).toFixed(2),gW=+(2*(L+W)*H).toFixed(2),openSF=S.features.reduce(function(a,f){return a+(f.w/12)*(f.h/12);},0);
  var nW=+Math.max(0,gW-openSF).toFixed(2),per=+(2*(L+W)).toFixed(2),room=document.getElementById('iRoom').value||'Room',li=[];
  if(fSF){li.push({cat:'FLR',desc:room+' — Floor',qty:fSF,unit:'SF'});li.push({cat:'CLG',desc:room+' — Ceiling',qty:fSF,unit:'SF'});}
  if(per)li.push({cat:'WLL',desc:room+' — Perimeter',qty:per,unit:'LF'});
  if(nW)li.push({cat:'WLL',desc:room+' — Net Wall',qty:nW,unit:'SF'});
  S.features.forEach(function(f){li.push({cat:f.cat||'MSC',desc:f.type,qty:1,unit:'EA',notes:f.notes||'',dim:f.w+'"×'+f.h+'"'});});
  return{xactimate_version:'28.0',format:'ESX/JSON',exported:new Date().toISOString(),source:'FieldMeasure Pro',
    job:{claim_number:document.getElementById('iClaim').value||'CLM-UNKNOWN',address:document.getElementById('iAddr').value||'Unknown',inspection_date:document.getElementById('iDate').value||new Date().toISOString().split('T')[0],scan_mode:S.mode,gps:S.gps||null,photo_count:S.captures.length},
    rooms:[{name:room,type:S.mode==='INT'?'Interior':S.mode==='EXT'?'Exterior':'Roof',dimensions:{length_ft:L,width_ft:W,height_ft:H,floor_sf:fSF,gross_wall_sf:gW,net_wall_sf:nW,perimeter_lf:per,opening_sf:+openSF.toFixed(2)},
      features:S.features.map(function(f){return{type:f.type,cat:f.cat,width_in:f.w,height_in:f.h,area_sf:+((f.w/12)*(f.h/12)).toFixed(2),source:f.src,confidence:f.conf||null,notes:f.notes||''};}),line_items:li}],
    photos:S.captures.map(function(c,i){return{index:i+1,ts:c.ts,mode:c.mode,label:c.label,features:c.dc};})};
}
function genXact(){
  S.xact=buildXact();var d=S.xact,r=d.rooms[0],dim=r.dimensions;
  var h='<span class="xs">// XACTIMATE FIELD DATA · '+d.exported.split('T')[0]+'</span>\n<span class="xs">// FieldMeasure Pro → ESX</span>\n\n';
  h+='<span class="xk">CLAIM:    </span><span class="xv">'+d.job.claim_number+'</span>\n';
  h+='<span class="xk">ADDRESS:  </span><span class="xv">'+d.job.address+'</span>\n';
  h+='<span class="xk">DATE:     </span><span class="xv">'+d.job.inspection_date+'</span>\n';
  h+='<span class="xk">GPS:      </span><span class="xv">'+(d.job.gps?d.job.gps.lat+', '+d.job.gps.lon:'N/A')+'</span>\n';
  h+='<span class="xk">PHOTOS:   </span><span class="xv">'+d.job.photo_count+'</span>\n\n';
  h+='<span class="xs">── '+r.name.toUpperCase()+' ──</span>\n';
  h+='<span class="xk">L×W×H:   </span><span class="xv">'+dim.length_ft+'×'+dim.width_ft+'×'+dim.height_ft+' ft</span>\n';
  h+='<span class="xk">FLOOR:   </span><span class="xv">'+dim.floor_sf+' SF</span>\n';
  h+='<span class="xk">WALL NET:</span><span class="xv"> '+dim.net_wall_sf+' SF</span>\n';
  h+='<span class="xk">PERIM:   </span><span class="xv">'+dim.perimeter_lf+' LF</span>\n\n';
  if(r.features.length){h+='<span class="xs">── FEATURES ──</span>\n';r.features.forEach(function(f){h+='<span class="xk">['+f.cat+']</span> '+pad(f.type,24)+'<span class="xv">'+f.width_in+'"×'+f.height_in+'"'+(f.source==='ai'?' 🤖':'')+'</span>\n';});h+='\n';}
  h+='<span class="xs">── LINE ITEMS ──</span>\n';r.line_items.forEach(function(li){h+='<span class="xk">['+li.cat+']</span> '+pad(li.desc||'',28)+'<span class="xv">'+li.qty+' '+li.unit+'</span>\n';});
  document.getElementById('xPrev').innerHTML=h;toast('✅ Xactimate data generated');showTab('Export');
}
function pad(s,n){while(s.length<n)s+=' ';return s;}
function dlJSON(){S.xact=buildXact();dl(new Blob([JSON.stringify(S.xact,null,2)],{type:'application/json'}),'fieldmeasure_'+S.xact.job.claim_number+'_'+Date.now()+'.json');toast('⬇ JSON downloaded');}
function dlCSV(){S.xact=buildXact();var rows=[['Category','Description','Quantity','Unit','Notes']];S.xact.rooms[0].line_items.forEach(function(li){rows.push([li.cat,li.desc||'',li.qty,li.unit,li.notes||'']);});dl(new Blob([rows.map(function(r){return r.map(function(c){return'"'+String(c).replace(/"/g,'""')+'"';}).join(',');}).join('\n')],{type:'text/csv'}),'fieldmeasure_'+S.xact.job.claim_number+'_'+Date.now()+'.csv');toast('⬇ CSV downloaded');}
function copyJSON(){S.xact=buildXact();navigator.clipboard.writeText(JSON.stringify(S.xact,null,2)).then(function(){toast('📋 Copied');}).catch(function(){toast('⚠ Clipboard blocked');});}
function dl(blob,name){var a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();document.body.removeChild(a);URL.revokeObjectURL(a.href);}

// ═══ TOAST ═══
var _tt;function toast(msg){var el=document.getElementById('toast');el.textContent=msg;el.classList.add('on');clearTimeout(_tt);_tt=setTimeout(function(){el.classList.remove('on');},2800);}

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
      
<div id="hdr">
<div className="brand"><div className="brand-icon">📐</div>Field<em>Measure</em> Pro</div>
<div className="chips">
<div className="chip"><div className="dot busy" id="aiDot"></div><span id="aiTxt">AI LOADING</span></div>
<div className="chip"><div className="dot" id="camDot"></div><span id="camTxt">CAM OFF</span></div>
</div>
</div>
<div id="layout">
<div id="camSide">
<div id="startScreen">
<div className="s-icon">📷</div>
<div className="s-title">FieldMeasure Pro</div>
<div className="s-sub">AI-powered room measurement &amp; feature detection for Xactimate</div>
<button id="startBtn">📷  START CAMERA</button>
<div className="s-note" id="sNote">Requires HTTPS &amp; camera permissions</div>
</div>
<div id="errScreen">
<div className="err-icon">⚠️</div>
<div className="err-title">Camera Error</div>
<div className="err-msg" id="errMsg">Camera access was denied.</div>
<div className="err-hint" id="errHint"></div>
<button id="retryBtn">Try Again</button>
</div>
<video autoplay="" id="video" muted="" playsinline=""></video>
<canvas id="detCanvas"></canvas>
<canvas id="cc"></canvas>
<div id="aiBanner">⏳ LOADING AI MODEL…</div>
<div className="hud" id="hudMode">INTERIOR SCAN</div>
<div className="hud" id="hudGPS">📍 LOCATING…</div>
<div className="hud" id="hudAI">SCANNING…</div>
<div className="brk tl"></div><div className="brk tr"></div><div className="brk bl"></div><div className="brk br"></div>
<div id="flash"></div>
<div id="detToggle"><div className="trk on" id="trk"><div className="knb"></div></div><span className="trklbl" id="trkLbl">DETECT ON</span></div>
<div id="camBar">
<div className="mpills"><button className="mp on" id="mpINT">INT</button><button className="mp" id="mpEXT">EXT</button><button className="mp" id="mpROOF">ROOF</button></div>
<button disabled="" id="capBtn">📷</button>
<button id="flipBtn">🔄</button>
</div>
</div>
<div id="panel">
<div className="tabs">
<button className="tabBtn on" id="tabMeasure">MEASURE</button>
<button className="tabBtn" id="tabMedia">MEDIA</button>
<button className="tabBtn" id="tabExport">EXPORT</button>
</div>
<div className="pane on" id="paneMeasure">
<div className="sec">
<div className="slbl">Job Info</div>
<div className="frow">
<div className="fg full"><label>Address</label><input id="iAddr" placeholder="123 Main St…" type="text"/></div>
<div className="fg"><label>Claim #</label><input id="iClaim" placeholder="CLM-XXXXXX" type="text"/></div>
<div className="fg"><label>Date</label><input id="iDate" type="date"/></div>
<div className="fg full"><label>Room / Area</label><input id="iRoom" placeholder="Living Room" type="text"/></div>
</div>
</div>
<div className="sec">
<div className="slbl">Room Dimensions</div>
<div className="frow">
<div className="fg"><label>Length (ft)</label><input id="iL" inputmode="decimal" placeholder="0.0" step="0.1" type="number"/></div>
<div className="fg"><label>Width (ft)</label><input id="iW" inputmode="decimal" placeholder="0.0" step="0.1" type="number"/></div>
<div className="fg"><label>Height (ft)</label><input id="iH" inputmode="decimal" step="0.1" type="number" value="8.0"/></div>
<div className="fg"><label>Perimeter LF</label><input id="iPerim" readonly="" type="number"/></div>
</div>
<div className="cstrip">
<div className="ccell"><div className="cv" id="sfF">—</div><div className="ck">FLOOR SF</div></div>
<div className="ccell"><div className="cv" id="sfW">—</div><div className="ck">WALL SF</div></div>
<div className="ccell"><div className="cv" id="sfC">—</div><div className="ck">CEIL SF</div></div>
</div>
</div>
<div className="sec" style={{flex: '1'}}>
<div className="slbl">Detected Features</div>
<div id="featList"><div style={{fontSize: '12px', color: 'var(--mist)', padding: '6px 0', lineHeight: '1.7'}}>No features yet — capture a photo to detect.</div></div>
<button className="addbtn" id="addFeatBtn">+ Add Feature Manually</button>
</div>
<div className="sec"><button className="xbtn sec" id="restartBtn" style={{width: '100%'}}>📷  Restart Camera</button></div>
</div>
<div className="pane" id="paneMedia"><div className="mgrid" id="mgrid"><div className="mempty">No photos yet.<br/>Tap 📷 to capture annotated frames.</div></div></div>
<div className="pane" id="paneExport">
<div className="expSec">
<div className="slbl">Xactimate Preview</div>
<div className="xprev" id="xPrev">Tap Generate to preview data.</div>
<button className="xbtn pri" id="btnGen">⚡ Generate Xactimate Data</button>
<button className="xbtn sec" id="btnJSON">⬇  Download JSON (ESX)</button>
<button className="xbtn sec" id="btnCSV">⬇  Download CSV</button>
<button className="xbtn sec" id="btnCopy">📋  Copy JSON</button>
<div className="notebanner"><strong>HOVER COMPATIBILITY</strong><br/>JSON maps to Xactimate ESX schema. Import via EagleView/Hover connector.</div>
</div>
</div>
</div>
</div>
<div id="modalBg">
<div id="modal">
<h3>Add Feature</h3>
<div><label>Feature Type</label>
<select id="mType">
<option>Door — Interior</option><option>Door — Exterior</option><option>Door — Sliding/Patio</option>
<option>Window — Single</option><option>Window — Double</option><option>Window — Bay</option><option>Window — Skylight</option>
<option>Closet Opening</option><option>Archway</option><option>Fireplace</option>
<option>Built-in Cabinet</option><option>Staircase Opening</option><option>HVAC Register</option><option>Custom</option>
</select>
</div>
<div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px'}}>
<div><label>Width (inches)</label><input id="mW" inputmode="decimal" placeholder="36" step="0.5" type="number"/></div>
<div><label>Height (inches)</label><input id="mH" inputmode="decimal" placeholder="80" step="0.5" type="number"/></div>
</div>
<div><label>Condition / Notes</label><input id="mNotes" placeholder="Good, damaged, etc." type="text"/></div>
<div className="mbtns"><button className="mbtn no" id="modalCancel">Cancel</button><button className="mbtn ok" id="modalOk">Add Feature</button></div>
</div>
</div>
<div id="lightbox"><div className="lb-close">✕</div><img alt="capture" id="lbImg" src=""/></div>
<div id="toast"></div>



    </>
  );
}
