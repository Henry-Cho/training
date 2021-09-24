<?php 
session_start();

$conn = mysqli_connect("localhost", "root", "root", "Calendar_user");

$loginUser = $_SESSION['username'];

$result = mysqli_query($conn, "SELECT * FROM activity WHERE username = '$loginUser'");

$data = array();

while ($row = mysqli_fetch_assoc($result)) {
    $data[] = $row;
}


echo json_encode($data);
;?>