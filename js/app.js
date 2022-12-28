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
    // Get the 'main' Tag as the parent container
    const mainTag = document.querySelector('main');
    // Create a 'section' Tag as a child to 'main' Tag
    const sectionToBeCreated = document.createElement('section');
    // Create a 'div' Tag container as a child to 'section' Tag
    const divContainer = document.createElement('div');
    // Create a 'h2' Tag as a first header child to the 'div' Tag
    const headerTag = document.createElement('h2');
    // Create a 'p' Tag as a second paragraph child to the 'div' Tag
    const firstParagraphCreated = document.createElement('p');
    // Create a 'p' Tag as a third paragraph child to the 'div' Tag
    const secondPragraphCreated = document.createElement('p');

    // Setting the 'section' Tag id
    // Adding a 'data-attribute' to the 'section' Tag
    sectionToBeCreated.id = sectionTobCreatedID;
    sectionToBeCreated.setAttribute('data-nav', 'Section 4');
    // Setting class attribute to the 'div' Tag
    divContainer.setAttribute('class', 'landing__container');
    //Setting the 'textContent' to the 'h2' Tag
    headerTag.textContent = 'Section 4';
    //Setting the 'textContent' to the 'p' Tag of the (firstParagraphCreated)
    firstParagraphCreated.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
    //Setting the 'textContent' to the 'p' Tag of the (secondPragraphCreated)
    secondPragraphCreated.textContent = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';

    // Add the (headerTag) 'h2' Tag ot the (divContainer) 'div' Tag
    divContainer.appendChild(headerTag);
    // Add the (firstParagraphCreated) 'p' Tag ot the (divContainer) 'div' Tag
    divContainer.appendChild(firstParagraphCreated);
    // Add the (secondPragraphCreated) 'p' Tag ot the (divContainer) 'div' Tag
    divContainer.appendChild(secondPragraphCreated);
    // Add the (divContainer) 'div' Tag ot the (sectionToBeCreated) 'section' Tag
    sectionToBeCreated.appendChild(divContainer);
    // Add the (sectionToBeCreated) 'section' Tag to the (mainTag) 'main' Tag
    mainTag.appendChild(sectionToBeCreated);
}

// This function is to create a four listItems 'li' Tag to the 'ul' Tag
function createListItem(){
    // Get the unorderedList 'ul' Tag by its id using querySelector
    const unOrderedList = document.querySelector('#navbar__list');
    // Check if the (unOrderedList) 'ul' is not null and is not undefined
    if(unOrderedList !== null && unOrderedList !== undefined){
        // Get all sections Tag
        const allSections = document.getElementsByTagName('section');
        // Check is the secions retrived is not null and not undefined
        if(allSections !== null && allSections !== undefined){
            // Check if the count of the sections retrevied is greater than 0
            if(allSections.length > 0){
                // Loop for each sections retrevied
                for(let i = 1; i <= allSections.length; i++){
            // Create a listItem 'li' Tag
            const listItem = document.createElement('li');
            // Set the 'textContent' for created the 'li' Tag
            listItem.textContent = 'Section '+ i;
            // Set the 'id' for created the 'li' Tag
            listItem.id = 'listItem' + i;
            // Set the 'className' for created the 'li' Tag
            listItem.className = 'menu__link';
            // Add the created 'li' to the (unOrderedList) 'ul' Tag
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
    // Get list of listItems in 'li' Tag with className
    const menuLinks = document.getElementsByClassName('menu__link');
    // Check if the list is not null and is not undefined
    if(menuLinks !== null && menuLinks !== undefined){
        // If Yes, then 
        let count = 1;
        // loop for each listItem in the menuLinks 'li' Tag
        for(const listItem of menuLinks){
            // Create a section id by the count counter 
            // ex. get the first 'section1' id and so on ...
            const sectionID = 'section' + count;
            // Get the expected 'section' Tag
            let sectionEle = document.getElementById(sectionID);
            // Check if the section is not null and is not undefined
            if(sectionEle !== null && sectionEle !== undefined){
                // If Yes, then
                // Add a click event to that listItem 'li' Tag
                // and a function that just scroll to the appropiate 'section'Tag
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
function addActiveClass(sectionID){
    // Get the section by its passed id
    const sectionSelected = document.getElementById(sectionID);
    // Get the section Top from the viewport by using 'getBoundingClientRect()' mothod
    // and use the 'top' property
    const sectionRect = sectionSelected.getBoundingClientRect(); 
    if(sectionRect.top <= 150 && sectionRect.bottom >= 150){
        // If yes, then add a class called 'active-class'
        sectionSelected.classList.add('active-class');
        removeHighlight();
    }
}

function setHighlight(){
    const menuLinks = document.getElementsByClassName('menu__link');
    if(menuLinks !== null && menuLinks !== undefined){
        let count = 1;
        for (const listItem of menuLinks) {
            listItem.style.backgroundColor = '#333';
        }
    }
}

// This function is to remove all style added to 'li' Tag
function removeHighlight() {
  const menuLinks = document.getElementsByClassName('menu__link');
  if (menuLinks !== null && menuLinks !== undefined) {
    for (const listItem of menuLinks) {
      listItem.removeAttribute('style');
    }
  }
}

function removeActiveClass(section){
    // remove class from the classList which is called 'your-active-class' (that is set in the project as initial value)
    section.classList.remove('your-active-class');
    // remove class from the classList which is called 'active', if exists.
    section.classList.remove('active-class');
}

// This function is used to set the active class and remove first all class of all sections
function setActiveClass(){
    // Get all 'section' Tag elements in the DOM (there are 4 sections)
    const allSections = document.getElementsByTagName('section');
    // Check if the allSections is not null && is not undefined
    if(allSections !== null && allSections !== undefined){
        // If yes, then
        // Set the count to 1 to add it to the section ID as follows
        let count = 1;
        // Loop for allSections
        for(const section of allSections){
            // Remove all active classes
            removeActiveClass(section);
            // set the sectionID as follows
            const sectionID = 'section' + count;
            // Send this sectionID to addActiveClass function
            addActiveClass(sectionID);
            // add one to the sectionID
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
