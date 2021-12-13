<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

// include database and object files
include_once '../config/database.php';
include_once '../objects/booking.php';


// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare booking object
$booking = new Booking($db);

// set ID property of record to read
$booking->BookingID = isset($_GET['BookingID']) ? $_GET['BookingID'] : die();

// read the details of booking to be edited
$booking->readOne();

if($booking->BookingID!=null){
    // create array
    $booking_arr = array(
        "BookingID" =>  $booking->BookingID,
        "NumAdults" => $booking->NumAdults,
        "NumMinors" => $booking->NumMinors,
        "Cost" => $booking->Cost,
        "TimeSlot" => $booking->TimeSlot
    );

    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($booking_arr);
}

else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user booking does not exist
    echo json_encode(array("message" => "Booking does not exist."));
}

?>
