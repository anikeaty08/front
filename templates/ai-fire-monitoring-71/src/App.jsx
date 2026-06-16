import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const simulateAlert = document.getElementById('simulateAlert');
    const criticalOverlay = document.getElementById('criticalOverlay');
    const closeOverlay = document.getElementById('closeOverlay');

    const webcamVideo = document.getElementById('webcamVideo');
    const videoPlaceholder = document.getElementById('videoPlaceholder');
    const cameraSelect = document.getElementById('cameraSelect');
    const connectCamera = document.getElementById('connectCamera');
    const disconnectCamera = document.getElementById('disconnectCamera');
    const reconnectCamera = document.getElementById('reconnectCamera');
    const refreshDevices = document.getElementById('refreshDevices');

    const cameraState = document.getElementById('cameraState');
    const permissionState = document.getElementById('permissionState');
    const permissionBadge = document.getElementById('permissionBadge');
    const activeDevice = document.getElementById('activeDevice');
    const activeBadge = document.getElementById('activeBadge');
    const liveDeviceBadge = document.getElementById('liveDeviceBadge');
    const liveStatusBadge = document.getElementById('liveStatusBadge');
    const liveDot = document.getElementById('liveDot');
    const liveLabel = document.getElementById('liveLabel');
    const liveClock = document.getElementById('liveClock');
    const systemStatus = document.getElementById('systemStatus');
    const systemDot = document.getElementById('systemDot');
    const permissionTextCard = document.getElementById('permissionTextCard');
    const streamTextCard = document.getElementById('streamTextCard');
    const deviceShortStatus = document.getElementById('deviceShortStatus');
    const deviceFullName = document.getElementById('deviceFullName');
    const miniPermission = document.getElementById('miniPermission');
    const miniDevice = document.getElementById('miniDevice');
    const miniStatus = document.getElementById('miniStatus');
    const mediaDevicesStatus = document.getElementById('mediaDevicesStatus');
    const gumStatus = document.getElementById('gumStatus');
    const deviceCount = document.getElementById('deviceCount');
    const logFeed = document.getElementById('logFeed');

    let currentStream = null;
    let currentDeviceId = '';
    let currentDeviceLabel = '';

    function getTimeString() {
      return new Date().toLocaleTimeString('vi-VN', { hour12: false });
    }

    function updateClock() {
      liveClock.textContent = getTimeString();
    }

    setInterval(updateClock, 1000);
    updateClock();

    function addLog(title, subtitle, description, tone = 'default') {
      const toneMap = {
        default: 'border-white/10 bg-slate-900/70 text-white',
        success: 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300',
        warn: 'border-amber-500/20 bg-amber-500/10 text-amber-300',
        danger: 'border-red-500/20 bg-red-500/10 text-red-300',
        info: 'border-sky-500/20 bg-sky-500/10 text-sky-300'
      };

      const wrapper = document.createElement('div');
      wrapper.className = `rounded-xl p-3 border ${toneMap[tone].split(' ')[0]} ${toneMap[tone].split(' ')[1]}`;

      wrapper.innerHTML = `
        <div class="flex items-start justify-between gap-3">
          <div>
            <div class="text-sm font-medium ${tone === 'default' ? 'text-white' : tone === 'success' ? 'text-emerald-300' : tone === 'warn' ? 'text-amber-300' : tone === 'danger' ? 'text-red-300' : 'text-sky-300'}">${title}</div>
            <div class="text-xs text-slate-300 mt-1">${subtitle}</div>
          </div>
          <span class="text-xs text-slate-400">${getTimeString()}</span>
        </div>
        <p class="mt-2 text-xs text-slate-300">${description}</p>
      `;
      logFeed.prepend(wrapper);
    }

    function setPermissionUI(state) {
      if (state === 'granted') {
        permissionState.textContent = 'Đã cấp quyền truy cập camera';
        permissionBadge.textContent = 'Đã cấp';
        permissionBadge.className = 'rounded-full bg-emerald-500/15 text-emerald-300 text-xs px-2 py-1';
        permissionTextCard.textContent = 'Đã cấp';
        miniPermission.textContent = 'Đã cấp quyền';
      } else if (state === 'denied') {
        permissionState.textContent = 'Quyền camera đã bị từ chối';
        permissionBadge.textContent = 'Từ chối';
        permissionBadge.className = 'rounded-full bg-red-500/15 text-red-300 text-xs px-2 py-1';
        permissionTextCard.textContent = 'Bị từ chối';
        miniPermission.textContent = 'Từ chối quyền';
      } else {
        permissionState.textContent = 'Chưa yêu cầu quyền truy cập camera';
        permissionBadge.textContent = 'Chờ';
        permissionBadge.className = 'rounded-full bg-slate-500/15 text-slate-300 text-xs px-2 py-1';
        permissionTextCard.textContent = 'Chưa cấp';
        miniPermission.textContent = 'Chưa cấp quyền';
      }
    }

    function setConnectedUI(connected, deviceName = '') {
      if (connected) {
        cameraState.textContent = 'Webcam đang hoạt động';
        activeDevice.textContent = deviceName || 'Webcam không rõ tên';
        activeBadge.textContent = 'Online';
        activeBadge.className = 'rounded-full bg-emerald-500/15 text-emerald-300 text-xs px-2 py-1';
        liveDeviceBadge.textContent = deviceName || 'Thiết bị hiện tại';
        liveStatusBadge.textContent = 'Live';
        liveStatusBadge.className = 'rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-xs text-emerald-300';
        liveDot.className = 'h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse';
        liveLabel.textContent = 'Đang phát trực tiếp từ webcam cá nhân';
        systemStatus.textContent = 'Webcam đã kết nối thành công';
        systemDot.className = 'h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse';
        streamTextCard.textContent = 'Đang hoạt động';
        deviceShortStatus.textContent = 'Online';
        deviceFullName.textContent = deviceName || 'Thiết bị đang được sử dụng';
        miniDevice.textContent = deviceName || 'Webcam hiện tại';
        miniStatus.textContent = 'Live';
      } else {
        cameraState.textContent = 'Chưa kết nối webcam';
        activeDevice.textContent = 'Chưa có camera nào được kết nối';
        activeBadge.textContent = 'Offline';
        activeBadge.className = 'rounded-full bg-slate-500/15 text-slate-300 text-xs px-2 py-1';
        liveDeviceBadge.textContent = 'Chưa chọn thiết bị';
        liveStatusBadge.textContent = 'Offline';
        liveStatusBadge.className = 'rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400';
        liveDot.className = 'h-2.5 w-2.5 rounded-full bg-slate-500';
        liveLabel.textContent = 'Chưa có tín hiệu video';
        systemStatus.textContent = 'Sẵn sàng kết nối webcam';
        systemDot.className = 'h-2.5 w-2.5 rounded-full bg-emerald-400';
        streamTextCard.textContent = 'Chưa hoạt động';
        deviceShortStatus.textContent = '--';
        deviceFullName.textContent = 'Tên webcam sẽ hiển thị tại đây sau khi kết nối thành công.';
        miniDevice.textContent = 'Chưa có thiết bị';
        miniStatus.textContent = 'Offline';
      }
    }

    function stopCurrentStream() {
      if (currentStream) {
        currentStream.getTracks().forEach(track => track.stop());
        currentStream = null;
      }
      webcamVideo.srcObject = null;
      webcamVideo.classList.add('hidden');
      videoPlaceholder.classList.remove('hidden');
      currentDeviceId = '';
      currentDeviceLabel = '';
      setConnectedUI(false);
    }

    async function loadDevices() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
        mediaDevicesStatus.textContent = 'Không hỗ trợ';
        gumStatus.textContent = 'Không khả dụng';
        addLog('Không hỗ trợ webcam', 'API trình duyệt', 'Trình duyệt hiện tại không hỗ trợ enumerateDevices hoặc mediaDevices.', 'danger');
        return;
      }

      mediaDevicesStatus.textContent = 'Sẵn sàng';
      gumStatus.textContent = 'Sẵn sàng';

      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');

        deviceCount.textContent = String(videoDevices.length);
        cameraSelect.innerHTML = '';

        if (!videoDevices.length) {
          const option = document.createElement('option');
          option.value = '';
          option.textContent = 'Không tìm thấy webcam';
          cameraSelect.appendChild(option);
          addLog('Không phát hiện camera', 'Thiết bị đầu vào video', 'Trình duyệt không tìm thấy webcam nào khả dụng trên thiết bị này.', 'warn');
          return;
        }

        videoDevices.forEach((device, index) => {
          const option = document.createElement('option');
          option.value = device.deviceId;
          option.textContent = device.label || `Camera ${index + 1}`;
          cameraSelect.appendChild(option);
        });

        addLog('Đã tải danh sách camera', 'Thiết bị đầu vào video', `Phát hiện ${videoDevices.length} webcam khả dụng trong trình duyệt.`, 'info');
      } catch (error) {
        addLog('Lỗi tải thiết bị', 'enumerateDevices()', error.message || 'Không thể đọc danh sách camera.', 'danger');
      }
    }

    async function connectSelectedCamera() {
      if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        addLog('Không thể kết nối webcam', 'getUserMedia()', 'Trình duyệt hiện tại không hỗ trợ truy cập camera.', 'danger');
        return;
      }

      try {
        stopCurrentStream();

        const selectedId = cameraSelect.value;
        const constraints = selectedId
          ? { video: { deviceId: { exact: selectedId } }, audio: false }
          : { video: true, audio: false };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        currentStream = stream;
        webcamVideo.srcObject = stream;
        webcamVideo.classList.remove('hidden');
        videoPlaceholder.classList.add('hidden');

        const track = stream.getVideoTracks()[0];
        const settings = track.getSettings ? track.getSettings() : {};
        currentDeviceId = settings.deviceId || selectedId || '';
        currentDeviceLabel = track.label || cameraSelect.options[cameraSelect.selectedIndex]?.text || 'Webcam cá nhân';

        setPermissionUI('granted');
        setConnectedUI(true, currentDeviceLabel);

        addLog('Kết nối webcam thành công', currentDeviceLabel, 'Luồng video trực tiếp đã được mở và hiển thị ở khung trung tâm.', 'success');
        await loadDevices();
      } catch (error) {
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
          setPermissionUI('denied');
          addLog('Quyền camera bị từ chối', 'Truy cập webcam', 'Bạn cần cho phép quyền camera trong trình duyệt để sử dụng tính năng này.', 'danger');
        } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
          addLog('Không tìm thấy webcam', 'Thiết bị đầu vào video', 'Không có webcam phù hợp với lựa chọn hiện tại.', 'warn');
        } else {
          addLog('Lỗi kết nối webcam', 'getUserMedia()', error.message || 'Không thể mở webcam.', 'danger');
        }
        setConnectedUI(false);
      }
    }

    simulateAlert.addEventListener('click', () => {
      criticalOverlay.classList.remove('hidden');
      criticalOverlay.classList.add('flex');
      document.body.classList.add('overflow-hidden');
      if (navigator.vibrate) {
        navigator.vibrate([200, 120, 200, 120, 300]);
      }
    });

    closeOverlay.addEventListener('click', () => {
      criticalOverlay.classList.add('hidden');
      criticalOverlay.classList.remove('flex');
      document.body.classList.remove('overflow-hidden');
    });

    connectCamera.addEventListener('click', connectSelectedCamera);

    reconnectCamera.addEventListener('click', connectSelectedCamera);

    disconnectCamera.addEventListener('click', () => {
      stopCurrentStream();
      addLog('Đã ngắt webcam', 'Luồng video đã dừng', 'Thiết bị camera đã được giải phóng khỏi trình duyệt.', 'warn');
    });

    refreshDevices.addEventListener('click', loadDevices);

    if (navigator.mediaDevices && navigator.mediaDevices.addEventListener) {
      navigator.mediaDevices.addEventListener('devicechange', async () => {
        await loadDevices();
        addLog('Danh sách thiết bị thay đổi', 'devicechange', 'Trình duyệt phát hiện sự thay đổi trong thiết bị webcam.', 'info');
      });
    }

    setPermissionUI('prompt');
    setConnectedUI(false);
    loadDevices();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col">
<header className="border-b border-white/10 bg-slate-950/90 backdrop-blur">
<div className="px-4 sm:px-6 lg:px-8 py-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
<div className="flex items-center gap-4">
<div className="h-11 w-11 rounded-2xl bg-gradient-to-br from-red-500/20 via-orange-400/10 to-cyan-400/10 border border-white/10 flex items-center justify-center shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
<span className="text-sm font-medium tracking-tight text-white">FC</span>
</div>
<div>
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">Fire AI Command Center</h1>
<p className="text-sm text-slate-400">Giám sát báo cháy tích hợp AI camera · Phân tích thời gian thực · Điều phối ứng phó</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-3">
<div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-emerald-400" id="systemDot"></span>
<span className="text-xs text-emerald-300" id="systemStatus">Sẵn sàng kết nối webcam</span>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 flex items-center gap-2">
<iconify-icon height="18" icon="solar:videocamera-linear" style={{color: '#94a3b8'}} width="18"></iconify-icon>
<span className="text-xs text-slate-300" id="cameraState">Chưa kết nối webcam</span>
</div>
<div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 flex items-center gap-2">
<iconify-icon height="18" icon="solar:shield-check-linear" style={{color: '#38bdf8'}} width="18"></iconify-icon>
<span className="text-xs text-slate-300">Trình duyệt sẽ hỏi quyền camera</span>
</div>
<button className="rounded-xl bg-red-500/90 hover:bg-red-500 text-white text-xs font-medium px-4 py-2.5 transition" id="simulateAlert">Mô phỏng cháy Mức 2</button>
</div>
</div>
</header>
<main className="flex-1 px-4 sm:px-6 lg:px-8 py-4">
<div className="grid grid-cols-1 xl:grid-cols-12 gap-4">
<aside className="xl:col-span-2 space-y-4">
<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div>
<h2 className="text-base font-medium text-white">Kết nối camera</h2>
<p className="text-xs text-slate-400">Thiết bị webcam cá nhân</p>
</div>
<div className="rounded-lg bg-white/5 border border-white/10 px-2 py-1 text-xs text-slate-300">Local</div>
</div>
<div className="p-3 space-y-3">
<div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
<label className="text-xs text-slate-400" htmlFor="cameraSelect">Thiết bị camera</label>
<select className="mt-2 w-full rounded-xl border border-white/10 bg-slate-900/80 text-sm text-white px-3 py-3 outline-none" id="cameraSelect">
<option value="">Đang tải danh sách camera...</option>
</select>
</div>
<button className="w-full rounded-xl border border-sky-500/20 bg-sky-500/10 p-3 text-left hover:bg-sky-500/15 transition" id="connectCamera">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-sm font-medium text-sky-300">Kết nối webcam</div>
<div className="text-xs text-slate-400 mt-1">Mở luồng video trực tiếp từ thiết bị của bạn</div>
</div>
<iconify-icon height="18" icon="solar:play-linear" style={{color: '#7dd3fc'}} width="18"></iconify-icon>
</div>
</button>
<button className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-left hover:bg-white/[0.06] transition" id="disconnectCamera">
<div className="flex items-center justify-between gap-3">
<div>
<div className="text-sm font-medium text-white">Ngắt webcam</div>
<div className="text-xs text-slate-400 mt-1">Dừng camera và giải phóng thiết bị</div>
</div>
<iconify-icon height="18" icon="solar:stop-linear" style={{color: '#cbd5e1'}} width="18"></iconify-icon>
</div>
</button>
<div className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-left">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-medium text-white">Trạng thái quyền</div>
<div className="text-xs text-slate-400 mt-1" id="permissionState">Chưa yêu cầu quyền truy cập camera</div>
</div>
<span className="rounded-full bg-slate-500/15 text-slate-300 text-xs px-2 py-1" id="permissionBadge">Chờ</span>
</div>
</div>
<div className="w-full rounded-xl border border-white/10 bg-white/[0.03] p-3 text-left">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-medium text-white">Thiết bị đang dùng</div>
<div className="text-xs text-slate-400 mt-1" id="activeDevice">Chưa có camera nào được kết nối</div>
</div>
<span className="rounded-full bg-slate-500/15 text-slate-300 text-xs px-2 py-1" id="activeBadge">Offline</span>
</div>
</div>
</div>
</section>
<section className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center justify-between">
<div>
<h3 className="text-base font-medium text-white">Hướng dẫn nhanh</h3>
<p className="text-xs text-slate-400">Kết nối webcam cá nhân</p>
</div>
<iconify-icon height="18" icon="solar:question-circle-linear" style={{color: '#38bdf8'}} width="18"></iconify-icon>
</div>
<div className="mt-4 space-y-3">
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
<div className="text-xs text-slate-400">Bước 1</div>
<div className="mt-1 text-sm text-white">Chọn đúng webcam trong danh sách</div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
<div className="text-xs text-slate-400">Bước 2</div>
<div className="mt-1 text-sm text-white">Bấm “Kết nối webcam” và cho phép quyền camera</div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
<div className="text-xs text-slate-400">Bước 3</div>
<div className="mt-1 text-sm text-white">Xem trực tiếp video ở khung trung tâm</div>
</div>
</div>
</section>
</aside>
<section className="xl:col-span-7 space-y-4">
<div className="grid grid-cols-1 2xl:grid-cols-3 gap-4">
<div className="2xl:col-span-2 rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
<div className="p-4 border-b border-white/10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
<div>
<h2 className="text-base font-medium text-white">Live View · Webcam cá nhân</h2>
<p className="text-xs text-slate-400">Kết nối trực tiếp từ trình duyệt để xem camera thật của bạn</p>
</div>
<div className="flex items-center gap-2">
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300" id="liveDeviceBadge">Chưa chọn thiết bị</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-400" id="liveStatusBadge">Offline</div>
</div>
</div>
<div className="p-4">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-slate-900 aspect-video">
<video autoplay="" className="absolute inset-0 h-full w-full object-cover hidden" id="webcamVideo" muted="" playsinline=""></video>
<div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-slate-900 to-black flex items-center justify-center" id="videoPlaceholder">
<div className="text-center px-6">
<div className="mx-auto h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon height="28" icon="solar:videocamera-add-linear" style={{color: '#94a3b8'}} width="28"></iconify-icon>
</div>
<h3 className="mt-4 text-lg font-medium text-white tracking-tight">Chưa có luồng webcam</h3>
<p className="mt-2 text-sm text-slate-400">Chọn camera ở cột bên trái rồi kết nối để hiển thị video trực tiếp tại đây.</p>
</div>
</div>
<div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
<div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur px-3 py-2 flex items-center gap-2">
<span className="h-2.5 w-2.5 rounded-full bg-slate-500" id="liveDot"></span>
<span className="text-xs text-slate-100" id="liveLabel">Chưa có tín hiệu video</span>
</div>
<div className="rounded-xl border border-white/10 bg-black/40 backdrop-blur px-3 py-2 text-xs text-slate-200" id="liveClock">
                      --:--:--
                    </div>
</div>
</div>
</div>
</div>
<div className="rounded-2xl border border-white/10 bg-white/5">
<div className="p-4 border-b border-white/10">
<h3 className="text-base font-medium text-white">Thông tin kết nối</h3>
<p className="text-xs text-slate-400">Tình trạng webcam hiện tại</p>
</div>
<div className="p-4 space-y-4">
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Nguồn video</span>
<span className="text-xs text-sky-300" id="sourceType">Trình duyệt</span>
</div>
<div className="mt-3 h-28 rounded-xl bg-gradient-to-t from-sky-500/10 to-transparent border border-white/5 relative overflow-hidden flex items-center justify-center">
<iconify-icon height="34" icon="solar:monitor-camera-linear" style={{color: '#7dd3fc'}} width="34"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-3">
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
<div className="text-xs text-slate-400">Quyền camera</div>
<div className="mt-2 text-sm font-medium text-white" id="permissionTextCard">Chưa cấp</div>
<div className="mt-2 flex items-center gap-2 text-xs text-amber-300">
<iconify-icon height="16" icon="solar:shield-warning-linear" style={{color: '#fbbf24'}} width="16"></iconify-icon>
                      Cần xác nhận
                    </div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
<div className="text-xs text-slate-400">Luồng video</div>
<div className="mt-2 text-sm font-medium text-white" id="streamTextCard">Chưa hoạt động</div>
<div className="mt-2 flex items-center gap-2 text-xs text-slate-300">
<iconify-icon height="16" icon="solar:play-stream-linear" style={{color: '#cbd5e1'}} width="16"></iconify-icon>
                      Chờ kết nối
                    </div>
</div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
<div className="flex items-center justify-between">
<span className="text-xs text-slate-400">Thiết bị đang phát</span>
<span className="text-xs text-white" id="deviceShortStatus">--</span>
</div>
<p className="mt-3 text-xs text-slate-400" id="deviceFullName">Tên webcam sẽ hiển thị tại đây sau khi kết nối thành công.</p>
</div>
</div>
</div>
</div>
<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="p-4 border-b border-white/10 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
<div>
<h3 className="text-base font-medium text-white">Khung xem nhanh</h3>
<p className="text-xs text-slate-400">Giữ nguyên bố cục nhưng dùng nội dung từ webcam cá nhân</p>
</div>
<div className="flex gap-2">
<div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-slate-300">Personal Cam</div>
<div className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-slate-500">Preview</div>
</div>
</div>
<div className="p-4 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
<div className="rounded-xl border border-sky-500/20 bg-slate-900 aspect-video p-3 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent"></div>
<div className="text-xs text-white">WEBCAM</div>
<div className="mt-1 text-xs text-sky-300">Luồng trực tiếp của bạn</div>
<div className="absolute bottom-3 left-3 rounded-md bg-sky-500/90 px-2 py-1 text-xs text-white">Live</div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-900 aspect-video p-3">
<div className="text-xs text-white">PERMISSION</div>
<div className="mt-1 text-xs text-amber-300" id="miniPermission">Chưa cấp quyền</div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-900 aspect-video p-3">
<div className="text-xs text-white">DEVICE</div>
<div className="mt-1 text-xs text-emerald-300" id="miniDevice">Chưa có thiết bị</div>
</div>
<div className="rounded-xl border border-white/10 bg-slate-900 aspect-video p-3">
<div className="text-xs text-white">STATUS</div>
<div className="mt-1 text-xs text-slate-300" id="miniStatus">Offline</div>
</div>
</div>
</section>
<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="p-4 border-b border-white/10">
<h3 className="text-base font-medium text-white">Vùng hiển thị tích hợp</h3>
<p className="text-xs text-slate-400">Bạn có thể dùng khung này để gắn thêm xử lý AI hoặc phát hiện cháy về sau</p>
</div>
<div className="p-4">
<div className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 overflow-hidden">
<div className="relative h-[26rem] rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-black border border-white/5 flex items-center justify-center">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255,255,255,0.05) 0.0625rem, transparent 0.0625rem), linear-gradient(90deg, rgba(255,255,255,0.05) 0.0625rem, transparent 0.0625rem)', backgroundSize: '2rem 2rem'}}></div>
<div className="relative text-center px-6">
<div className="mx-auto h-16 w-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon height="28" icon="solar:widget-2-linear" style={{color: '#94a3b8'}} width="28"></iconify-icon>
</div>
<div className="mt-4 text-lg font-medium tracking-tight text-white">Sẵn sàng tích hợp webcam thật</div>
<div className="mt-2 text-sm text-slate-400">Phần này được giữ lại để bạn tiếp tục gắn phân tích AI, snapshot, phát hiện khói hoặc cảnh báo tự động.</div>
</div>
<div className="absolute bottom-4 left-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur px-3 py-2 text-xs text-slate-200">
                    Thiết kế hiện ưu tiên kết nối webcam thật thay cho camera mô phỏng
                  </div>
</div>
</div>
</div>
</section>
</section>
<aside className="xl:col-span-3 space-y-4">
<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="p-4 border-b border-white/10">
<h2 className="text-base font-medium text-white">Real-time Connection Log</h2>
<p className="text-xs text-slate-400">Feed trạng thái webcam thời gian thực</p>
</div>
<div className="p-3 space-y-3 max-h-[34rem] overflow-auto" id="logFeed">
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-sm font-medium text-white">Hệ thống khởi tạo</div>
<div className="text-xs text-slate-400 mt-1">Trình duyệt đã sẵn sàng</div>
</div>
<span className="text-xs text-slate-400">--:--:--</span>
</div>
<p className="mt-2 text-xs text-slate-400">Bạn có thể chọn webcam cá nhân và kết nối trực tiếp ngay trên giao diện này.</p>
</div>
</div>
</section>
<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="p-4 border-b border-white/10">
<h3 className="text-base font-medium text-white">Điều khiển nhanh</h3>
<p className="text-xs text-slate-400">Tác vụ webcam trực tiếp</p>
</div>
<div className="p-4 space-y-3">
<button className="w-full rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-3 flex items-center justify-between" id="refreshDevices">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="solar:refresh-linear" style={{color: '#6ee7b7'}} width="18"></iconify-icon>
<span className="text-sm text-white">Tải lại danh sách camera</span>
</div>
<span className="text-xs text-emerald-300">Refresh</span>
</button>
<button className="w-full rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 flex items-center justify-between" id="reconnectCamera">
<div className="flex items-center gap-3">
<iconify-icon height="18" icon="solar:restart-linear" style={{color: '#fbbf24'}} width="18"></iconify-icon>
<span className="text-sm text-white">Kết nối lại webcam</span>
</div>
<span className="text-xs text-amber-300">Retry</span>
</button>
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
<div className="flex items-center justify-between">
<span className="text-sm text-white">Môi trường</span>
<span className="text-xs text-slate-300">Secure Context</span>
</div>
<p className="mt-1 text-xs text-slate-400">Một số trình duyệt yêu cầu HTTPS hoặc localhost để truy cập webcam.</p>
</div>
</div>
</section>
<section className="rounded-2xl border border-white/10 bg-white/5">
<div className="p-4 border-b border-white/10">
<h3 className="text-base font-medium text-white">Trạng thái hệ thống</h3>
<p className="text-xs text-slate-400">Thông tin tích hợp camera</p>
</div>
<div className="p-4 space-y-3">
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
<div className="flex items-center justify-between">
<span className="text-sm text-white">navigator.mediaDevices</span>
<span className="text-xs text-emerald-300" id="mediaDevicesStatus">Kiểm tra...</span>
</div>
<p className="mt-1 text-xs text-slate-400">API dùng để truy cập webcam từ trình duyệt.</p>
</div>
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
<div className="flex items-center justify-between">
<span className="text-sm text-white">getUserMedia()</span>
<span className="text-xs text-slate-300" id="gumStatus">Sẵn sàng</span>
</div>
<p className="mt-1 text-xs text-slate-400">Dùng để mở luồng video thật từ thiết bị người dùng.</p>
</div>
<div className="rounded-xl border border-white/10 bg-slate-900/70 p-3">
<div className="flex items-center justify-between">
<span className="text-sm text-white">Thiết bị phát hiện</span>
<span className="text-xs text-slate-300" id="deviceCount">0</span>
</div>
<p className="mt-1 text-xs text-slate-400">Số lượng camera được trình duyệt liệt kê.</p>
</div>
</div>
</section>
</aside>
</div>
</main>
</div>
<div className="fixed inset-0 hidden items-center justify-center z-50 bg-red-600/15 backdrop-blur-[0.1rem]" id="criticalOverlay">
<div className="absolute inset-0 animate-pulse bg-red-500/10"></div>
<div className="relative mx-4 w-full max-w-2xl rounded-3xl border border-red-400/30 bg-slate-950/95 p-6 sm:p-8 shadow-2xl">
<div className="flex items-start gap-4">
<div className="h-14 w-14 rounded-2xl bg-red-500/15 border border-red-400/20 flex items-center justify-center">
<iconify-icon height="28" icon="solar:danger-triangle-linear" style={{color: '#f87171'}} width="28"></iconify-icon>
</div>
<div className="flex-1">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white">CẢNH BÁO CHÁY MỨC 2</h2>
<p className="mt-2 text-sm text-slate-300">Phần cảnh báo mô phỏng vẫn được giữ lại. Bạn có thể dùng cùng lúc với webcam cá nhân để thử nghiệm giao diện.</p>
</div>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
<div className="text-xs text-slate-400">Nguồn</div>
<div className="mt-1 text-sm text-white">Webcam cá nhân</div>
</div>
<div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
<div className="text-xs text-slate-400">Cảnh báo</div>
<div className="mt-1 text-sm text-white">Mô phỏng thủ công</div>
</div>
<div className="rounded-xl border border-red-500/20 bg-red-500/10 p-4">
<div className="text-xs text-slate-400">Trạng thái</div>
<div className="mt-1 text-sm text-white">Sẵn sàng thử nghiệm</div>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-3">
<button className="rounded-xl bg-white text-slate-950 text-sm font-medium px-4 py-3" id="closeOverlay">Xác nhận đã thấy</button>
<button className="rounded-xl border border-white/10 bg-white/5 text-white text-sm px-4 py-3">Đóng</button>
</div>
</div>
</div>


    </>
  );
}
