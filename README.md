jquery.validateAll
==================

jQuery Plugin which validates all input,textarea,select - configurable


Example:

Step 1:
Insert this in before closing body tag.

&lt;script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.min.js" &gt;&lt;/script&gt;

&lt;script type="text/javascript" src="jquery.validateall.js"&gt;&lt;/script&gt;


Step 2:

a) your form needs an id

b) your inputs you want to be validated need a "data-validateall" attribute

c) your atrributes must contain some options - data-validateall="string:8,Name"

"what kind of validation:minum length of string or number,name of the field to be displayed in the error alert"

you have one optional option for string,textarea and number at the last, you can pass an integer to validate maximum letters.


Step 3:

Invoke your validation

Place this after the Plugin.

&lt;script&gt;

	// you can pass comma separated jquery Objects for example $(window).validateAll($("#form1"),$("#form2"));

	$(window).validateAll($("#form"));		

&lt;/script&gt;



Full example:

	
	<form action="" id="form">
		string<br />
		<input type="text" data-validateall="string:3,String" /><br />
		number<br />
		<input type="text" data-validateall="number:2,Number" /><br />
		email<br />
		<input type="text" data-validateall="email,Email" /><br />
		check<br />
		<input type="checkbox" data-validateall="checkbox,Checkbox" /><br />
		textarea<br />
		<textarea data-validateall="string:5,Textarea,255"></textarea><br />
		select<br />
		<select data-validateall="string:2,Select">
			<option value="">please Choose...</option>
			<option value="jo">this option</option>
		</select><br />
		
		<input type="submit" value="schick" /><br />
	</form>
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
	<script type="text/javascript" src="jquery.validateall.js"></script>
	<script>

		$(window).validateAll($("#form"));
		
	</script>
