<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

//$con = mysqli_connect("localhost:3306", "root", "", "siremar");
$con = mysqli_connect("localhost:3306", "root", "", "siremar");

if($con)
{
    $fname = $_GET["fname"];
    $email = $_GET["email"];
    $pass1 = $_GET["pass1"];
    $county = $_GET["county"];
    $contact = $_GET["contact"];
    $add1= $_GET["add1"];
    $add2= $_GET["add2"];
    $zip= $_GET["zip"];
    // $img = $_GET["img"];
    // $idproof = $_GET["idproof"];
    $residenceproof = $_GET["residenceType"];
    $role='resident';
    // $img = '';
    // $idproof = '';
    // $residenceproof = '';
    
    $sql = "INSERT INTO user (`username`,`password`, `name`, `role`,`address1`,`address2`,`contact`,`county`,`zip`,`residenceproof`)
    VALUES ('$email', '$pass1','$fname','$role','$add1','$add2','$contact','$county','$zip','$residenceproof')";
    $result = $con->query($sql);
    if ($result === TRUE) {
        exit(json_encode(["status" => "true"]));
    } else {
        exit(json_encode(["status" => "false","msg"=>"invalid entry"]));
    }
}
