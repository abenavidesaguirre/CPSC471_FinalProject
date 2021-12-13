<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
include_once '../config/database.php';
include_once '../objects/excursion.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare excursion object
$excursion = new Excursion($db);

// get id of excursion to be edited
$data = json_decode(file_get_contents("php://input"));

// set Name property of excursion to be edited
$excursion->Name = $data->Name;

// set excursion property values
$excursion->Duration = $data->Duration;
$excursion->Cost = $data->Cost;
$excursion->Months = $data->Months;
$excursion->MaxParticipants = $data->MaxParticipants;
$excursion->CoordinatorID = $data->CoordinatorID;

// update the excursion
if($excursion->update()){

    // set response code - 200 ok
    http_response_code(200);

    // tell the user
    echo json_encode(array("message" => "Excursion was updated."));
}

// if unable to update the excursion, tell the user
else{
    // set response code - 503 service unavailable
    http_response_code(503);

    // tell the user
    echo json_encode(array("message" => "Unable to update excursion."));
}
?>