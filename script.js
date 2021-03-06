const color = "041625";
const introItems = ['header-items', 'intro-content', 'intro-decor'];
const aboutMeItems = ['aboutme-decor-light', 'aboutme-decor-dark'];
const experienceItems = ['exp-content', 'exp-header', 'exp-decor'];
const projectItems = ['projects-header'];
const contactItems = ['contact-header', 'contact-content'];

/** Actions to take when the page loads. */
function load() {
  determineMobile();

  // check for item loading
  loadItemsById(introItems);
  loadItemsByClass('header-item');
  checkLoadElement('aboutme-content', 'skill', aboutMeItems);
  checkLoadElement('experience', null, experienceItems);
  checkLoadElement('projects', 'project-item', projectItems);
  checkLoadElement('contact', null, contactItems);

  // select the first item in work experience list
  toggleSelected(0);

  window.addEventListener('scroll', function() {
      scrollActions();
    });

  window.addEventListener('resize', function() {
      determineMobile();
    });
}

var currentStyle = null;

/** Determine which stylesheet to use based on window aspect ratio and perform other tweaks. */
function determineMobile() {
  if (window.innerWidth >= window.innerHeight) {
    if(currentStyle != 'style.css') {
      setDesktop();
    }
    currentStyle = 'style.css';
  } else {
    if(currentStyle != 'style-mobile.css') {
      setMobile();
    }
    currentStyle = 'style-mobile.css';
  }
}

/** Additional setup for desktop layout. */
function setDesktop() {
  document.getElementById('style').href = 'style.css';
  transitionDelays('header-item');
  transitionDelays('skill');
  transitionDelays('project-item', 0.2);
}

/** Additional setup for mobile layout. */
function setMobile() {
  document.getElementById('style').href = 'style-mobile.css';
  document.getElementById('exp-header').innerText = 'Experience';

  const items = document.getElementsByClassName('project-item');

  for (var i = 0; i < items.length; i++ ) {
    (function(i){ 
      items[i].onclick = function() {
        toggleOverlays(i);
      }
    })(i);
  }
}

/** Applies staggered transition delay to elements of certain class. */
function transitionDelays(classname, multiplier) {
  const items = document.getElementsByClassName(classname);
  if(multiplier == null) {
    multiplier = 0.1;
  }
  for(var i = 0; i < items.length; i ++) {
    items[i].style.transitionDelay = multiplier * (i + 1) + 's';
  }
}

/** Eventlistener function that triggers when user scrolls. */
function scrollActions() {
  checkLoadElement('aboutme-content', 'skill', aboutMeItems);
  checkLoadElement('experience', 'tab', experienceItems);
  checkLoadElement('projects', 'project-item', projectItems);
  checkLoadElement('contact', 'contact-link', contactItems);
}

/** 
 * Check to see if it is time to load an element.
 * 
 * @param {string} elemName The id of the element in the document.
 * @param {string} subClassName The class name of any sub-elements to load;
 */
function checkLoadElement(elemName, subclassName, idList) {
  const top = document.getElementById(elemName).getBoundingClientRect().top;
  if(window.innerHeight - top > window.innerHeight * .2) {
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

/** Toggles menu display on mobile layout. */
function toggleMenu() {
  const list = document.getElementById('header-items').classList;
  if(list.contains('clicked')) {
    list.remove('clicked');
  } else {
    list.add('clicked');
  }
}

/** Toggles project overlay on mobile. */
function toggleOverlays(index) {
  const overlays = document.getElementsByClassName('project-overlay');
  if(index == null || index < 0 || index >= overlays.length) {
    return;
  }
  if(overlays[index].classList.contains('clicked')) {
    overlays[index].classList.remove('clicked');
  } else {
    overlays[index].classList.add('clicked');
  }
}

var selected = -1;

/** Toggles selected item from experience section. */
function toggleSelected(index) {
  const tabItems = document.getElementsByClassName('exp-tab-item');
  const tabs = document.getElementsByClassName('tab');

  var limit = Math.min(tabItems.length, tabs.length);

  if(index == null || index < 0 || index >= limit) {
    return;
  }

  if(selected != null && selected >= 0 && selected < limit) {
    tabItems[selected].classList.remove('selected');
    tabs[selected].classList.remove('selected');
  }

  tabItems[index].classList.add('selected');
  tabs[index].classList.add('selected');

  selected = index;
}