jquery.validateAll
==================

jQuery Plugin which validates all input,textarea,select - configurable


Example:

Step 1:
Insert this in before closing body tag.

&lt;script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.min.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="jquery.validateall.js"&gt;&lt;/script&gt;


Step 2:

a) your form needs an id
b) your inputs you want to be validated need a "data-validateall" attribute
c) your atrributes must contain some options -&gt; data-validateall="string:8,Name"
	 -----&gt; "what kind of validation:minum length of string or number,name of the field to be displayed in the error alert"
	 you have one optional option for string,textarea and number at the last, you can pass an integer to validate maximum letters.

Step 3:
Invoke your validation

Place this after the Plugin.
&lt;script&gt;
	// you can pass comma separated jquery Objects for example $(window).validateAll($("#form1"),$("#form2"));
	$(window).validateAll($("#form"));		
&lt;/script&gt;


Full example:

	
	&lt;form action="" id="form"&gt;
		string&lt;br /&gt;
		&lt;input type="text" data-validateall="string:3,String" /&gt;&lt;br /&gt;
		number&lt;br /&gt;
		&lt;input type="text" data-validateall="number:2,Number" /&gt;&lt;br /&gt;
		email&lt;br /&gt;
		&lt;input type="text" data-validateall="email,Email" /&gt;&lt;br /&gt;
		check&lt;br /&gt;
		&lt;input type="checkbox" data-validateall="checkbox,Checkbox" /&gt;&lt;br /&gt;
		textarea&lt;br /&gt;
		&lt;textarea data-validateall="string:5,Textarea,255"&gt;&lt;/textarea&gt;&lt;br /&gt;
		select&lt;br /&gt;
		&lt;select data-validateall="string:2,Select"&gt;
			&lt;option value=""&gt;please Choose...&lt;/option&gt;
			&lt;option value="jo"&gt;this option&lt;/option&gt;
		&lt;/select&gt;&lt;br /&gt;
		
		&lt;input type="submit" value="schick" /&gt;&lt;br /&gt;
	&lt;/form&gt;
	&lt;script type="text/javascript" src="http://code.jquery.com/jquery-1.8.2.min.js"&gt;&lt;/script&gt;
	&lt;script type="text/javascript" src="jquery.validateall.js"&gt;&lt;/script&gt;
	&lt;script&gt;

		$(window).validateAll($("#form"));
		
	&lt;/script&gt;
