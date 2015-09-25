/**                                                                                                                                
 * ui.js                                                                                                                           
 *                                                                                                                                 
 * Defines functionality for instrumenting the user-interface.                                                                     
 *                                                                                                                                 
 */

var initialize = function() {

    console.log('Initialize!');

    // Grab the 'About' button element, identified by the                                                                          
    // 'about-btn' id.                                                                                                             
    var button = document.getElementById('about-btn');

    // From this point forward, when the button is clicked, the                                                                   
    // toggle function shall be invoked.                                                                                           
    button.onclick = toggle;
	
	// Grab the 'Submit' button element, identified by the
	// 'submit-btn' id.
	button = document.getElementById('submit-btn');
	
	// From this point forward, when the button is clicked, the
	// fetch function shall be invoked.
	button.onclick = fetch;

};

var toggle = function() {
	// Grab the html element with the ID "about"
	var about = document.getElementById('about');
	
	// add/remove the 'show' class to the about section
	if (hasClass(about, 'show'))
	{
		removeClass(about, 'show');
	}
	else
	{
		addClass(about, 'show');
	}
};

// This function is designed to 'fetch' the year from the
// element in the DOM.
var fetch = function() {
	var yearText = document.getElementById('year');
	
	// log the value for debugging purposes
	console.log("Year: " + yearText.value);
	
	vizController(yearText.value);
	
};


// When this file is included at the bottom of the page,                                                                           
// the js is loaded after the DOM is loaded.  It is a                                                                              
// good time to initialize the UI elements in the page.                                                                            
initialize();
