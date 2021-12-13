<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/staff.php';

// instantiate database and booking object
$database = new Database();
$db = $database->getConnection();

// initialize object
$staff = new Staff($db);

//query staff
$stmt = $staff->read();
$num = $stmt->rowCount();

if($num > 0){
    $staff_arr = array();
    $staff_arr["Staff"] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $staff_row=array(
            "StaffID"=>$StaffID,
            "SIN"=>$SIN,
            "FirstName"=>$FirstName,
            "LastName"=>$LastName,
            "Address"=>$Address,
            "City"=>$City,
            "PostalCode"=>$PostalCode,
            "PhoneNumber"=>$PhoneNumber,
            "DOB"=>$DOB,
            "Mgr_SIN"=>$Mgr_SIN,
            "AccountUsername"=>$AccountUsername
        );
        array_push($staff_arr["Staff"], $staff_row);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show staff data in json format
    echo json_encode($staff_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no staff found
    echo json_encode(
        array("message" => "No staff members found.")
    );
}
?>