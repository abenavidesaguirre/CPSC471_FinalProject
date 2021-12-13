<?php
require("../vendor/autoload.php");
class Database{
    // DB credentials
//    private $host = "localhost";
//    private $db_name = "excursion_company";
//    private $username = "root";
//    private $password = "DRe4mf!nDer"
//    private $dburl = "postgres://srnkidycfzmrvk:fe6d632bc3ee59da65cad454da06c31a415ada8a26ecd843bb6f28d46a2577d5@ec2-3-230-219-251.compute-1.amazonaws.com:5432/dbpae9quth4h5p";
    public $conn;
    private $host = "ec2-3-230-219-251.compute-1.amazonaws.com";
//    $host = parse_url($DATABASE_URL, 1);
    private $db_name = "dbpae9quth4h5p";
    private $username = "srnkidycfzmrvk";
    private $password = "fe6d632bc3ee59da65cad454da06c31a415ada8a26ecd843bb6f28d46a2577d5";
    private $port = "5432";


//    private $db = parse_url(getenv($this->DATABASE_URL), int $component - -1);
//    $db["path"] = trim($db["path"], "/");
    // get the database connection
    public function getConnection(){

        $this->conn = null;

        try{
//            $this->conn = pg_connect(getenv("postgres://srnkidycfzmrvk:fe6d632bc3ee59da65cad454da06c31a415ada8a26ecd843bb6f28d46a2577d5@ec2-3-230-219-251.compute-1.amazonaws.com:5432/dbpae9quth4h5p"));
//            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn = new PDO( "pgsql:host=" . $this->host . ";port=" . $this->port . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>