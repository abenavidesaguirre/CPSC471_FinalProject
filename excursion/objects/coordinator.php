<?php
class Coordinator
{
    private $conn;
    private $table_name = "Coordinator";

    public $StaffID;
    public $Shift;

    public function __construct($db)
    {
        $this->conn = $db;
    }

    //read coordinator
    function read(){
        // select all query
        $query = "SELECT *
                    FROM " . $this->table_name . " 
            ";

        $stmt = $this->conn->prepare($query);
        $stmt->execute();

        return $stmt;
    }

    //create coordinator
    function create(){
        $query = "INSERT INTO
                " . $this->table_name . "
            SET
                StaffID=:StaffID, Shift=:Shift";

        $stmt = $this->conn->prepare($query);

        $this->StaffID=htmlspecialchars(strip_tags($this->StaffID));
        $this->Shift=htmlspecialchars(strip_tags($this->Shift));

        $stmt->bindParam(":StaffID", $this->StaffID);
        $stmt->bindParam(":Shift", $this->Shift);

        // execute query
        if($stmt->execute()){
            return true;
        }
        return false;
    }

}
?>