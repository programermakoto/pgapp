// API
{ 
  function callback(entries,obs){
    entries.forEach(entry => {
      if(!entry.isIntersecting){
        return;
      }
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  }


  const observer = new IntersectionObserver(callback, {
    threshold:1,
  });


  document.querySelectorAll(".animate").forEach(el => {
  observer.observe(el);
  });
}



// カルーセル
{
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');
  const ul = document.querySelector('ol');
  const slides = ul.children;
  const slideWidth = slides[0].getBoundingClientRect().width;
  let currentIndex = 0;
  function updateButtons(){
    prev.classList.remove("hidden");
    next.classList.remove("hidden");
    if(currentIndex===0){
      prev.classList.add("hidden");
    }
    if(currentIndex===slides.length-1){
      next.classList.add("hidden");
    }

  }
  function moveSlides(){
    updateButtons();
    ul.style.transform = `translateX(${-1 * slideWidth * currentIndex}px)`;
  }

  const button = document.createElement("button");

  updateButtons();
  next.addEventListener('click', () => {
    currentIndex++;
    moveSlides();
  });
  prev.addEventListener('click', () => {
    currentIndex--;
    moveSlides();
  });
  
}
