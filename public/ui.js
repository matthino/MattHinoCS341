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

// When this file is included at the bottom of the page,                                                                           
// the js is loaded after the DOM is loaded.  It is a                                                                              
// good time to initialize the UI elements in the page.                                                                            
initialize();
