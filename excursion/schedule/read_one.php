<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

// include database and object files
include_once '../config/database.php';
include_once '../objects/schedule.php';


// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare schedule object
$schedule = new Schedule($db);

// set TimeSlotID of record to read
$schedule->TimeSlotID = isset($_GET['TimeSlotID']) ? $_GET['TimeSlotID'] : die();

// read the details of time slot to be edited
$schedule->readOne();

if($schedule->TimeSlotID!=null){
    // create array
    $schedule_arr = array(
        "TimeSlotID" =>  $schedule->TimeSlotID,
        "Start" => $schedule->Start,
        "End" => $schedule->End,
        "Date" => $schedule->Date
    );

    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($schedule_arr);
}

else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user time slot does not exist
    echo json_encode(array("message" => "Time slot does not exist."));
}

?>
