<?php
class Hotel
{
    private $conn;
    private $table_name = "Hotel";

    public $PartnerID;
    public $Name;
    public $PhoneNumber;
    public $Address;
    public $City;
    public $PostalCode;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read hotels
    function read(){
        // select all query
        $query = "SELECT *
                    FROM " . $this->table_name . "
            ";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    //create customer
    function create(){
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                PartnerID=:PartnerID, Name=:Name, PhoneNumber=:PhoneNumber, Address=:Address, City=:City,
                PostalCode=:PostalCode";

        $stmt = $this->conn->prepare($query);

        $this->PartnerID=htmlspecialchars(strip_tags($this->PartnerID));
        $this->Name=htmlspecialchars(strip_tags($this->Name));
        $this->PhoneNumber=htmlspecialchars(strip_tags($this->PhoneNumber));
        $this->Address=htmlspecialchars(strip_tags($this->Address));
        $this->City=htmlspecialchars(strip_tags($this->City));
        $this->PostalCode=htmlspecialchars(strip_tags($this->PostalCode));

        $stmt->bindParam(":PartnerID", $this->PartnerID);
        $stmt->bindParam(":Name", $this->Name);
        $stmt->bindParam(":PhoneNumber", $this->PhoneNumber);
        $stmt->bindParam(":Address", $this->Address);
        $stmt->bindParam(":City", $this->City);
        $stmt->bindParam(":PostalCode", $this->PostalCode);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }
}
?>