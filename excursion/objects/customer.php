<?php
class Customer
{
    private $conn;
    private $table_name = "customer";

    public $CustomerID;
    public $FirstName;
    public $LastName;
    public $Address;
    public $City;
    public $Country;
    public $PostalCode;
    public $PhoneNumber;
    public $DOB;
    public $EContact;
    public $HotelID;
    public $AccountUsername;

    public function __construct($db){
        $this->conn = $db;
    }

    //read customers
    function read(){
        // select all query
        $query = "SELECT *
                    FROM " . $this->table_name . " c
            ORDER BY
                c.CustomerID ASC"; //ascending order

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    //create customer
    function create(){
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                CustomerID=:CustomerID, FirstName=:FirstName, LastName=:LastName, Address=:Address, City=:City, 
                Country=:Country, PostalCode=:PostalCode, PhoneNumber=:PhoneNumber, DOB=:DOB, EContact=:EContact, HotelID=:HotelID, 
                AccountUsername=:AccountUsername";

        $stmt = $this->conn->prepare($query);

        $this->CustomerID=htmlspecialchars(strip_tags($this->CustomerID));
        $this->FirstName=htmlspecialchars(strip_tags($this->FirstName));
        $this->LastName=htmlspecialchars(strip_tags($this->LastName));
        $this->Address=htmlspecialchars(strip_tags($this->Address));
        $this->City=htmlspecialchars(strip_tags($this->City));
        $this->Country=htmlspecialchars(strip_tags($this->Country));
        $this->PostalCode=htmlspecialchars(strip_tags($this->PostalCode));
        $this->PhoneNumber=htmlspecialchars(strip_tags($this->PhoneNumber));
        $this->DOB=htmlspecialchars(strip_tags($this->DOB));
        $this->EContact=htmlspecialchars(strip_tags($this->EContact));
        $this->HotelID=htmlspecialchars(strip_tags($this->HotelID));
        $this->AccountUsername=htmlspecialchars(strip_tags($this->AccountUsername));

        $stmt->bindParam(":CustomerID", $this->CustomerID);
        $stmt->bindParam(":FirstName", $this->FirstName);
        $stmt->bindParam(":LastName", $this->LastName);
        $stmt->bindParam(":Address", $this->Address);
        $stmt->bindParam(":City", $this->City);
        $stmt->bindParam(":Country", $this->Country);
        $stmt->bindParam(":PostalCode", $this->PostalCode);
        $stmt->bindParam(":PhoneNumber", $this->PhoneNumber);
        $stmt->bindParam(":DOB", $this->DOB);
        $stmt->bindParam(":EContact", $this->EContact);
        $stmt->bindParam(":HotelID", $this->HotelID);
        $stmt->bindParam(":AccountUsername", $this->AccountUsername);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }

    // used to get info for 1 customer
    function readOne(){
        // query to read single record
        $query = "SELECT
                    CustomerID, FirstName, LastName, Address, City, Country, PostalCode, PhoneNumber, DOB, EContact, HotelID, AccountUsername
                FROM
                " . $this->table_name . " 
            WHERE
                CustomerID = ?
        ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of customer to be updated
        $stmt->bindParam(1, $this->CustomerID);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        $this->CustomerID = $row['CustomerID'];
        $this->FirstName = $row['FirstName'];
        $this->LastName = $row['LastName'];
        $this->Address = $row['Address'];
        $this->City = $row['City'];
        $this->Country = $row['Country'];
        $this->PostalCode = $row['PostalCode'];
        $this->PhoneNumber = $row['PhoneNumber'];
        $this->DOB = $row['DOB'];
        $this->EContact = $row['EContact'];
        $this->HotelID = $row['HotelID'];
        $this->AccountUsername = $row['AccountUsername'];
    }

    // update the customer
    function update(){
        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
                FirstName = :FirstName,
                LastName = :LastName,
                Address = :Address,
                City = :City,
                Country = :Country,
                PostalCode = :PostalCode,
                PhoneNumber = :PhoneNumber,
                DOB = :DOB,
                EContact = :EContact,
                HotelID = :HotelID,
                AccountUsername = :AccountUsername
            WHERE
                CustomerID = :CustomerID";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->FirstName=htmlspecialchars(strip_tags($this->FirstName));
        $this->LastName=htmlspecialchars(strip_tags($this->LastName));
        $this->Address=htmlspecialchars(strip_tags($this->Address));
        $this->City=htmlspecialchars(strip_tags($this->City));
        $this->Country=htmlspecialchars(strip_tags($this->Country));
        $this->PostalCode=htmlspecialchars(strip_tags($this->PostalCode));
        $this->PhoneNumber=htmlspecialchars(strip_tags($this->PhoneNumber));
        $this->DOB=htmlspecialchars(strip_tags($this->DOB));
        $this->EContact=htmlspecialchars(strip_tags($this->EContact));
        $this->HotelID=htmlspecialchars(strip_tags($this->HotelID));
        $this->AccountUsername=htmlspecialchars(strip_tags($this->AccountUsername));
        $this->CustomerID=htmlspecialchars(strip_tags($this->CustomerID));

        // bind new values
        $stmt->bindParam(":FirstName", $this->FirstName);
        $stmt->bindParam(":LastName", $this->LastName);
        $stmt->bindParam(":Address", $this->Address);
        $stmt->bindParam(":City", $this->City);
        $stmt->bindParam(":Country", $this->Country);
        $stmt->bindParam(":PostalCode", $this->PostalCode);
        $stmt->bindParam(":PhoneNumber", $this->PhoneNumber);
        $stmt->bindParam(":DOB", $this->DOB);
        $stmt->bindParam(":EContact", $this->EContact);
        $stmt->bindParam(":HotelID", $this->HotelID);
        $stmt->bindParam(":AccountUsername", $this->AccountUsername);
        $stmt->bindParam(":CustomerID", $this->CustomerID);

        // execute the query
        if($stmt->execute()){
            return true;
        } //NEED TO CHECK IF THE OBJECT DOESN'T EXIST

        return false;
    }

    // delete the customer
    function delete(){

        // delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE CustomerID = ?";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->CustomerID=htmlspecialchars(strip_tags($this->CustomerID));

        // bind id of record to delete
        $stmt->bindParam(1, $this->CustomerID);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }
}
?>












