<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");

if($con)
{
    $schoolname = $_GET["schoolname"];
    $schoolcode = $_GET["schoolcode"];
    $address = $_GET["address"];
   
    $sql = "INSERT INTO school (`schoolname`, `schoolcode`, `address`)
    VALUES ('$schoolname','$schoolcode','$address')";
    $result = $con->query($sql);
    if ($result === TRUE) {
        exit(json_encode(["status" => "true"]));
    } else {    
        exit(json_encode(["status" => "false","msg"=>"invalid entry"]));
    }
}
