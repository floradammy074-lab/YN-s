(function(){
 var c=document.getElementById('copy'),ic=c.innerHTML;
 c.addEventListener('click',function(){
  try{navigator.clipboard.writeText('2678900085')}catch(e){}
  c.querySelector('svg').outerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg>';
  setTimeout(function(){c.innerHTML=ic},1200);
 });
 var b=document.querySelectorAll('#nav button');
 b.forEach(function(x){x.addEventListener('click',function(){b.forEach(function(y){y.classList.remove('on')});x.classList.add('on')})});
})();
