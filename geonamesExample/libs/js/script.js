	$('#btnRunCC').click(function() {

		$.ajax({
			url: "libs/php/getCountryCode.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat: $('#lat').val(),
				lng: $('#lng').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtCountryCode').html(result['data']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		});

	});
	
	$("#btn_cc").click(function()
	{
	    //document.getElementById('cc').style.display='block'; 
	    $("#cc").css("display", "block");
		$("#cs").css("display", "none");
		$("#ct").css("display", "none");
	});
	
	
	$('#btnRunCS').click(function() {

		$.ajax({
			url: "libs/php/getCountrySubdivision.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat_cs: $('#lat_cs').val(),
				lng_cs: $('#lng_cs').val()
			},
			success: function(result) {

				console.log(result);

				if (result.status.name == "ok") {

					$('#txtAdminCode').html(result['adminCode1']);
					$('#txtAdminName').html(result['adminName1']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
			}
		});

	});
	
	$("#btn_cs").click(function()
	{
	    //document.getElementById('cs').style.display='block'; 
	    $("#cs").css("display", "block");
		$("#cc").css("display", "none");
		$("#ct").css("display", "none");
	});


	$('#btnRunCT').click(function() {


		$.ajax({
			url: "libs/php/getCountryTopo30.php",
			type: 'POST',
			dataType: 'json',
			data: {
				lat_ct: $('#lat_ct').val(),
				lng_ct: $('#lng_ct').val()
			},
			success: function(result) {
				console.log(result);

				if (result.status.name == "ok") {
					
					$('#txtTopoCode').html(result['data']);

				}
			
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// your error code
				console.log(errorThrown);
			}
		});

	});

	$("#btn_ct").click(function()
	{
		//document.getElementById('cc').style.display='block'; 
		$("#ct").css("display", "block");
	    $("#cc").css("display", "none");
	    $("#cs").css("display", "none");
	});
	
	
	