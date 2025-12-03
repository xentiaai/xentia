(function(){ 
  if(window.XENTIA_WIDGET) return;
  window.XENTIA_WIDGET = true;
  const w = document.createElement('div'); w.id='xentia-widget-root'; w.style.position='fixed'; w.style.right='20px'; w.style.bottom='20px'; document.body.appendChild(w);
  const btn = document.createElement('button'); btn.innerText='Chat'; btn.style.padding='10px 14px'; btn.style.borderRadius='10px'; btn.onclick = ()=> {
    const iframe = document.getElementById('xentia-iframe') || document.createElement('iframe');
    iframe.id='xentia-iframe'; iframe.src=window.XENTIA_IFRAME_URL || 'https://your-xentia-host.com/embed'; iframe.style.width='380px'; iframe.style.height='520px'; iframe.style.border='none'; iframe.style.borderRadius='12px';
    w.appendChild(iframe);
  };
  w.appendChild(btn);
})();
