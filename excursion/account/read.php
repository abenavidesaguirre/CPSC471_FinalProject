<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // include database and object files
    include_once '../config/database.php';
    include_once '../objects/account.php'; //NEED TO ADD FOR ANY DBS

    // instantiate database and product object
    $database = new Database();
    $db = $database->getConnection();

    // initialize object
    $account = new Account($db); //ADD FOR EACH OBJECT

    //query account
    $stmt = $account->read(); //read account
    $num = $stmt->rowCount();

    if($num > 0){
        $account_arr = array();
        $account_arr["Account"] = array();

        while($row = $stmt->fetch(PDO::FETCH_ASSOC)){
            extract($row);

            $account_row=array(
              "Username"=>$Username,
              "Password"=>$Password,
              "Email"=>$Email,
              "AccessLevel"=>$AccessLevel
            );
            array_push($account_arr["Account"], $account_row);
        }

        // set response code - 200 OK
        http_response_code(200);

        // show products data in json format
        echo json_encode($account_arr);
    }
    else{
        // set response code - 404 Not found
        http_response_code(404);

        // tell the user no products found
        echo json_encode(
            array("message" => "No accounts found.")
        );
    }
?>