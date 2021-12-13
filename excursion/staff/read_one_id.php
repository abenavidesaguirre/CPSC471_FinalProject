<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

// include database and object files
include_once '../config/database.php';
include_once '../objects/staff.php';


// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare staff object
$staff = new Staff($db);

// set ID property of record to read
$staff->StaffID = isset($_GET['StaffID']) ? $_GET['StaffID'] : die();

// read the details of staff to be edited
$staff->readOne();

if($staff->StaffID!=null){
    // create array
    $staff_arr = array(
        "StaffID" =>  $staff->StaffID,
        "SIN" =>  $staff->SIN,
        "FirstName" => $staff->FirstName,
        "LastName" => $staff->LastName,
        "Address" => $staff->Address,
        "City" => $staff->City,
        "PostalCode" => $staff->PostalCode,
        "PhoneNumber" => $staff->PhoneNumber,
        "DOB" => $staff->DOB,
        "Mgr_SIN"=>$staff->Mgr_SIN,
        "AccountUsername" => $staff->AccountUsername
    );

    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($staff_arr);
}

else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user staff member does not exist
    echo json_encode(array("message" => "Staff member does not exist."));
}

?>
