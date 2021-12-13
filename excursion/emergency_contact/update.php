<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
include_once '../config/database.php';
include_once '../objects/emergency_contact.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare emergency contact object
$emergency = new Emergency_Contact($db);

// get name to be edited
$data = json_decode(file_get_contents("php://input"));

// set name of emergency contact to be edited
$emergency->Name = $data->Name;

// set emergency contact property values
$emergency->PhoneNumber = $data->PhoneNumber;
$emergency->Relationship = $data->Relationship;
$emergency->CustomerID = $data->CustomerID;

// update the emergency contact
if($emergency->update()){

    // set response code - 200 ok
    http_response_code(200);

    // tell the user
    echo json_encode(array("message" => "Emergency contact was updated."));
}
//ADD CODE HERE TO LET USER KNOW THAT THE Contact DOESN'T EXIST


// if unable to update the contact, tell the user
else{
    // set response code - 503 service unavailable
    http_response_code(503);

    // tell the user
    echo json_encode(array("message" => "Unable to update emergency contact."));
}
?>