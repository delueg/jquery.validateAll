jquery.validateAll<br /><br />
==================

jQuery Plugin which validates all input,textarea,select - configurable<br /><br />


Example:<br /><br /><br />

Step 1:<br /><br />
Insert this in before closing <pre>
<code></body></code>
</pre> tag.
<pre>
<code>
<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="jquery.validateall.js"></script>
</code>
</pre>

Step 2:<br /><br />

a) your <form> needs an id<br />
b) your inputs you want to be validated need a "data-validateall" attribute <br />
c) your atrributes must contain some options -> data-validateall="string:8,Name"<br />
	 -----> "what kind of validation:minum length of string or number,name of the field to be displayed in the error alert"<br />
	 you have one optional option for string,textarea and number at the last, you can pass an integer to validate maximum letters.<br /><br />

Step 3:<br />
Invoke your validation<br /><br />

Place this after the Plugin.<br />
<pre>
<code>
<script>
	// you can pass comma separated jquery Objects for example $(window).validateAll($("#form1"),$("#form2"));
	$(window).validateAll($("#form"));		
</script>
</code>
</pre>

Full example:

<!doctype>
<pre>
<code>
<html>
<head>
	<title>jquery.validateAll</title>
</head>
<body>
	
	<form action="" id="form">
		string
		<input type="text" data-validateall="string:3,String" />
		number
		<input type="text" data-validateall="number:2,Number" />
		email
		<input type="text" data-validateall="email,Email" />
		check
		<input type="checkbox" data-validateall="checkbox,Checkbox" />
		textarea
		<textarea data-validateall="string:5,Textarea,255"></textarea>
		select
		<select data-validateall="string:2,Select">
			<option value="">please Choose...</option>
			<option value="jo">this option</option>
		</select>
		
		<input type="submit" value="schick" />
	</form>
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="jquery.validateall.js"></script>
	<script>

		$(window).validateAll($("#form"));
		
	</script>
	
</body>
<html>
</code>
</pre>