let preveiwContainer = document.querySelector('.aa-exercises-preview');
let previewBox = preveiwContainer.querySelectorAll('.aa-preview');

document.querySelectorAll('.aa-exercises-container .aa-exercise').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

document.addEventListener('DOMContentLoaded', function () {
  var backToTopBtn = document.getElementById('aa-backToTopBtn');

  window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', function () {
    scrollToTop(600); 
  });

  function scrollToTop(duration) {
    var start = window.pageYOffset;
    var startTime = 'now' in window.performance ? performance.now() : new Date().getTime();

    function animateScroll() {
      var now = 'now' in window.performance ? performance.now() : new Date().getTime();
      var elapsedTime = now - startTime;

      window.scroll(0, easeInOutCubic(elapsedTime, start, -start, duration));

      if (elapsedTime < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    function easeInOutCubic(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t * t + b;
      t -= 2;
      return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animateScroll);
  }
});