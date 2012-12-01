/*
jquery.validateAll
by Sven Delueg
Lauinger Straße 40
80997 München
Germany
www.delueg.org
www.heartcoded.de
This Plugin in free to use! Please keep this comment block inside. Have fun!
*/
(function($){
	$.fn.validateAll = function(elements) {

		var options = $.extend($.fn.validateAll.options);

		function init(){
			
			$.each(elements,function(index,element){
				$(element).bind("submit",function(){
					var str_error_msg = "";
					$(element).find("input:not([type=submit]),select,textarea").each(function(){
						if($(this).attr('data-validateall') !== undefined){
							var arr_field_data = $(this).attr("data-validateall").split(',');
							if(arr_field_data[0].indexOf("string") != -1){
								var arr_type_val = arr_field_data[0].split(":");
								if($(this).val() == ""){
									str_error_msg += "Das Feld " +arr_field_data[1]+ " ist Pflicht!\n";
								}else if($(this).val().length < arr_type_val[1]){
									str_error_msg += "Das Feld " +arr_field_data[1]+ " muss mindestens "+ arr_type_val[1] +" Buchtaben haben!\n";	
								}else if($(this).val().length > arr_field_data[2] && arr_field_data[2] != undefined ){
									str_error_msg += "Das Feld " +arr_field_data[1]+ " darf maximal "+ arr_field_data[2] +" Buchtaben haben!\n";	
								}
							}
							if(arr_field_data[0].indexOf("number") != -1){
								var arr_type_val = arr_field_data[0].split(":");
								if($(this).val() == ""){
									str_error_msg += "Das Feld " +arr_field_data[1]+ " ist Pflicht!\n";
								}else if(!parseFloat($(this).val())){
									str_error_msg += "Das Feld " +arr_field_data[1]+ " darf nur aus Ziffern bestehen!\n";	
								}else if($(this).val().length < arr_type_val[1]){
									str_error_msg += "Das Feld " +arr_field_data[1]+ " muss mindestens "+ arr_type_val[1] +" Ziffern haben!\n";	
								}else if($(this).val().length > arr_field_data[2] && arr_field_data[2] != undefined ){
									str_error_msg += "Das Feld " +arr_field_data[1]+ " darf maximal "+ arr_field_data[2] +" Ziffern haben!\n";	
								}
							}
							if(arr_field_data[0].indexOf("checkbox") != -1){
								var checked = $(this).is(":checked");
								if(checked != true){
									str_error_msg += "Das Feld " +arr_field_data[1]+ " ist Pflicht!\n";
								}
							}
							if(arr_field_data[0].indexOf("email") != -1){
								if($(this).val() == ""){
									str_error_msg += "Das Feld " +arr_field_data[1]+ " ist Pflicht!\n";
								}else if(validateEmail($(this).val()) == false){
									str_error_msg += "Das Feld " +arr_field_data[1]+ " hat kein gültiges Format!\n";	
								}
							}
						}
					});//end form inputs each
					if(str_error_msg != ""){
						alert(str_error_msg);
						return false;
					}else{
						return true;
					}
				});//end $(element).bind submit
			});//end $.each(elements)
		}//end init

		function validateEmail(email) { 
	   		var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	    	return re.test(email);
		}

		$(function() {
			//console.log('dom ready');
			init();
		});
	};//end validateAll
})(jQuery);