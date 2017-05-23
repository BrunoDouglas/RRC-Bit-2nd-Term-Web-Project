/* Code related to Submit Your Video Page */
var btnSubmit, form, fields;
/*
 * Sets up the Event listener to the Submit event of the Submit Your Video form
 */
function SubmitYours()
{
	form      = document.getElementById("formSubmitYours");
	btnSubmit = document.getElementById("btnSubmit");
	fields = ["inputName", "inputPhone", "inputEmail", "inputVideoURL", "inputVideoDescription"];
	form.addEventListener("submit", function(e)
	{
		if(formHasErrors())
			e.preventDefault();
	});

	form.addEventListener("reset", function(e)
	{
		hideErrors();
		return true;
	});
}

/*
 * Verifies if the form has any errors and show them
 * return   True if errors have been found
 */
function formHasErrors()
{
	hideErrors();
	
	var error = false;
	var currentError = 99;
	for (var i = 0; i < fields.length; i++) 
	{

		var inputId = fields[i];
		var field = document.getElementById(inputId);

		if(!field || !field.value || !field.value.trim())
		{
			error = true;
			showError(inputId);
		}  else
		{
			var value = field.value.trim();
			if(inputId == "inputPhone" && (value.length != 10 || isNaN(value)))
			{
				error = true;
				showError(inputId,true)
			} else if( inputId == "inputEmail" && (!isEmailValid(value)))
			{
				error = true;
				showError(inputId,true)
			}
			
		} 

		if(error == true && currentError > i)
		{
			currentError = i;
			field.focus();
			field.select();	
		}
		
	}

	return error;
}

/*
 * Validates if the email address is valid according to a Regular Expression pattern
 *
 * param email  		The email address to be validated
 * return   			True if the email address pattern is valid;
 */
function isEmailValid(email) 
{
  var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
 }


function showError(inputId, format = false)
{
	document.getElementById(inputId+"_label").style.display = "none";

	if(!format)
		document.getElementById(inputId+"_error").style.display = "block";
	else
		document.getElementById(inputId+"_format_error").style.display = "block";

}

function hideErrors(inputId)
{
	var errors = document.getElementsByClassName("error"),
		labels = document.getElementsByClassName("label");

	for (var i = 0; i < errors.length; i++) 
		errors[i].style.display = "none";

	for (var i = 0; i < labels.length; i++) 
		labels[i].style.display = "block";
}