<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
include_once '../config/database.php';
include_once '../objects/account.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare account object
$account = new Account($db);

// get id of account to be edited
$data = json_decode(file_get_contents("php://input"));

// set ID property of account to be edited
$account->Username = $data->Username;

// set account property values
$account->Password = $data->Password;
$account->Email = $data->Email;
$account->AccessLevel = $data->AccessLevel;

// update the account
    if ($account->update()) {

        // set response code - 200 ok
        http_response_code(200);

        // tell the user
        echo json_encode(array("message" => "Account was updated."));
    } // if unable to update the product, tell the user
    else {

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to update Account."));
    }
?>