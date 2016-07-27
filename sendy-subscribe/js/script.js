$(function (global) {
	var path="http://sendy.quickdesk.io//subscribe"
	
	var form = document.createElement("form");
	form.setAttribute("method", "post");
	form.setAttribute("action", path);

	var hiddenField = document.createElement("input");
	hiddenField.setAttribute("type", "hidden");
	hiddenField.setAttribute("name", "aldo");
	hiddenField.setAttribute("email", "chris.raynaldo@gmail.com");
	hiddenField.setAttribute("list", "mIx7hTMkzbMfn2vt9lCUxg");

	form.appendChild(hiddenField);

	document.body.appendChild(form);
	console.log(document)
	form.submit();
})(window);