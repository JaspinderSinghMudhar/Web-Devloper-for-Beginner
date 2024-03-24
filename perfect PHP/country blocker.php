<?php

 function is_user_from_us() {
 	$ip = $_SERVER['REMOTE_ADDR'];
 	$response = file_get_contents("http://ip-api.com/json/$ip");
 	if ($response !== false) {
 		$data = json_decode($response, true);
 		return $data['countryCode'] === 'US' || $data['countryCode'] === 'IN' || $data['countryCode'] === 'NL';
 	} else {
 		error_log('IP geolocation API request failed');
 		return false;
 	}
 }
 if (is_user_from_us()) {
 	echo "<script>window.location.href='https://blog.jaspinder-singh.com';</script>";
 	exit();
 } else {}
?>
