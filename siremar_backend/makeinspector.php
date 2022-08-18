<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");
if ($con) {
    $id = $_GET["id"];

    $sql = "update user set role='inspector' where id = '$id'";  
    $result = mysqli_query($con, $sql);
    if ($result === TRUE) {
        exit(json_encode(["status" => "true"]));
    } else {
        exit(json_encode(["status" => "false"]));
    }
} else {
    exit(json_encode(["status" => "false"]));  
}