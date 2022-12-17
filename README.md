# Landing Page Project

## Table of Contents

* [Project Title](#projectTitle)
* [Page Content](#pageContent)
* [Usage](#usage)
* [Development](#development)

## Project Title
Landing Page

## Page Content
The whole project consists of :
1- HTML Page called index.html
2- StyleSheet file called style.css, and placed in css folder
3- JavaScript file called app.js, and placed in js folder

## Usage and DOM
The index.html has the following :
1. header Tag, that has : 
	- nav Tag,  that has :
		- ul Tag, that has : 
			- li Tag (**_created dynamically_**), for section 1
			- li Tag (**_created dynamically_**), for section 2
			- li Tag (**_created dynamically_**), for section 3
			- li Tag (**_created dynamically_**), for section 4
2. main Tag, that has :
	- header Tag, that has :
		- h1 Tag, content header
	- section Tag, with id = #section1, that has :
		- div Tag
		- p Tag
		- p Tag
	- section Tag, with id = #section2, that has :
		- div Tag
		- p Tag
		- p Tag
	- section Tag, with id = #section3, that has :
		- div Tag
		- p Tag
		- p Tag 
	- section Tag (**_created dynamically_**), with id = #section4, that has :
		- div Tag
		- p Tag
		- p Tag
3. footer Tag

## Development
1. In app.js : 
	1. Four navigation list items 'li' was made in the header unordered list 'ul'
		- Each listItem 'li' is to scroll to the appropriate 'section'
		- Each listItem 'li' has a 'click' event listener
	2. Four sections 'section' was made in the 'main' Tag
		- Each section has a dynamically class added 'active' when the scroll reaches the top of the viewerport
	3. The document has a 'scroll' event listener to listen to scroll to each section
2. In index.html : 
	- A 'script' Tag was added to the index.html file
5. In style.css : 
	- 'html' Tag's scroll-behavior set to smooth