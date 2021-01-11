<?php

	$executionStartTime = microtime(true) / 1000;

	$url='http://api.geonames.org/gtopo30JSON?formatted=true&lat=' . $_REQUEST['lat_ct'] . '&lng=' . $_REQUEST['lng_ct'] . '&username=cabd&style=full';
	

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	curl_setopt($ch, CURLOPT_URL,$url);

	$result=curl_exec($ch);

	curl_close($ch);

	$decode = json_decode($result,true);
	$CountryTopo30=$decode["gtopo30"];
    
	$output['status']['code'] = "200";
	$output['status']['name'] = "ok";
	$output['status']['description'] = "mission saved";
	$output['status']['returnedIn'] = (microtime(true) - $executionStartTime) / 1000 . " ms";
	$output['data'] = $CountryTopo30;

	header('Content-Type: application/json; charset=UTF-8');

	echo json_encode($output); 
?>
