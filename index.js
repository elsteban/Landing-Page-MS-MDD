const drone = document.querySelector("#drone-img");

// Callback function to execute when changes in intersection occur
const callback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate__animated');
      entry.target.classList.add('animate__backInLeft');
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(callback, {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
});


observer.observe(drone);
