<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // include database and object files
    include_once '../config/database.php';
    include_once '../objects/customer.php';

    // instantiate database and customer object
    $database = new Database();
    $db = $database->getConnection();

    // initialize object
    $customer = new Customer($db);

    //query customer
    $stmt = $customer->read(); //read customers
    $num = $stmt->rowCount();

    if($num > 0){
        $customer_arr = array();
        $customer_arr["Customers"] = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $customer_row=array(
              "CustomerID"=>$CustomerID,
              "FirstName"=>$FirstName,
              "LastName"=>$LastName,
              "Address"=>$Address,
              "City"=>$City,
              "Country"=>$Country,
              "PostalCode"=>$PostalCode,
              "PhoneNumber"=>$PhoneNumber,
              "DOB"=>$DOB,
              "EContact"=>$EContact,
              "HotelID"=>$HotelID,
              "AccountUsername"=>$AccountUsername
            );
            array_push($customer_arr["Customers"], $customer_row);
        }

        // set response code - 200 OK
        http_response_code(200);

        // show customer data in json format
        echo json_encode($customer_arr);
    }
    else{
        // set response code - 404 Not found
        http_response_code(404);

        // tell the user no products found
        echo json_encode(
            array("message" => "No customers found.")
        );
    }
?>