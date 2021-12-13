<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get database connection
include_once '../config/database.php';

// instantiate customer object
include_once '../objects/customer.php';

$database = new Database();
$db = $database->getConnection();

$customer = new Customer($db);

// get posted data
$data = json_decode(file_get_contents("php://input"));

// make sure data is not empty
if(
    !empty($data->CustomerID) &&
    !empty($data->FirstName) &&
    !empty($data->LastName) &&
    !empty($data->Address) &&
    !empty($data->City) &&
    !empty($data->Country) &&
    !empty($data->PostalCode) &&
    !empty($data->PhoneNumber) &&
    !empty($data->DOB) &&
    !empty($data->EContact) &&
    !empty($data->HotelID) &&
    !empty($data->AccountUsername)
){

    // set customer property values
    $customer->CustomerID = $data->CustomerID;
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


    // create the customer
    if($customer->create()){

        // set response code - 201 created
        http_response_code(201);

        // tell the user
        echo json_encode(array("message" => "A customer was created."));
    }

    // if unable to create the customer, tell the user
    else{

        // set response code - 503 service unavailable
        http_response_code(503);

        // tell the user
        echo json_encode(array("message" => "Unable to create customer."));
    }
}

// tell the user data is incomplete
else{

    // set response code - 400 bad request
    http_response_code(400);

    // tell the user
    echo json_encode(array("message" => "Unable to create customer. Data is incomplete."));
}
?>