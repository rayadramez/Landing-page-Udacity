# Landing Page Project

## Table of Contents

* [Project Title](#projectTitle)
* [Introduction](#introduction)
* [Page Content](#pageContent)
* [Usage](#usage)
* [Development & Technologies](#development) 

## Project Title
Landing Page

## Introduction
This project aims to give you real-world scenarios of manipulating the DOM. The functionality you will be using serves two purposes: to prepare you for appending dynamically added data to the DOM, and to show you how javascript can improve the usability of an otherwise static site. This project barely touches the surface of what is possible, but it does use some incredibly common events, methods, and logic.

For this project, refactor and test as much as possible while you are building. You should figure for every piece of functionality you add, you will likely spend just as much time testing and refactoring your code. If it takes you 3 hours to figure out the logic, it should likely take you another 3 hours determining that you wrote the best code possible. As your skills improve, this process will feel more natural. Make sure to remove any debugging code from your final submission. 

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

## Development & Technologies
Tech. Used are : HTML - CSS - JavaScript

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