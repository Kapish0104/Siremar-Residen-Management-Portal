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
    $address= $_GET["add1"]
    $image = $_GET["img"];
    $idproof = $_GET["id-proof"];
    $residenceproof = $_GET["residence-proof"];
    
    if (!strlen($mobile_no) == 10 and !is_numeric($mobile_no)){
        exit(json_encode(["status" => "false","msg"=> "invalid mobile number"]));
    }
    

    $sql = "update register set address = '$address', contact = '$contact', img='$img'  where id = '$id'";
    $result = mysqli_query($con, $sql);
    if ($result) {
        
        $sql  = "select * from register;";
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("content-type: JSON");
            $i = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $response[$i]['id'] = $row['id'];
                $response[$i]['name'] = $row['name'];
                $response[$i]['email'] = $row['email'];
                $response[$i]['address'] = $row['address'];
                $response[$i]['mobile_no'] = $row['mobile_no'];
                $i++;
            }
        exit(json_encode($response, JSON_PRETTY_PRINT));
    } else {
        exit(json_encode(["success_flag" => "0"]));    
        
        
        
        
        
        
    } else {
        exit(json_encode(["status" => "false", "msg" => "error updating entry"]));
    }
    // }
} else {
    exit(json_encode(["status" => "false", "msg" => "connection with DB failed"]));    
}
