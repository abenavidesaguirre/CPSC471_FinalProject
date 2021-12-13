<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

// include database and object files
include_once '../config/database.php';
include_once '../objects/hotel.php';

// instantiate database and booking object
$database = new Database();
$db = $database->getConnection();

// initialize object
$hotel = new Hotel($db);

//query hotel
$stmt = $hotel->read(); //read hotels
$num = $stmt->rowCount();

if($num > 0){
    $hotel_arr = array();
    $hotel_arr["Hotel"] = array();

    while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        extract($row);

        $hotel_row=array(
            "PartnerID"=>$PartnerID,
            "Name"=>$Name,
            "PhoneNumber"=>$PhoneNumber,
            "Address"=>$Address,
            "City"=>$City,
            "PostalCode"=>$PostalCode
        );
        array_push($hotel_arr["Hotel"], $hotel_row);
    }

    // set response code - 200 OK
    http_response_code(200);

    // show products data in json format
    echo json_encode($hotel_arr);
}
else{
    // set response code - 404 Not found
    http_response_code(404);

    // tell the user no products found
    echo json_encode(
        array("message" => "No hotels found.")
    );
}
?>