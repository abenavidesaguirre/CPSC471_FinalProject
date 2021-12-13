<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/tour_guide.php';

// instantiate database and tour guide object
$database = new Database();
$db = $database->getConnection();

// initialize object
$guide = new Tour_Guide($db);

//query tour guide
$stmt = $guide->read(); //read tour guides
$num = $stmt->rowCount();

if($num > 0){
    $guide_arr = array();
    $guide_arr["Tour_Guide"] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $guide_row=array(
            "StaffID"=>$StaffID,
            "Shift"=>$Shift
        );
        array_push($guide_arr["Tour_Guide"], $guide_row);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show guide data in json format
    echo json_encode($guide_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no guides found
    echo json_encode(
        array("message" => "No tour guides found.")
    );
}
?>