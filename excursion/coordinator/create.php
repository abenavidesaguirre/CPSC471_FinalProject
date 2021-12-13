<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get database connection
include_once '../config/database.php';

// instantiate coordinator object
include_once '../objects/coordinator.php';

$database = new Database();
$db = $database->getConnection();

$coord = new Coordinator($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
if(
    !empty($data->StaffID) &&
    !empty($data->Shift)
){

    // set coordinator property values
    $coord->StaffID = $data->StaffID;
    $coord->Shift = $data->Shift;


    // create the coordinator
    if($coord->create()){

        // set response code - 201 created
        http_response_code(201);

        // tell the user
        echo json_encode(array("message" => "A coordinator was created."));
    }

    // if unable to create the coordinator, tell the user
    else{

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to create coordinator."));
    }
}

// tell the user data is incomplete
else{

    // set response code - 400 bad request
    http_response_code(400);

    // tell the user
    echo json_encode(array("message" => "Unable to create coordinator. Data is incomplete."));
}
?>