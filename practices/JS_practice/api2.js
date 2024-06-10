"use strict";
{
  function callback(entries) {
    entries.forEach(entry =>{
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("appear");
    });
  }

  const observer = new IntersectionObserver(callback,{
    threshold:0.2,
  });
  
  document.querySelectorAll(".animate").forEach(target => {
    observer.observe(target);
  });

//************************************/


  function scrollCallback(entries) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        header.classList.add("scrolled");
        toTop.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
        toTop.classList.remove("scrolled");
      }
    });
  }


  const toTop =document.getElementById("to_top");

  toTop.addEventListener("click",e=>{
    e.preventDefault();
    window.scrollTo({
      top:0,
      behavior:"smooth",
    });
  })


  const header = document.querySelector("header");


  const scrollObserver = new IntersectionObserver(scrollCallback);
  scrollObserver.observe(document.getElementById("target-2"));//observで何か動きがあった時に知らせ捕らう
}