<?php

	$executionStartTime = microtime(true) / 1000;

	$url='http://api.geonames.org/countrySubdivisionJSON?lat=' . $_REQUEST['lat_cs'] . '&lng=' . $_REQUEST['lng_cs'] . '&username=cabd';

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

	$decode = json_decode($result,true);
	$adminCode=$decode["adminCode1"];
    $adminName=$decode["adminName1"];
    
	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['adminCode1'] = $adminCode;
	$output['adminName1'] = $adminName;

	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 
?>
