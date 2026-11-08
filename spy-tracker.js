(function(){
  if(location.search.includes('admin=david')){localStorage.setItem('tecno_spy_admin_excluded','true');}
  if(localStorage.getItem('tecno_spy_admin_excluded')==='true') return;
  const siteId=window.SPY_SITE_ID||'shiffa-dubai-video-ads';
  const vid=localStorage.getItem('spy_vid')||('v_'+Math.random().toString(36).slice(2)+Date.now().toString(36));
  localStorage.setItem('spy_vid',vid);
})();
