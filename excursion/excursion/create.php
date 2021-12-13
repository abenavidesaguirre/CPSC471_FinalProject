<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get database connection
include_once '../config/database.php';

// instantiate excursion object
include_once '../objects/excursion.php';

$database = new Database();
$db = $database->getConnection();

$excursion = new Excursion($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
if(
    !empty($data->Name) &&
    !empty($data->Duration) &&
    !empty($data->Cost) &&
    !empty($data->Months) &&
    !empty($data->MaxParticipants) &&
    !empty($data->CoordinatorID)
){

    // set excursion property values
    $excursion->Name = $data->Name;
    $excursion->Duration = $data->Duration;
    $excursion->Cost = $data->Cost;
    $excursion->Months = $data->Months;
    $excursion->MaxParticipants = $data->MaxParticipants;
    $excursion->CoordinatorID = $data->CoordinatorID;

    // create the product
    if($excursion->create()){

        // set response code - 201 created
        http_response_code(201);

        // tell the user
        echo json_encode(array("message" => "An excursion was created."));
    }

    // if unable to create the product, tell the user
    else{

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to create excursion."));
    }
}

// tell the user data is incomplete
else{

    // set response code - 400 bad request
    http_response_code(400);

    // tell the user
    echo json_encode(array("message" => "Unable to create excursion. Data is incomplete."));
}
?>