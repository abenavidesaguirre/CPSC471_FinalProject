<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get database connection
include_once '../config/database.php';

// instantiate hotel object
include_once '../objects/hotel.php';

$database = new Database();
$db = $database->getConnection();

$hotel = new Hotel($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
if(
    !empty($data->PartnerID) &&
    !empty($data->Name) &&
    !empty($data->PhoneNumber) &&
    !empty($data->Address) &&
    !empty($data->City) &&
    !empty($data->PostalCode)
){

    // set hotel property values
    $hotel->PartnerID = $data->PartnerID;
    $hotel->Name = $data->Name;
    $hotel->PhoneNumber = $data->PhoneNumber;
    $hotel->Address = $data->Address;
    $hotel->City = $data->City;
    $hotel->PostalCode = $data->PostalCode;

    // create the hotel
    if($hotel->create()){

        // set response code - 201 created
        http_response_code(201);

        // tell the user
        echo json_encode(array("message" => "A hotel was created."));
    }

    // if unable to create the hotel, tell the user
    else{

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to create hotel."));
    }
}

// tell the user data is incomplete
else{

    // set response code - 400 bad request
    http_response_code(400);

    // tell the user
    echo json_encode(array("message" => "Unable to create hotel. Data is incomplete."));
}
?>