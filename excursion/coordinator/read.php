<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/coordinator.php';

// instantiate database and tour guide object
$database = new Database();
$db = $database->getConnection();

// initialize object
$coord = new Coordinator($db);

//query coordinator
$stmt = $coord->read(); //read coordinators
$num = $stmt->rowCount();

if($num > 0){
    $coord_arr = array();
    $coord_arr["Coordinator"] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $coord_row=array(
            "StaffID"=>$StaffID,
            "Shift"=>$Shift
        );
        array_push($coord_arr["Coordinator"], $coord_row);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show coordinator data in json format
    echo json_encode($coord_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no coordinators found
    echo json_encode(
        array("message" => "No coordinators found.")
    );
}
?>