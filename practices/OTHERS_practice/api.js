function callback(entries, obs) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {return;}
    entry.target.classList.add("appear");
    obs.unobserve(entry.target);
  });
}
document.querySelectorAll(".play").forEach(target => { 
  new IntersectionObserver(callback,{threshold:0.5,}).observe(target);
});
