<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");

if ($con) {
    $email = $_GET["username"];
    $password = $_GET["password"];
    // if (strpos($email, '@iw.com')) {
    //     $sql = "SELECT * FROM `user` where email = '$email' and password='$password';";
    // } else {
    //     $sql = "SELECT * FROM `user` where email = '$email' and password='$password';";
    // }
    $sql = "SELECT * FROM `user` where username = '$email' and password='$password';";
    $result = $con->query($sql);
    if ($result->num_rows > 0) {
        $currentUser = (object)[];
        while ($row = $result->fetch_assoc()) {
            $currentUser = $row;
        }
        exit(json_encode($currentUser));
    } else {
        exit(json_encode(["success_flag" => "0"]));
    }
}