<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");
if ($con) {
    $firstname = $_GET["fname"];
    $middlename = $_GET["mname"];
    $lastname = $_GET["lname"];
    $email = $_GET["email"];
    $password = $_GET["pass1"];
    $confirmpassword = $_GET["pass2"];
    $contactno = $_GET["contact"];
    $address= $_GET["add1"];
    $image = $_GET["img"];
    $idproof = $_GET["id-proof"];
    $residenceproof = $_GET["residence-proof"];


    if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        exit(json_encode(["status" => "false","msg"=> "invalid email address"]));
    }
    


    $sql = "select * from user where email = '$email';";
    $result = mysqli_query($con, $sql);
    if ($result->num_rows > 0) {
        exit(json_encode(["status" => "false","msg"=>"user already exists"]));
    } else {
        "INSERT INTO register (firstname,middlename, lastname, email, password,confirmpassword,contactno,address,image,idproof,residenceproof)
        VALUES ('$fname', '$mname', '$lname','$email','$pass1','$pass2','$contact','$add1','$img','$id-proof','$residence-proof')";
        $result = mysqli_query($con, $sql);
        if ($result === TRUE) {
            exit(json_encode(["status" => "true"]));
        } else {
            exit(json_encode(["status" => "false","msg"=>"invalid entry"]));
        }
    }
} else {
    exit(json_encode(["status" => "false","msg"=>"error connecting to DB"]));    
}
