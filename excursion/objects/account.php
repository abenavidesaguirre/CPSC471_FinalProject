<?php
class Account
{
    private $conn;
    private $table_name = "Account";

    public $Username;
    public $Password;
    public $Email;
    public $AccessLevel;

    public function __construct($db){
        $this->conn = $db;
    }

    //read accounts
    function read(){
        // select all query
        $query = "SELECT *
                    FROM " . $this->table_name . "
            ";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    //create account
    function create(){
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                Username=:Username, Password=:Password, Email=:Email, AccessLevel=:AccessLevel";

        $stmt = $this->conn->prepare($query);

        $this->Username=htmlspecialchars(strip_tags($this->Username));
        $this->Password=htmlspecialchars(strip_tags($this->Password));
        $this->Email=htmlspecialchars(strip_tags($this->Email));
        $this->AccessLevel=htmlspecialchars(strip_tags($this->AccessLevel));

        $stmt->bindParam(":Username", $this->Username);
        $stmt->bindParam(":Password", $this->Password);
        $stmt->bindParam(":Email", $this->Email);
        $stmt->bindParam(":AccessLevel", $this->AccessLevel);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }

    // used to get info for 1 account
    function readOne(){
        // query to read single record
        $query = "SELECT
                    Username, Password, Email, AccessLevel
                FROM
                " . $this->table_name . " 
            WHERE
                Username = ?
        ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(1, $this->Username);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        $this->Username = $row['Username'];
        $this->Password = $row['Password'];
        $this->Email = $row['Email'];
        $this->AccessLevel = $row['AccessLevel'];
    }

    // update the account
    function update(){
        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
                Password = :Password,
                Email = :Email,
                AccessLevel = :AccessLevel
            WHERE
                Username = :Username";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->Username=htmlspecialchars(strip_tags($this->Username));
        $this->Password=htmlspecialchars(strip_tags($this->Password));
        $this->Email=htmlspecialchars(strip_tags($this->Email));
        $this->AccessLevel=htmlspecialchars(strip_tags($this->AccessLevel));

        $stmt->bindParam(":Username", $this->Username);
        $stmt->bindParam(":Password", $this->Password);
        $stmt->bindParam(":Email", $this->Email);
        $stmt->bindParam(":AccessLevel", $this->AccessLevel);

        // execute the query
        if($stmt->execute()){
            return true;
        } //NEED TO CHECK IF THE OBJECT DOESN'T EXIST

        return false;
    }

}
?>












