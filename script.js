const color = "041625";
const introItems = ['header-items', 'intro-content', 'intro-decor'];
const aboutMeItems = ['aboutme-decor-light', 'aboutme-decor-dark'];
const experienceItems = ['exp-content', 'exp-header', 'exp-decor'];

/** Actions to take when the page loads. */
function load() {
  transitionDelays('header-item');
  transitionDelays('skill');
  transitionDelays('tab');

  loadItemsById(introItems);
  loadItemsByClass('header-item');
  checkLoadElement('aboutme-content', 'skill', aboutMeItems);
  checkLoadElement('experience', 'tab', experienceItems);

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
  checkLoadElement('aboutme-content', 'skill', aboutMeItems);
  checkLoadElement('experience', 'tab', experienceItems);
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