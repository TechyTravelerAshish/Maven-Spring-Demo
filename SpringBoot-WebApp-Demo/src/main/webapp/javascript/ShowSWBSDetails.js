/**
 * ########################### FETCH SBWS DETAILS - JQUERY ########################################
 */

$(document).ready(function(){
	$('#Fetch_Button_SBWS').click(function() {
		$("#SBWSspinner").addClass("spinner-border spinner-border-lg");
		var emp_id_Length = $("#head_count_emp_id").val().length;        		
		if ( emp_id_Length < 1 )
			{
				$('#No_emp_id_ModalHC').modal('show'); 
				$("#SBWSspinner").removeClass("spinner-border spinner-border-lg");
			} 
		else
		{		
		var emp_id = $('#head_count_emp_id').val();
        $.ajax( {
        	type : 'POST',
        	data : {
        		action : "Fetch_HC",
        		emp_id : emp_id      		
        	},
        	url : 'Fetch_HeadCount_Details',
        	success : function(result) {
        		$("#SBWSspinner").removeClass("spinner-border spinner-border-lg");
        		
    			if ( result.split(",")[46].length > 2 )
				{
					document.getElementById("Depute_Branch").value = result.split(",")[47]; 
					document.getElementById("Employee_Depute_DC").value = result.split(",")[48]; 
					document.getElementById("Nature_of_Device").value = result.split(",")[49]; 
					document.getElementById("Type_of_connectivity").value = result.split(",")[50]; 
					document.getElementById("SBWS_Status").value = result.split(",")[51]; 
					$('input[name="SBWS_Enabled"]').val([result.split(",")[52]]); 					
					document.getElementById("Reason_SBWS_Enabled").value = result.split(",")[53]; 
					document.getElementById("Associate_Mobile").value = result.split(",")[54];
					$('input[name="Assoc_in_Depute"]').val([result.split(",")[55]]);					
					document.getElementById("Shipping_Address").value = result.split(",")[56]; 
					document.getElementById("Landmark").value = result.split(",")[57]; 
					document.getElementById("City").value = result.split(",")[58]; 
					document.getElementById("District").value = result.split(",")[59]; 
					document.getElementById("State").value = result.split(",")[60]; 
					document.getElementById("Nearest_TCS_Office").value = result.split(",")[61]; 
					
					$('#Depute_Branch_modal_sbws2').html(result.split(",")[47]);
					$('#Employee_Depute_DC_modal_sbws2').html(result.split(",")[48]);
					$('#Nature_of_Device_modal_sbws2').html(result.split(",")[49]);
					$('#Type_of_connectivity_modal_sbws2').html(result.split(",")[50]);
					$('#SBWS_Status_modal_sbws2').html(result.split(",")[51]);
					$('#SBWS_Enabled_modal_sbws2').html(result.split(",")[52]);
					$('#Reason_SBWS_Enabled_modal_sbws2').html(result.split(",")[53]);
					$('#Associate_Mobile_modal_sbws2').html(result.split(",")[54]);
					$('#Assoc_in_Depute_modal_sbws2').html(result.split(",")[55]);
					$('#Shipping_Address_modal_sbws2').html(result.split(",")[56]);
					$('#Landmark_modal_sbws2').html(result.split(",")[57]);
					$('#City_modal_sbws2').html(result.split(",")[58]);
					$('#District_modal_sbws2').html(result.split(",")[59]);
					$('#State_modal_sbws2').html(result.split(",")[60]);
					$('#Nearest_TCS_Office_modal_sbws2').html(result.split(",")[61]);
				}

    			if ( result.split(",")[47].length < 2 )
    				{
    					$('#Employee_No_modal2').html($('#head_count_emp_id').val());
    					$('#NoData_Modal_HC').modal('show'); 
    				} 
    			else
    				{
    					//$('#Employee_No_modal2').html(result.split(",")[16]);
    					$('#SBWS_Modal').modal('show'); 
    				} 
           	}
        }     		
        );
        }	
    }	
	);
});	