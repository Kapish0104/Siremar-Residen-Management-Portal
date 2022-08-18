<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");

if($con)
{
    $businessname = $_GET["businessname"];
    $businessid = $_GET["businessid"];
    $offer = $_GET["offer"];
   
    $sql = "INSERT INTO business (`businessname`, `businessid`, `offer`)
    VALUES ('$businessname','$businessid','$offer')";
    $result = $con->query($sql);
    if ($result === TRUE) {
        exit(json_encode(["status" => "true"]));
    } else {    
        exit(json_encode(["status" => "false","msg"=>"invalid entry"]));
    }
}
