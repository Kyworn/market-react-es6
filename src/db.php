<?php
class DatabaseConnection {

    // INFOS DB
    private $host = "localhost";
    private $db_name = "market;charset=utf8";
    private $username = "root";
    private $password = "root";
    public $conn;

    // get the database connection
    public function getConnection(){

        $this->conn = null;

        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>