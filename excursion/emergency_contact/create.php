<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get database connection
include_once '../config/database.php';

// instantiate emergency contact object
include_once '../objects/emergency_contact.php';

$database = new Database();
$db = $database->getConnection();

$emergency = new Emergency_Contact($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));
// make sure data is not empty
if(
    !empty($data->Name) &&
    !empty($data->PhoneNumber) &&
    !empty($data->Relationship) &&
    !empty($data->CustomerID)
){

    // set emergency contact property values
    $emergency->Name = $data->Name;
    $emergency->PhoneNumber = $data->PhoneNumber;
    $emergency->Relationship = $data->Relationship;
    $emergency->CustomerID = $data->CustomerID;


    // create the emergency contact
    if($emergency->create()){

        // set response code - 201 created
        http_response_code(201);

        // tell the user
        echo json_encode(array("message" => "An emergency contact was created."));
    }

    // if unable to create the emergency contact, tell the user
    else{

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to create emergency contact."));
    }
}

// tell the user data is incomplete
else{

    // set response code - 400 bad request
    http_response_code(400);

    // tell the user
    echo json_encode(array("message" => "Unable to create emergency contact. Data is incomplete."));
}
?>