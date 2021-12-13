<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/booking.php';

// instantiate database and booking object
$database = new Database();
$db = $database->getConnection();

// initialize object
$booking = new Booking($db);

//query booking
$stmt = $booking->read(); //read bookings
$num = $stmt->rowCount();

if($num > 0){
    $booking_arr = array();
    $booking_arr["Booking"] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $booking_row=array(
            "BookingID"=>$BookingID,
            "NumAdults"=>$NumAdults,
            "NumMinors"=>$NumMinors,
            "Cost"=>$Cost,
            "TimeSlot"=>$TimeSlot
        );
        array_push($booking_arr["Booking"], $booking_row);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show booking data in json format
    echo json_encode($booking_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no bookings found
    echo json_encode(
        array("message" => "No bookings found.")
    );
}
?>