/************below for the login page***********/

function submitForm(submitButtonId)
{
 if (event.keyCode == 13)
 {
   event.cancelBubble = true;
   event.returnValue = false;
   document.all[submitButtonId].click(); 
 }
}

function showLayer(alphabet) {
	hideAll();
	document.getElementById("layer" + alphabet).style.display = "block";
	if(alphabet.length ==1){
	document.getElementById("layer" + alphabet + "_g").style.display = "block";
	}
	if(alphabet.length ==3){
	document.getElementById("layer" + alphabet.charAt(0)).style.display = "block";
	}
}

function hideAll() {
	for (i=65; i<=91; i++) {
		h = i.toString(16);
		h = unescape ('%'+h);
		if (document.getElementById("layer" + h))
			document.getElementById("layer" + h).style.display = "none";
		if (document.getElementById("layer" + h + "_g"))
			document.getElementById("layer" + h + "_g").style.display = "none";
			
	}
}


function select_deselectAll (chkVal, idVal) 
{ 
	var frm = document.forms[0];
	// Loop through all elements
	for (i=0; i<frm.length; i++) 
	{
		// Look for our Header Template's Checkbox
		if (idVal.indexOf ('CheckAll') != -1) 
		{
			// Check if main checkbox is checked, then select or deselect datagrid checkboxes 
			if(chkVal == true) 
			{
				frm.elements[i].checked = true;
			} 
			else 
			{
				frm.elements[i].checked = false;
			}
			// Work here with the Item Template's multiple checkboxes
		} 
		else if (idVal.indexOf ('DeleteThis') != -1) 
		{
			// Check if any of the checkboxes are not checked, and then uncheck top select all checkbox
			if(frm.elements[i].checked == false) 
			{
				frm.elements[1].checked = false; //Uncheck main select all checkbox
			}
		}
	}
}
/************above for the login page***********/


function getParam(name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null) return "";
    else return results[1];
}


function checkMaxLen(txtboxId, maxLen) {
 
    var txt = document.getElementById(txtboxId);

    try {
        if (txt.value.length > (maxLen)) {
            var cont = txt.value;
            txt.value = cont.substring(0, (maxLen));
            return false;
        };
    } catch (e) {
    }
}