<?php
class Staff
{
    private $conn;
    private $table_name = "Staff";

    public $StaffID;
    public $SIN;
    public $FirstName;
    public $LastName;
    public $Address;
    public $City;
    public $PostalCode;
    public $PhoneNumber;
    public $DOB;
    public $Mgr_SIN;
    public $AccountUsername;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read staff
    function read()
    {
        // select all query
        $query = "SELECT *
                    FROM " . $this->table_name . " s
                ORDER BY
                    s.StaffID ASC"; //ascending order

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    //create staff
    function create()
    {
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                StaffID=:StaffID, SIN=:SIN, FirstName=:FirstName, LastName=:LastName, Address=:Address, City=:City, 
                PostalCode=:PostalCode, PhoneNumber=:PhoneNumber, DOB=:DOB, Mgr_SIN=:Mgr_SIN, AccountUsername=:AccountUsername";

        $stmt = $this->conn->prepare($query);

        $this->StaffID = htmlspecialchars(strip_tags($this->StaffID));
        $this->SIN = htmlspecialchars(strip_tags($this->SIN));
        $this->FirstName = htmlspecialchars(strip_tags($this->FirstName));
        $this->LastName = htmlspecialchars(strip_tags($this->LastName));
        $this->Address = htmlspecialchars(strip_tags($this->Address));
        $this->City = htmlspecialchars(strip_tags($this->City));
        $this->PostalCode = htmlspecialchars(strip_tags($this->PostalCode));
        $this->PhoneNumber = htmlspecialchars(strip_tags($this->PhoneNumber));
        $this->DOB = htmlspecialchars(strip_tags($this->DOB));
        $this->Mgr_SIN = htmlspecialchars(strip_tags($this->Mgr_SIN));
        $this->AccountUsername = htmlspecialchars(strip_tags($this->AccountUsername));

        $stmt->bindParam(":StaffID", $this->StaffID);
        $stmt->bindParam(":SIN", $this->SIN);
        $stmt->bindParam(":FirstName", $this->FirstName);
        $stmt->bindParam(":LastName", $this->LastName);
        $stmt->bindParam(":Address", $this->Address);
        $stmt->bindParam(":City", $this->City);
        $stmt->bindParam(":PostalCode", $this->PostalCode);
        $stmt->bindParam(":PhoneNumber", $this->PhoneNumber);
        $stmt->bindParam(":DOB", $this->DOB);
        $stmt->bindParam(":Mgr_SIN", $this->Mgr_SIN);
        $stmt->bindParam(":AccountUsername", $this->AccountUsername);

        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    // used to get info for 1 staff member by ID
    function readOne(){
        // query to read single record
        $query = "SELECT
                    StaffID, SIN, FirstName, LastName, Address, City, PostalCode, PhoneNumber, DOB, Mgr_SIN, AccountUsername
                FROM
                " . $this->table_name . " 
            WHERE
                StaffID = ?
        ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of staff member to be updated
        $stmt->bindParam(1, $this->StaffID);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        $this->StaffID = $row['StaffID'];
        $this->SIN = $row['SIN'];
        $this->FirstName = $row['FirstName'];
        $this->LastName = $row['LastName'];
        $this->Address = $row['Address'];
        $this->City = $row['City'];
        $this->PostalCode = $row['PostalCode'];
        $this->PhoneNumber = $row['PhoneNumber'];
        $this->DOB = $row['DOB'];
        $this->Mgr_SIN = $row['Mgr_SIN'];
        $this->AccountUsername = $row['AccountUsername'];
    }

    // update the staff member
    function update(){
        // update query
        $query = "UPDATE 
                " . $this->table_name . "
            SET
                SIN = :SIN,
                FirstName = :FirstName,
                LastName = :LastName,
                Address = :Address,
                City = :City,
                PostalCode = :PostalCode,
                PhoneNumber = :PhoneNumber,
                DOB = :DOB,
                Mgr_SIN = :Mgr_SIN,
                AccountUsername = :AccountUsername
            WHERE
                StaffID = :StaffID";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->StaffID=htmlspecialchars(strip_tags($this->StaffID));
        $this->SIN=htmlspecialchars(strip_tags($this->SIN));
        $this->FirstName=htmlspecialchars(strip_tags($this->FirstName));
        $this->LastName=htmlspecialchars(strip_tags($this->LastName));
        $this->Address=htmlspecialchars(strip_tags($this->Address));
        $this->City=htmlspecialchars(strip_tags($this->City));
        $this->PostalCode=htmlspecialchars(strip_tags($this->PostalCode));
        $this->PhoneNumber=htmlspecialchars(strip_tags($this->PhoneNumber));
        $this->DOB=htmlspecialchars(strip_tags($this->DOB));
        $this->Mgr_SIN=htmlspecialchars(strip_tags($this->Mgr_SIN));
        $this->AccountUsername=htmlspecialchars(strip_tags($this->AccountUsername));

        // bind new values
        $stmt->bindParam(":StaffID", $this->StaffID);
        $stmt->bindParam(":SIN", $this->SIN);
        $stmt->bindParam(":FirstName", $this->FirstName);
        $stmt->bindParam(":LastName", $this->LastName);
        $stmt->bindParam(":Address", $this->Address);
        $stmt->bindParam(":City", $this->City);
        $stmt->bindParam(":PostalCode", $this->PostalCode);
        $stmt->bindParam(":PhoneNumber", $this->PhoneNumber);
        $stmt->bindParam(":DOB", $this->DOB);
        $stmt->bindParam(":Mgr_SIN", $this->Mgr_SIN);
        $stmt->bindParam(":AccountUsername", $this->AccountUsername);

        // execute the query
        if($stmt->execute()){
            return true;
        } //NEED TO CHECK IF THE OBJECT DOESN'T EXIST

        return false;
    }

    // delete the staff member
    function delete(){

        // delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE StaffID = ?";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->StaffID=htmlspecialchars(strip_tags($this->StaffID));

        // bind id of record to delete
        $stmt->bindParam(1, $this->StaffID);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }
}
?>