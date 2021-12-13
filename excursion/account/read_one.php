<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

// include database and object files
include_once '../config/database.php';
include_once '../objects/account.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare product object
$account = new Account($db);

// set ID property of record to read
$account->Username = isset($_GET['Username']) ? $_GET['Username'] : die();

// read the details of product to be edited
$account->readOne();

if($account->Password!=null){
    // create array
    $account_arr = array(
        "Username" =>  $account->Username,
        "Password" => $account->Password,
        "Email" => $account->Email,
        "AccessLevel" => $account->AccessLevel
    );

    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($account_arr);
}

else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user product does not exist
    echo json_encode(array("message" => "Account does not exist."));
}
?>