<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
include_once '../config/database.php';
include_once '../objects/staff.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare staff object
$staff = new Staff($db);

// get id of staff to be edited
$data = json_decode(file_get_contents("php://input"));

// set ID property of staff to be edited
$staff->StaffID = $data->StaffID;

// set staff property values
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

// update the staff member
if($staff->update()){

    // set response code - 200 ok
    http_response_code(200);

    // tell the user
    echo json_encode(array("message" => "Staff member was updated."));
}
//ADD CODE HERE TO LET USER KNOW THAT THE StaffID DOESN'T EXIST


// if unable to update the staff member, tell the user
else{
    // set response code - 503 service unavailable
    http_response_code(503);

    // tell the user
    echo json_encode(array("message" => "Unable to update staff member."));
}
?>