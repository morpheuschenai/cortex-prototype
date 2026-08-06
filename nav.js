// Shared nav injector
(function () {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  const mainFlow = [
    { num: '01', file: '01-landing.html', label: '輸入品牌網址' },
    { num: '02', file: '02-media-fit.html', label: 'Media Fit Preview' },
    { num: '03', file: '03-chat.html', label: '5 題訪談' },
    { num: '04', file: '04-full-analysis.html', label: 'Cortex 推薦組合' },
    { num: '05', file: '05-brand-review.html', label: '品牌審核 AI Answer' },
    { num: '08', file: '08-timeline.html', label: 'Mlytics 合規審核' },
    { num: '09', file: '09-parallel-actions.html', label: '等待期任務' },
    { num: '10', file: '10-forecast.html', label: '成效預估' },
    { num: '11', file: '11-first-mover.html', label: 'First-mover 品牌權益' }
  ];

  const exceptions = [
    { num: '06', file: '06-confidence.html', label: 'AI 判斷不確定' },
    { num: '07', file: '07-correction.html', label: '修正後反饋' },
    { num: '12', file: '12-zero-match.html', label: '零匹配 · Waitlist' }
  ];

  const isIndex = currentPath === 'index.html' || currentPath === '';
  const backHref = isIndex ? null : '../index.html';
  const linkPrefix = isIndex ? 'screens/' : '';

  const renderLink = (item) => {
    const active = currentPath === item.file ? ' active' : '';
    return `<a href="${linkPrefix}${item.file}" class="nav-drawer-link${active}"><span class="num">${item.num}</span>${item.label}</a>`;
  };

  const drawerHtml = `
    <button class="nav-trigger" id="navTrigger" aria-label="開啟目錄">
      <span class="nav-trigger-icon"><span></span><span></span><span></span></span>
    </button>
    <div class="nav-drawer-scrim" id="navScrim"></div>
    <aside class="nav-drawer" id="navDrawer" aria-label="目錄">
      <button class="nav-drawer-close" id="navClose" aria-label="關閉">×</button>
      ${backHref ? `<a href="${backHref}" class="nav-drawer-link" style="margin-bottom:16px"><span class="num">←</span>回目錄</a>` : ''}
      <div class="nav-drawer-section">
        <div class="nav-drawer-section-title">主線流程</div>
        ${mainFlow.map(renderLink).join('')}
      </div>
      <div class="nav-drawer-section">
        <div class="nav-drawer-section-title">Exception 支線</div>
        ${exceptions.map(renderLink).join('')}
      </div>
    </aside>
  `;

  document.body.insertAdjacentHTML('afterbegin', drawerHtml);

  const trigger = document.getElementById('navTrigger');
  const drawer = document.getElementById('navDrawer');
  const scrim = document.getElementById('navScrim');
  const close = document.getElementById('navClose');
  const openDrawer = () => {
    drawer.classList.add('open');
    scrim.classList.add('open');
  };
  const closeDrawer = () => {
    drawer.classList.remove('open');
    scrim.classList.remove('open');
  };
  trigger.addEventListener('click', openDrawer);
  close.addEventListener('click', closeDrawer);
  scrim.addEventListener('click', closeDrawer);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeDrawer();
  });
})();
