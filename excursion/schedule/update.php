<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
include_once '../config/database.php';
include_once '../objects/schedule.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare schedule object
$schedule = new Schedule($db);

// get time slot to be edited
$data = json_decode(file_get_contents("php://input"));

// set TimeSlotID property of booking to be edited
$schedule->TimeSlotID = $data->TimeSlotID;

// set schedule property values
$schedule->Start = $data->Start;
$schedule->End = $data->End;
$schedule->Date = $data->Date;

// update the time slot
if($schedule->update()){

    // set response code - 200 ok
    http_response_code(200);

    // tell the user
    echo json_encode(array("message" => "Schedule was updated."));
}

// if unable to update the schedule, tell the user
else{

    // set response code - 503 service unavailable
    http_response_code(503);

    // tell the user
    echo json_encode(array("message" => "Unable to update schedule."));
}
?>