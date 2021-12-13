<?php
class Excursion
{
    private $conn;
    private $table_name = "Excursion";

    public $Name;
    public $Duration;
    public $Cost;
    public $Months;
    public $MaxParticipants;
    public $CoordinatorID;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read excursion
    function read(){
        // select all query
        $query = "SELECT *
                    FROM " . $this->table_name . "
            ";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    //create excursion
    function create(){
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                Name=:Name, Duration=:Duration, Cost=:Cost, Months=:Months, MaxParticipants=:MaxParticipants,
                CoordinatorID=:CoordinatorID";

        $stmt = $this->conn->prepare($query);

        $this->Name=htmlspecialchars(strip_tags($this->Name));
        $this->Duration=htmlspecialchars(strip_tags($this->Duration));
        $this->Cost=htmlspecialchars(strip_tags($this->Cost));
        $this->Months=htmlspecialchars(strip_tags($this->Months));
        $this->MaxParticipants=htmlspecialchars(strip_tags($this->MaxParticipants));
        $this->CoordinatorID=htmlspecialchars(strip_tags($this->CoordinatorID));

        $stmt->bindParam(":Name", $this->Name);
        $stmt->bindParam(":Duration", $this->Duration);
        $stmt->bindParam(":Cost", $this->Cost);
        $stmt->bindParam(":Months", $this->Months);
        $stmt->bindParam(":MaxParticipants", $this->MaxParticipants);
        $stmt->bindParam(":CoordinatorID", $this->CoordinatorID);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }

    // used to get info for 1 excursion
    function readOne(){
        // query to read single record
        $query = "SELECT
                    Name, Duration, Cost, Months, MaxParticipants, CoordinatorID
                FROM
                " . $this->table_name . " 
            WHERE
                Name = ?
        ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(1, $this->Name);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        $this->Name = $row['Name'];
        $this->Duration = $row['Duration'];
        $this->Cost = $row['Cost'];
        $this->Months = $row['Months'];
        $this->MaxParticipants = $row['MaxParticipants'];
        $this->CoordinatorID = $row['CoordinatorID'];
    }

    // update the excursion
    function update(){

        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
                Duration = :Duration,
                Cost = :Cost,
                Months = :Months,
                MaxParticipants = :MaxParticipants,
                CoordinatorID = :CoordinatorID
            WHERE
                Name = :Name";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        //sanitize
        $this->Name=htmlspecialchars(strip_tags($this->Name));
        $this->Duration=htmlspecialchars(strip_tags($this->Duration));
        $this->Cost=htmlspecialchars(strip_tags($this->Cost));
        $this->Months=htmlspecialchars(strip_tags($this->Months));
        $this->MaxParticipants=htmlspecialchars(strip_tags($this->MaxParticipants));
        $this->CoordinatorID=htmlspecialchars(strip_tags($this->CoordinatorID));

        //bind new values
        $stmt->bindParam(":Name", $this->Name);
        $stmt->bindParam(":Duration", $this->Duration);
        $stmt->bindParam(":Cost", $this->Cost);
        $stmt->bindParam(":Months", $this->Months);
        $stmt->bindParam(":MaxParticipants", $this->MaxParticipants);
        $stmt->bindParam(":CoordinatorID", $this->CoordinatorID);


        // execute the query
        if($stmt->execute()){
            return true;
        }

        return false;
    }


}