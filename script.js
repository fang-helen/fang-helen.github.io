const color = "041625";
const introItems = ['header-items', 'intro-content', 'intro-decor'];
const aboutMeItems = ['aboutme-decor-light', 'aboutme-decor-dark'];

/** Actions to take when the page loads. */
function load() {
  transitionDelays('header-item');
  transitionDelays('skill');

  loadItemsById(introItems);
  loadItemsByClass('header-item');
  checkLoadElement('aboutme-content', 'skill', aboutMeItems);

  toggleSelected(0);

  window.addEventListener('scroll', function() {
      scrollActions();
    });
}

/** Applies staggered transition delay to elements of certain class. */
function transitionDelays(classname) {
  const items = document.getElementsByClassName(classname);
  for(var i = 0; i < items.length; i ++) {
    items[i].style.transitionDelay = 0.1 * (i + 1) + 's';
  }
}

/** Eventlistener function that triggers when user scrolls. */
function scrollActions() {
  // scroll position
  const offset = window.pageYOffset;

  checkLoadElement('aboutme-content', 'skill', aboutMeItems);

  // update color while scrolling (test)
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
  // document.body.style.backgroundColor = result;

  document.getElementById('showScroll').innerHTML = offset + 'px  ' + result;
}

/** 
 * Check to see if it is time to load an element.
 * 
 * @param {string} elemName The id of the element in the document.
 * @param {string} subClassName The class name of any sub-elements to load;
 */
function checkLoadElement(elemName, subclassName, idList) {
  const rect = document.getElementById(elemName).getBoundingClientRect();
  if(window.innerHeight - rect.top > window.innerHeight * .1) {
    document.getElementById(elemName).classList.add('after-load');

    // load any subelements also
    loadItemsById(idList);
    loadItemsByClass(subclassName);
  }
}

/** Loads all items from a list of element ids. */
function loadItemsById(idList) {
  if(idList == null) {
    return;
  }
  for(var i = 0; i < idList.length; i ++) {
    document.getElementById(idList[i]).classList.add('after-load');
  }
}

/** Loads all items of a certain class. */
function loadItemsByClass(subClassname) {
  if(subClassname == null) {
    return;
  }
  const skills = document.getElementsByClassName(subClassname);
  for(var i = 0; i < skills.length; i ++) {
    skills[i].classList.add('after-load');
  }
}

var selected = -1;
/** Toggles selected item from experience section. */
function toggleSelected(index) {
  const tabItems = document.getElementsByClassName('exp-tab-item');
  const tabs = document.getElementsByClassName('tab');

  if(index == null || index < 0 || index >= tabItems.length) {
    return;
  }

  if(selected != null && selected >= 0 && selected < tabItems.length) {
    tabItems[selected].classList.remove('selected');
    tabs[selected].classList.remove('selected');
  }

  tabItems[index].classList.add('selected');
  tabs[index].classList.add('selected');

  selected = index;
}