<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get database connection
include_once '../config/database.php';

// instantiate staff object
include_once '../objects/staff.php';

$database = new Database();
$db = $database->getConnection();

$staff = new Staff($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));
// make sure data is not empty
if(
    !empty($data->StaffID) &&
    !empty($data->SIN) &&
    !empty($data->FirstName) &&
    !empty($data->LastName) &&
    !empty($data->Address) &&
    !empty($data->City) &&
    !empty($data->PostalCode) &&
    !empty($data->PhoneNumber) &&
    !empty($data->DOB) &&
    !empty($data->Mgr_SIN) &&
    !empty($data->AccountUsername)
){

    // set staff property values
    $staff->StaffID = $data->StaffID;
    $staff->SIN = $data->SIN;
    $staff->FirstName = $data->FirstName;
    $staff->LastName = $data->LastName;
    $staff->Address = $data->Address;
    $staff->City = $data->City;
    $staff->PostalCode = $data->PostalCode;
    $staff->PhoneNumber = $data->PhoneNumber;
    $staff->DOB = $data->DOB;
    $staff->Mgr_SIN = $data->Mgr_SIN;
    $staff->AccountUsername = $data->AccountUsername;


    // create the staff
    if($staff->create()){

        // set response code - 201 created
        http_response_code(201);

        // tell the user
        echo json_encode(array("message" => "A staff member was created."));
    }

    // if unable to create the staff member, tell the user
    else{

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to create staff member."));
    }
}

// tell the user data is incomplete
else{

    // set response code - 400 bad request
    http_response_code(400);

    // tell the user
    echo json_encode(array("message" => "Unable to create staff member. Data is incomplete."));
}
?>