const page = document.body.dataset.page;
document.querySelectorAll('.nav span').forEach((s,i)=>{if(i+1===Number(page))s.classList.add('active')});

document.querySelectorAll('[data-next]').forEach(btn=>{
  btn.addEventListener('click',()=>{ location.href=btn.dataset.next; });
});

/* Video reveal: sources are attached only after the user chooses a card.
   This prevents all videos from competing for bandwidth on page load. */
document.querySelectorAll('.video-card').forEach(card=>{
  const cover=card.querySelector('.video-cover');
  const video=card.querySelector('video');
  if(!cover||!video)return;
  cover.addEventListener('click',()=>{
    if(!video.src){
      video.src=video.dataset.src;
      video.load();
    }
    card.classList.add('revealed');
    const orb=cover.querySelector('.orb');
    const title=cover.querySelector('strong');
    if(orb)orb.textContent='✨';
    if(title)title.textContent='Revealing…';
    setTimeout(()=>{
      video.play().catch(()=>{});
    },450);
  });
});
