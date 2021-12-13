<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

// include database and object files
include_once '../config/database.php';
include_once '../objects/excursion.php';


// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare excursion object
$excursion = new Excursion($db);

// set Name property of record to read
$excursion->Name = isset($_GET['Name']) ? $_GET['Name'] : die();

// read the details of excursion to be edited
$excursion->readOne();

if($excursion->Name!=null){
    // create array
    $excursion_arr = array(
        "Name" =>  $excursion->Name,
        "Duration" => $excursion->Duration,
        "Cost" => $excursion->Cost,
        "Months" => $excursion->Months,
        "MaxParticipants" => $excursion->MaxParticipants,
        "CoordinatorID" => $excursion->CoordinatorID
    );

    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($excursion_arr);
}

else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user excursion does not exist
    echo json_encode(array("message" => "Excursion does not exist."));
}

?>
