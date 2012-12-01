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

		//options will come in the future like error styling etc.
		//var options = $.extend($.fn.validateAll.options);

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
									str_error_msg += "The field " +arr_field_data[1]+ " is mandatory!\n";
								}else if($(this).val().length < arr_type_val[1]){
									str_error_msg += "The field " +arr_field_data[1]+ " needs minimum "+ arr_type_val[1] +" characters!\n";	
								}else if($(this).val().length > arr_field_data[2] && arr_field_data[2] != undefined ){
									str_error_msg += "The field " +arr_field_data[1]+ " can contain "+ arr_field_data[2] +" characters max!\n";	
								}
							}
							if(arr_field_data[0].indexOf("number") != -1){
								var arr_type_val = arr_field_data[0].split(":");
								if($(this).val() == ""){
									str_error_msg += "The field " +arr_field_data[1]+ " is mandatory!\n";
								}else if(!parseFloat($(this).val())){
									str_error_msg += "The field " +arr_field_data[1]+ " can only contain digits!\n";	
								}else if($(this).val().length < arr_type_val[1]){
									str_error_msg += "The field " +arr_field_data[1]+ " needs minimum "+ arr_type_val[1] +" digets!\n";	
								}else if($(this).val().length > arr_field_data[2] && arr_field_data[2] != undefined ){
									str_error_msg += "The field " +arr_field_data[1]+ " can contain "+ arr_field_data[2] +" digets max!\n";	
								}
							}
							if(arr_field_data[0].indexOf("checkbox") != -1){
								var checked = $(this).is(":checked");
								if(checked != true){
									str_error_msg += "The field " +arr_field_data[1]+ " is mandatory!\n";
								}
							}
							if(arr_field_data[0].indexOf("email") != -1){
								if($(this).val() == ""){
									str_error_msg += "The field " +arr_field_data[1]+ " is mandatory!\n";
								}else if(validateEmail($(this).val()) == false){
									str_error_msg += "The field " +arr_field_data[1]+ " has no valid format!\n";	
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