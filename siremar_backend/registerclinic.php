<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");

if($con)
{
    $clinicname = $_GET["clinicname"];
    $clinicid = $_GET["clinicid"];
    $speciality = $_GET["speciality"];
    $address = $_GET["address"];
    $offercode = $_GET["offercode"];
   
    $sql = "INSERT INTO clinic (`clinicname`, `clinicid`,`speciality`, `address`, `offercode`)
    VALUES ('$clinicname','$clinicid', '$speciality', '$address', '$offercode')";
    $result = $con->query($sql);
    if ($result === TRUE) {
        exit(json_encode(["status" => "true"]));
    } else {    
        exit(json_encode(["status" => "false","msg"=>"invalid entry"]));
    }
}
