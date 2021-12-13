<?php
class Schedule
{
    private $conn;
    private $table_name = "Schedule";

    public $TimeSlotID;
    public $Start;
    public $End;
    public $Date;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read schedule
    function read(){
        // select all query
        $query = "SELECT *
                    FROM " . $this->table_name . "
            ";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    //create time slot
    function create(){
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                TimeSlotID=:TimeSlotID, Start=:Start, End=:End, Date=:Date";

        $stmt = $this->conn->prepare($query);

        $this->TimeSlotID=htmlspecialchars(strip_tags($this->TimeSlotID));
        $this->Start=htmlspecialchars(strip_tags($this->Start));
        $this->End=htmlspecialchars(strip_tags($this->End));
        $this->Date=htmlspecialchars(strip_tags($this->Date));

        $stmt->bindParam(":TimeSlotID", $this->TimeSlotID);
        $stmt->bindParam(":Start", $this->Start);
        $stmt->bindParam(":End", $this->End);
        $stmt->bindParam(":Date", $this->Date);

        // execute query
        if($stmt->execute()){
            return true;
        }

        return false;
    }

    // used to get info for 1 time slot
    function readOne(){
        // query to read single record
        $query = "SELECT
                    TimeSlotID, Start, End, Date
                FROM
                " . $this->table_name . " 
            WHERE
                TimeSlotID = ?
        ";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        // bind id of product to be updated
        $stmt->bindParam(1, $this->TimeSlotID);

        // execute query
        $stmt->execute();

        // get retrieved row
        $row = $stmt->fetch(PDO::FETCH_ASSOC);

        // set values to object properties
        $this->TimeSlotID= $row['TimeSlotID'];
        $this->Start = $row['Start'];
        $this->End = $row['End'];
        $this->Date = $row['Date'];
    }

    // update the schedule
    function update(){

        // update query
        $query = "UPDATE
                " . $this->table_name . "
            SET
                Start = :Start,
                End = :End,
                Date= :Date
            WHERE
                TimeSlotID = :TimeSlotID";

        // prepare query statement
        $stmt = $this->conn->prepare($query);

        $this->TimeSlotID=htmlspecialchars(strip_tags($this->TimeSlotID));
        $this->Start=htmlspecialchars(strip_tags($this->Start));
        $this->End=htmlspecialchars(strip_tags($this->End));
        $this->Date=htmlspecialchars(strip_tags($this->Date));

        $stmt->bindParam(":TimeSlotID", $this->TimeSlotID);
        $stmt->bindParam(":Start", $this->Start);
        $stmt->bindParam(":End", $this->End);
        $stmt->bindParam(":Date", $this->Date);

        // execute the query
        if($stmt->execute()){
            return true;
        }

        return false;
    }
}
?>