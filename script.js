const color = "020c15";

function load() {
  // trigger animation
  document.getElementById('intro-content').classList.add('after-load');

  window.addEventListener('scroll', function() {
      scrollActions();
    });

  // get position of element
  const rect = document.getElementById('showTop').getBoundingClientRect();
  var left = rect.left + window.scrollX;
  var top = rect.top + window.scrollY;

  document.getElementById('showTop').innerText = top;
}

function scrollActions() {
  // scroll position
  const offset = window.pageYOffset;

  // show sections if needed
  const aboutmeThreshold = document.getElementById('aboutme-content').clientHeight;
  if(offset >= aboutmeThreshold * .1) {
    document.getElementById('aboutme-content').classList.add('after-load');
  }

  // update color while scrolling
  const limit = document.body.style.height - window.innerHeight;
  const startColor = parseInt(color, 16);
  var b = startColor & 0xFF,
      g = (startColor & 0xFF00) >>> 8,
      r = (startColor & 0xFF0000) >>> 16;
  const delta = offset/limit;
  b = Math.floor(b * delta) + b;
  g += Math.floor(g * delta) + g;
  r += Math.floor(r * delta) + r;
  
  const result = "rgb(" + [r, g, b].join(",") + ")";
  document.body.style.backgroundColor = result;

  document.getElementById('showScroll').innerHTML = offset + 'px  ' + result;
}