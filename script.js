const color = "041625";

/** Actions to take when the page loads. */
function load() {
  document.getElementById('intro-content').classList.add('after-load');
  document.getElementById('intro-decor').classList.add('after-load');

  window.addEventListener('scroll', function() {
      scrollActions();
    });
}

/** Eventlistener function that triggers when user scrolls. */
function scrollActions() {
  // scroll position
  const offset = window.pageYOffset;

  checkLoadElement('aboutme-content');

  // update color while scrolling
  const limit = document.body.style.height - window.innerHeight;
  const startColor = parseInt(color, 16);
  var b = startColor & 0xFF,
      g = (startColor & 0xFF00) >>> 8,
      r = (startColor & 0xFF0000) >>> 16;
  const delta = offset/limit;
  b = Math.floor(b * delta) + b;
  g = Math.floor(g * delta) + g;
  r = Math.floor(r * delta) + r;
  
  const result = "rgb(" + [r, g, b].join(",") + ")";
  document.body.style.backgroundColor = result;

  document.getElementById('showScroll').innerHTML = offset + 'px  ' + result;


  const rect = document.getElementById('showTop').getBoundingClientRect();
  console.log(rect.top);
}

/** 
 * Check to see if it is time to load an element.
 * 
 * @param {string} elemName The id of the element in the document.
 */
function checkLoadElement(elemName) {
  const rect = document.getElementById(elemName).getBoundingClientRect();
  if(window.innerHeight - rect.top > window.innerHeight * .1) {
    document.getElementById(elemName).classList.add('after-load');
  }
}