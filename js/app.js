/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event

// This function is to create section by passing section id with all its DOM Elements
function createSection(sectionTobCreatedID){
    const mainTag = document.querySelector('main');
    const sectionToBeCreated = document.createElement('section');
    const divContainer = document.createElement('div');
    const headerTag = document.createElement('h2');
    const firstParagraphCreated = document.createElement('p');
    const secondPragraphCreated = document.createElement('p');

    sectionToBeCreated.id = sectionTobCreatedID;
    sectionToBeCreated.setAttribute('data-nav', 'Section 4');
    divContainer.setAttribute('class', 'landing__container');
    headerTag.textContent = 'Section 4';
    firstParagraphCreated.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
    secondPragraphCreated.textContent = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';

    divContainer.appendChild(headerTag);
    divContainer.appendChild(firstParagraphCreated);
    divContainer.appendChild(secondPragraphCreated);
    sectionToBeCreated.appendChild(divContainer);
    mainTag.appendChild(sectionToBeCreated);
}

// This function is to create a four listItems 'li' Tag to the 'ul' Tag
function createListItem(){
    const unOrderedList = document.querySelector('#navbar__list');
    if(unOrderedList !== null && unOrderedList !== undefined){
        const allSections = document.getElementsByTagName('section');
        if(allSections !== null && allSections !== undefined){
            if(allSections.length > 0){
                for(let i = 1; i <= allSections.length; i++){
                    const listItem = document.createElement('li');
                    listItem.textContent = 'Section '+ i;
                    listItem.id = 'listItem' + i;
                    listItem.className = 'menu__link';
                    unOrderedList.appendChild(listItem);
                }
            }
        }
    }
}

// This function is to loop of each listItems 'li' Tag and add an Event Listener to it
// just to listen for each click on 'li' Tag and scroll to the appropiate 'section' Tag
// **Note : each 'section' Tag has a naming convension that already set in the index.html
//          ex. : 'section1' or 'section2' ... etc.
function addListitemsClickEvents() {
    const menuLinks = document.getElementsByClassName('menu__link');
    if(menuLinks !== null && menuLinks !== undefined){
        let count = 1;
        for(const listItem of menuLinks){
            const sectionID = 'section' + count;
            let sectionEle = document.getElementById(sectionID);
            if(sectionEle !== null && sectionEle !== undefined){
                listItem.addEventListener('click', function(event){
                    event.preventDefault();
                    sectionEle.scrollIntoView({behavior: "smooth"});
                });
            }
            count = count + 1;
        }
    }
}

// This function takes sectionID as an argument and add 'active-class' as className to that section
// Just if the section Top is reached to the Top of the viewport
// Get the section by its passed id
// Get the section Top from the viewport by using 'getBoundingClientRect()' mothod
// and use the 'top' property
// If yes, then add a class called 'active-class'
function addActiveClass(sectionID){
    const sectionSelected = document.getElementById(sectionID);
    const sectionRect = sectionSelected.getBoundingClientRect(); 
    if(sectionRect.top <= 150 && sectionRect.bottom >= 150){
        sectionSelected.classList.add('active-class');
        setListItemHighlight();
    }
}

// This function is to set the highlight to listItems to navbar 'li' Tag
function setListItemHighlight(){
    removeHighlight();
    const activeSection = document.querySelector('.active-class');
    if(activeSection !== null && activeSection !== undefined){
        let activeListItemCount = 0;
        if(activeSection.id === 'section1'){
            activeListItemCount = 1;
        }else if(activeSection.id === 'section2'){
            activeListItemCount = 2;
        }else if(activeSection.id === 'section3'){
            activeListItemCount = 3;
        }else if(activeSection.id === 'section4'){
            activeListItemCount = 4;
        }
        if(activeListItemCount !== 0){
            const listItemID = 'listItem' + activeListItemCount;
            const activeListItem = document.getElementById(listItemID);
            if(activeListItem !== null && activeListItem !== undefined){
                activeListItem.style.backgroundColor = '#333';
                activeListItem.style.color = '#fff';
            }
        }
    }
}

// This function is to remove all style added to 'li' Tag
function removeHighlight() {
  const menuLinks = document.getElementsByClassName('menu__link');
  if (menuLinks !== null && menuLinks !== undefined) {
    for(let i = 1; i <= menuLinks.length; i++){
        const listItemID = 'listItem' + i;
        const listItem = document.getElementById(listItemID);
        if(listItem !== null && listItem !== undefined){
            listItem.removeAttribute('style');
        }
    }
  }
}

// remove class from the classList which is called 'your-active-class' (that is set in the project as initial value)
// remove class from the classList which is called 'active', if exists.
function removeActiveClass(section){
    section.classList.remove('your-active-class');
    section.classList.remove('active-class');
}

// This function is used to set the active class and remove first all class of all sections
// Get all 'section' Tag elements in the DOM (there are 4 sections)
// Check if the allSections is not null && is not undefined
// If yes, then Set the count to 1 to add it to the section ID as follows
// Loop for allSections
// Remove all active classes
// set the sectionID as follows
// Send this sectionID to addActiveClass function
// add one to the sectionID
function setActiveClass(){
    const allSections = document.getElementsByTagName('section');
    if(allSections !== null && allSections !== undefined){
        let count = 1;
        for(const section of allSections){
            removeActiveClass(section);
            const sectionID = 'section' + count;
            addActiveClass(sectionID);
            count = count + 1;
        }
    }
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 
//create section 4 'section' Tag and add it to the DOM
createSection('section4');
// create the 4 list items 'li' Tag, as nav menu
createListItem();
// Scroll to section on link click
// add 'click' event to 'li' Tag to listen for clicks and scroll to the appropriate 'section' Tag
addListitemsClickEvents();
// Set sections as active
// add 'scroll' to document to listen for scrolling to add active class to each section reached the top of the viewport
document.addEventListener('scroll', setActiveClass);
