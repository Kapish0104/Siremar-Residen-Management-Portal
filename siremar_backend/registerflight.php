<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");

if($con)
{
    $flightname = $_GET["flightname"];
    $flightno = $_GET["flightno"];
    $destination = $_GET["destination"];
    $date = $_GET["date"];
    $time = $_GET["time"];
    
    $sql = "INSERT INTO flights (`flightname`,`flightno`, `destination`, `date`, `time`)
    VALUES ('$flightname','$flightno','$destination','$date','$time')";
    $result = $con->query($sql);
    if ($result === TRUE) {
        exit(json_encode(["status" => "true"]));
    } else {    
        exit(json_encode(["status" => "false","msg"=>"invalid entry"]));
    }
}
