function load() {
  window.addEventListener('scroll', function() {
      document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
    });
  const rect = document.getElementById('showTop').getBoundingClientRect();
  var left = rect.left + window.scrollX;
  var top = rect.top + window.scrollY;

  document.getElementById('showTop').innerText = top;
}
    