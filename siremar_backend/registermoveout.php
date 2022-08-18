<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");

if($con)
{
    $id = $_GET["id"];
    //$name = $_GET["name"];
    $date = $_GET["date"];
    $reason = $_GET["reason"];
    
    $sql = "INSERT INTO moveout (`id`, `date`, `reason`)
    VALUES ('$id','$date','$reason')";
    $result = $con->query($sql);
    if ($result === TRUE) {
        exit(json_encode(["status" => "true"]));
    } else {    
        exit(json_encode(["status" => "false","msg"=>"invalid entry"]));
    }
}
