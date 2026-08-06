// Shared nav injector
(function () {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Main flow with optional embedded exception under each screen
  const mainFlow = [
    { num: '01', file: '01-landing.html', label: '輸入品牌網址' },
    { num: '02', file: '02-media-fit.html', label: 'Media Fit Preview',
      exceptions: [
        { num: '06', file: '06-confidence.html', label: 'AI 判斷不確定' },
        { num: '12', file: '12-zero-match.html', label: '零匹配 · Waitlist' }
      ]
    },
    { num: '03', file: '03-chat.html', label: '5 題訪談' },
    { num: '04', file: '04-full-analysis.html', label: 'Cortex 推薦組合' },
    { num: '05', file: '05-brand-review.html', label: '品牌審核 AI Answer' },
    { num: '08', file: '08-timeline.html', label: 'Mlytics 合規審核' },
    { num: '09', file: '09-parallel-actions.html', label: '等待期任務' },
    { num: '10', file: '10-forecast.html', label: '成效預估' },
    { num: '11', file: '11-first-mover.html', label: 'First-mover 品牌權益' }
  ];

  // Standalone exception (07 = correction, follows 06)
  const orphanExceptions = [
    { num: '07', file: '07-correction.html', label: '修正後反饋 (承接 06)', parent: '06' }
  ];

  const isIndex = currentPath === 'index.html' || currentPath === '';
  const backHref = isIndex ? null : '../index.html';
  const linkPrefix = isIndex ? 'screens/' : '';

  const renderLink = (item, isException = false) => {
    const active = currentPath === item.file ? ' active' : '';
    const excClass = isException ? ' nav-drawer-link--exception' : '';
    const excIcon = isException ? '<span class="nav-drawer-exc-icon">↳</span>' : '';
    return `<a href="${linkPrefix}${item.file}" class="nav-drawer-link${excClass}${active}">${excIcon}<span class="num">${item.num}</span>${item.label}</a>`;
  };

  const renderMainWithExceptions = (item) => {
    let html = renderLink(item);
    if (item.exceptions && item.exceptions.length) {
      html += '<div class="nav-drawer-exc-group">';
      item.exceptions.forEach(exc => {
        html += renderLink(exc, true);
      });
      html += '</div>';
    }
    // If any embedded exception is active, mark parent with dot
    if (item.exceptions && item.exceptions.some(e => currentPath === e.file)) {
      // Parent shows current active-exception badge (visual only handled via CSS)
    }
    return html;
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
        ${mainFlow.map(renderMainWithExceptions).join('')}
      </div>
      ${orphanExceptions.length ? `
      <div class="nav-drawer-section">
        <div class="nav-drawer-section-title">其他支線</div>
        ${orphanExceptions.map(item => renderLink(item, true)).join('')}
      </div>
      ` : ''}
      <div class="nav-drawer-legend">
        <span class="nav-drawer-legend-icon">↳</span>
        <span>支線頁面 · 主線的例外情境</span>
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
