(function(){var f=document.getElementById('cf');if(!f)return;var st=document.getElementById('st');var b=f.querySelector('button');
f.addEventListener('submit',function(e){e.preventDefault();b.disabled=true;st.textContent='Sending...';
fetch(f.action,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)}).then(function(r){return r.json()}).then(function(j){
if(j&&j.success){st.textContent='Thank you! We got your message and will reply soon.';f.reset();}else{throw new Error('fail');}
}).catch(function(){st.textContent='Sorry, that did not send. Please email us at namibcodex@gmail.com.';}).then(function(){b.disabled=false;});});
})();

(function(){
var URLS={'Velvet Root Store':'https://velvet-root.netlify.app/','TechFix':'https://techfix-83gd.onrender.com/index.html','NamibCodex':'https://namib-codex.netlify.app/'};
var cards=[].slice.call(document.querySelectorAll('.proj'));
var d=document.getElementById('pd');
function openCard(c){
var title=c.querySelector('h3').textContent;
d.querySelector('#pdt').textContent=title;
d.querySelector('#pdd').textContent=c.querySelector('p').textContent;
d.querySelector('#pdth').style.setProperty('--c',c.querySelector('.thumb').style.getPropertyValue('--c'));
d.querySelector('#pdg').innerHTML=c.querySelector('.tags').innerHTML;
var l=d.querySelector('#pdl');l.innerHTML='';
var u=URLS[title];
if(u){var a=document.createElement('a');a.className='btn pri';a.href=u;a.target='_blank';a.rel='noopener';a.textContent='Visit site';l.appendChild(a);}
else{var s=document.createElement('span');s.className='soon';s.textContent=title==='NamibCodex'?"You're on this site right now":'Live link coming soon';l.appendChild(s);}
var x=document.createElement('button');x.type='button';x.className='btn';x.textContent='Close';x.addEventListener('click',function(){d.close();});l.appendChild(x);
if(d.showModal)d.showModal();
}
cards.forEach(function(c){
var t=c.querySelector('.tags').textContent;
c.dataset.cat=/Web app/.test(t)?'app':/E-commerce/.test(t)?'shop':'site';
c.tabIndex=0;c.setAttribute('role','button');
c.addEventListener('click',function(){openCard(c);});
c.addEventListener('keydown',function(e){if(e.key==='Enter'||e.key===' '){e.preventDefault();openCard(c);}});
});
var fb=[].slice.call(document.querySelectorAll('.filters button'));
fb.forEach(function(b){b.addEventListener('click',function(){
fb.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false');});
cards.forEach(function(c){c.hidden=!(b.dataset.f==='all'||c.dataset.cat===b.dataset.f);});
});});
d.addEventListener('click',function(e){if(e.target===d)d.close();});
})();