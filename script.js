const menuToggle=document.getElementById('menuToggle');const nav=document.getElementById('nav');const themeToggle=document.getElementById('themeToggle');
menuToggle?.addEventListener('click',()=>nav.classList.toggle('open'));
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const saved=localStorage.getItem('theme');if(saved==='dark'){document.body.classList.add('dark');themeToggle.textContent='☀'}
themeToggle?.addEventListener('click',()=>{document.body.classList.toggle('dark');const dark=document.body.classList.contains('dark');themeToggle.textContent=dark?'☀':'☾';localStorage.setItem('theme',dark?'dark':'light')});
