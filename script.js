const startColor = 444444;

function load() {
  window.addEventListener('scroll', function() {
      const offset = window.pageYOffset;
      document.getElementById('showScroll').innerHTML = offset + 'px';

      const limit = document.body.style.height - window.innerHeight;
      const displace = Math.floor(44 * offset/limit);
      const result = displace + 100 * displace + 10000 * displace + startColor;
      document.body.style.backgroundColor = "#" + result;
    });
  const rect = document.getElementById('showTop').getBoundingClientRect();
  var left = rect.left + window.scrollX;
  var top = rect.top + window.scrollY;

  document.getElementById('showTop').innerText = top;
}
    