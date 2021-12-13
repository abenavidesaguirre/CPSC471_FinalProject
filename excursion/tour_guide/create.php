<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get database connection
include_once '../config/database.php';

// instantiate tour guide object
include_once '../objects/tour_guide.php';

$database = new Database();
$db = $database->getConnection();

$guide = new Tour_Guide($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
if(
    !empty($data->StaffID) &&
    !empty($data->Shift)
){

    // set tour guide property values
    $guide->StaffID = $data->StaffID;
    $guide->Shift = $data->Shift;


    // create the tour guide
    if($guide->create()){

        // set response code - 201 created
        http_response_code(201);

        // tell the user
        echo json_encode(array("message" => "A tour guide was created."));
    }

    // if unable to create the guide, tell the user
    else{

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to create tour guide."));
    }
}

// tell the user data is incomplete
else{

    // set response code - 400 bad request
    http_response_code(400);

    // tell the user
    echo json_encode(array("message" => "Unable to create tour guide. Data is incomplete."));
}
?>