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
include_once '../objects/schedule.php';

$database = new Database();
$db = $database->getConnection();

$schedule = new Schedule($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
if(
    !empty($data->TimeSlotID) &&
    !empty($data->Start) &&
    !empty($data->End) &&
    !empty($data->Date)
){

    // set schedule property values
    $schedule->TimeSlotID = $data->TimeSlotID;
    $schedule->Start = $data->Start;
    $schedule->End = $data->End;
    $schedule->Date = $data->Date;

    // create the time slot
    if($schedule->create()){

        // set response code - 201 created
        http_response_code(201);

        // tell the user
        echo json_encode(array("message" => "A new time slot was created."));
    }

    // if unable to create the time slot, tell the user
    else{

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to create time slot."));
    }
}

// tell the user data is incomplete
else{

    // set response code - 400 bad request
    http_response_code(400);

    // tell the user
    echo json_encode(array("message" => "Unable to create time slot. Data is incomplete."));
}
?>