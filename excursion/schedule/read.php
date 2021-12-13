<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/schedule.php';

// instantiate database and booking object
$database = new Database();
$db = $database->getConnection();

// initialize object
$schedule = new Schedule($db);

//query schedule
$stmt = $schedule->read();
$num = $stmt->rowCount();

if($num > 0){
    $schedule_arr = array();
    $schedule_arr["Schedule"] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $schedule_row=array(
            "TimeSlotID"=>$TimeSlotID,
            "Start"=>$Start,
            "End"=>$End,
            "Date"=>$Date
        );
        array_push($schedule_arr["Schedule"], $schedule_row);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show schedule data in json format
    echo json_encode($schedule_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "No time slots found.")
    );
}
?>