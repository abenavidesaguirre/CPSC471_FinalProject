<?php
class Booking
{
    private $conn;
    private $table_name = "Booking";

    public $BookingID;
    public $NumAdults;
    public $NumMinors;
    public $Cost;
    public $TimeSlot;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read bookings
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
                BookingID=:BookingID, NumAdults=:NumAdults, NumMinors=:NumMinors, Cost=:Cost, TimeSlot=:TimeSlot";

        $stmt = $this->conn->prepare($query);

        $this->BookingID=htmlspecialchars(strip_tags($this->BookingID));
        $this->NumAdults=htmlspecialchars(strip_tags($this->NumAdults));
        $this->NumMinors=htmlspecialchars(strip_tags($this->NumMinors));
        $this->Cost=htmlspecialchars(strip_tags($this->Cost));
        $this->TimeSlot=htmlspecialchars(strip_tags($this->TimeSlot));

        $stmt->bindParam(":BookingID", $this->BookingID);
        $stmt->bindParam(":NumAdults", $this->NumAdults);
        $stmt->bindParam(":NumMinors", $this->NumMinors);
        $stmt->bindParam(":Cost", $this->Cost);
        $stmt->bindParam(":TimeSlot", $this->TimeSlot);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }

    // used to get info for 1 booking
    function readOne(){
        // query to read single record
        $query = "SELECT
                    BookingID, NumAdults, NumMinors, Cost, TimeSlot
                FROM
                " . $this->table_name . " 
            WHERE
                BookingID = ?
        ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(1, $this->BookingID);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        $this->BookingID = $row['BookingID'];
        $this->NumAdults = $row['NumAdults'];
        $this->NumMinors = $row['NumMinors'];
        $this->Cost = $row['Cost'];
        $this->TimeSlot = $row['TimeSlot'];
    }

    // update the booking
    function update(){

        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
                NumAdults = :NumAdults,
                NumMinors = :NumMinors,
                Cost = :Cost,
                TimeSlot = :TimeSlot
            WHERE
                BookingID = :BookingID";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->BookingID=htmlspecialchars(strip_tags($this->BookingID));
        $this->NumAdults=htmlspecialchars(strip_tags($this->NumAdults));
        $this->NumMinors=htmlspecialchars(strip_tags($this->NumMinors));
        $this->Cost=htmlspecialchars(strip_tags($this->Cost));
        $this->TimeSlot=htmlspecialchars(strip_tags($this->TimeSlot));

        // bind new values
        $stmt->bindParam(':BookingID', $this->BookingID);
        $stmt->bindParam(':NumAdults', $this->NumAdults);
        $stmt->bindParam(':NumMinors', $this->NumMinors);
        $stmt->bindParam(':Cost', $this->Cost);
        $stmt->bindParam(':TimeSlot', $this->TimeSlot);

        // execute the query
        if($stmt->execute()){
            return true;
        }

        return false;
    }

    // delete the booking
    function delete(){

        // delete query
        $query = "DELETE FROM " . $this->table_name . " WHERE BookingID = ?";

        // prepare query
        $stmt = $this->conn->prepare($query);

        // sanitize
        $this->BookingID=htmlspecialchars(strip_tags($this->BookingID));

        // bind id of record to delete
        $stmt->bindParam(1, $this->BookingID);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }
}
?>