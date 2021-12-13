<?php
class Emergency_Contact
{
    private $conn;
    private $table_name = "Emergency_Contact";

    public $Name;
    public $PhoneNumber;
    public $Relationship;
    public $CustomerID;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    //create emergency contact
    function create()
    {
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                Name=:Name, PhoneNumber=:PhoneNumber, Relationship=:Relationship, CustomerID=:CustomerID";

        $stmt = $this->conn->prepare($query);

        $this->Name = htmlspecialchars(strip_tags($this->Name));
        $this->PhoneNumber = htmlspecialchars(strip_tags($this->PhoneNumber));
        $this->Relationship = htmlspecialchars(strip_tags($this->Relationship));
        $this->CustomerID = htmlspecialchars(strip_tags($this->CustomerID));

        $stmt->bindParam(":Name", $this->Name);
        $stmt->bindParam(":PhoneNumber", $this->PhoneNumber);
        $stmt->bindParam(":Relationship", $this->Relationship);
        $stmt->bindParam(":CustomerID", $this->CustomerID);

        // execute query
        if ($stmt->execute()) {
            return true;
        }

        return false;
    }

    // update the emergency contact
    function update(){
        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
                PhoneNumber = :PhoneNumber,
                Relationship = :Relationship,
                CustomerID = :CustomerID
            WHERE
                Name = :Name";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        $this->PhoneNumber = htmlspecialchars(strip_tags($this->PhoneNumber));
        $this->Relationship = htmlspecialchars(strip_tags($this->Relationship));
        $this->CustomerID = htmlspecialchars(strip_tags($this->CustomerID));
        $this->Name = htmlspecialchars(strip_tags($this->Name));

        $stmt->bindParam(":PhoneNumber", $this->PhoneNumber);
        $stmt->bindParam(":Relationship", $this->Relationship);
        $stmt->bindParam(":CustomerID", $this->CustomerID);
        $stmt->bindParam(":Name", $this->Name);

        // execute the query
        if($stmt->execute()){
            return true;
        } //NEED TO CHECK IF THE OBJECT DOESN'T EXIST

        return false;
    }

    // delete the contact
    function delete(){

        // delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE Name = ?";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->Name=htmlspecialchars(strip_tags($this->Name));

        // bind id of record to delete
        $stmt->bindParam(1, $this->Name);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }

}
?>