<?php

/*	Install the latest docs file from code.google.com
*/

// might need this if there are redirects going on: CURLOPT_FOLLOWLOCATION
// if we use the above, we may need to set CURLOPT_MAXREDIRS

$dst = substr(__FILE__, 0, -19) . 'xml/api-docs.xml';
$url = 'http://jquery-api-browser.googlecode.com/svn/trunk/api-docs.xml';

// backup old docs in case there is a problem
exec('mv ' . $dst . ' ' . $dst . '.bak');

// get the file via curl
$ch = curl_init($url);
$fp = fopen($dst, 'w');
curl_setopt($ch, CURLOPT_FILE,           $fp);
//curl_setopt($ch, CURLOPT_MUTE,           1);
curl_setopt($ch, CURLOPT_MUTE,           0);
curl_setopt($ch, CURLOPT_HEADER,         0);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_BINARYTRANSFER, 1);
curl_setopt($ch, CURLOPT_USERAGENT,      'jQuery Reference Widget 1.0 (andrew.hedges.name/widgets)');
$result = curl_exec($ch);
curl_close($ch);
fclose($fp);

if ($result) {
	$return = 'SUCCESS: XML downloaded and installed successfully';
} else {
	$return = 'ERROR: There was a problem downloading the file.';
	// move old docs back
	exec('mv ' . $dst . '.bak' . ' ' . $dst);
}

fwrite(STDOUT, $return);