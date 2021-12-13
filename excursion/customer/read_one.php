<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');

// include database and object files
include_once '../config/database.php';
include_once '../objects/customer.php';


// get database connection
$database = new Database();
$db = $database->getConnection();

// prepare customer object
$customer = new Customer($db);

// set ID property of record to read
$customer->CustomerID = isset($_GET['CustomerID']) ? $_GET['CustomerID'] : die();

// read the details of customer to be edited
$customer->readOne();

if($customer->FirstName!=null){
    // create array
    $customer_arr = array(
        "CustomerID" =>  $customer->CustomerID,
        "FirstName" => $customer->FirstName,
        "LastName" => $customer->LastName,
        "Address" => $customer->Address,
        "City" => $customer->City,
        "Country" => $customer->Country,
        "PostalCode" => $customer->PostalCode,
        "PhoneNumber" => $customer->PhoneNumber,
        "DOB" => $customer->DOB,
        "EContact"=>$customer->EContact,
        "HotelID" => $customer->HotelID,
        "AccountUsername" => $customer->AccountUsername
    );

    // set response code - 200 OK
    http_response_code(200);

    // make it json format
    echo json_encode($customer_arr);
}

else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user customer does not exist
    echo json_encode(array("message" => "Customer does not exist."));
}

?>
