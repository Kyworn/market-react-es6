<?php
header('Access-Control-Allow-Origin: *');
include_once './db.php';
$db = new DatabaseConnection();
$pdo = $db->getConnection();

$sql = "SELECT * FROM produits";
$result = $pdo->query($sql);
$array = array();
while ( $row = $result->fetch() ) {
    $data = [
    "nom" => $row['nom'],
    "prixHT" => $row['prixHT']
    ];
    array_push($array, $data);
}
//return json_encode($array);
echo json_encode($array);
?>
