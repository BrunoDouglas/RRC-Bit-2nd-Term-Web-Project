$(document).ready(function()
{
	$('nav#main-navigation a').click(function()
	{
		//Loads the Partial and Calls a function to startup the javascript for that partial
		var partialName = $(this).attr('title');
		$('#partials').load(partialName+'.html', function()
		{ 
			startJavaScript(partialName);
		});
	});

	//Get the URL Hash to decide which partial to load
	var hash = window.location.hash ? window.location.hash.replace("#","") : "Main";

	$('a[title="'+hash+'"]').click();
})

/*
 * Runs a method from a string literal
 *
 * param email  		The name of the Method
 */
function startJavaScript(methodName)
{
	var fn = window[methodName];
	if(typeof fn === 'function') 
	    fn();
}

