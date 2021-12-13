<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// include database and object files
include_once '../config/database.php';
include_once '../objects/customer.php';

// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare customer object
$customer = new Customer($db);

// get id of customer to be edited
$data = json_decode(file_get_contents("php://input"));

// set ID property of customer to be edited
$customer->CustomerID = $data->CustomerID;

// set customer property values
$customer->FirstName = $data->FirstName;
$customer->LastName = $data->LastName;
$customer->Address = $data->Address;
$customer->City = $data->City;
$customer->Country = $data->Country;
$customer->PostalCode = $data->PostalCode;
$customer->PhoneNumber = $data->PhoneNumber;
$customer->DOB = $data->DOB;
$customer->EContact = $data->EContact;
$customer->HotelID = $data->HotelID;
$customer->AccountUsername = $data->AccountUsername;

// update the customer
if($customer->update()){

    // set response code - 200 ok
    http_response_code(200);

    // tell the user
    echo json_encode(array("message" => "Customer was updated."));
}
//ADD CODE HERE TO LET USER KNOW THAT THE CUSTOMER ID DOESN'T EXIST


// if unable to update the customer, tell the user
else{
    // set response code - 503 service unavailable
    http_response_code(503);

    // tell the user
    echo json_encode(array("message" => "Unable to update customer."));
}
?>