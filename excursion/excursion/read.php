<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/excursion.php';

// instantiate database and excursion object
$database = new Database();
$db = $database->getConnection();

// initialize object
$excursion = new Excursion($db);

//query customer
$stmt = $excursion->read(); //read excursions
$num = $stmt->rowCount();

if($num > 0){
    $excursion_arr = array();
    $excursion_arr["Excursion"] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $excursion_row=array(
            "Name"=>$Name,
            "Duration"=>$Duration,
            "Cost"=>$Cost,
            "Months"=>$Months,
            "MaxParticipants"=>$MaxParticipants,
            "CoordinatorID"=>$CoordinatorID
        );
        array_push($excursion_arr["Excursion"], $excursion_row);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show products data in json format
    echo json_encode($excursion_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no excursions found
    echo json_encode(
        array("message" => "No excursions found.")
    );
}
?>