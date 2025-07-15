<?php
error_reporting(E_ERROR);
define( 'DB_HOST','localhost' ); // set database host
define( 'DB_USER','dtsuser' ); // set database user
define( 'DB_PASS','2l#d$JEg9A&=' ); // set database password
define( 'DB_NAME','doulostheologicalseminary'); // set database name
define( 'SEND_ERRORS_TO','dts.thiruvalla@gmail.com'); //set email notification email address
define( 'DISPLAY_DEBUG', true ); //display db errors?


#Common
//require_once('cache.php');
require_once('language.php');
require_once('request.php');
require_once('response.php');
require_once('session.php');
require_once('functions.php');

require_once( 'class.db.php' );
$db_obj = new DB();

$root		= '';
$server		= "https://".$_SERVER['HTTP_HOST'];
$root_path	= $server.$root.'/';
$admin_path	= $server.$root.'/admin/';
$cur_page   = $server.$_SERVER['REQUEST_URI'];
?>