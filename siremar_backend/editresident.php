<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");
if ($con) {
    $id = $_GET["id"];
    $username=$_GET["username"];
    $name=$_GET["name"];
    $address1 = $_GET["address1"];
    $address2 = $_GET["address2"];
    $county = $_GET["county"];
    $contact = $_GET["contact"];    
    $zip = $_GET["zip"]; 
    

    $sql = "update user set username = '$username', address1 = '$address1', address2 = '$address2', county = '$county',  contact=  '$contact'  where id = '$id'";
    $result = mysqli_query($con, $sql);
    if ($result) {
        
        $sql  = "select * from user;";
        $result = mysqli_query($con, $sql);
        if ($result) {
            header("content-type: JSON");
            $i = 0;
            while ($row = mysqli_fetch_assoc($result)) {
                $response[$i]['id'] = $row['id'];
                $response[$i]['name'] = $row['name'];
                $response[$i]['username'] = $row['username'];
                $response[$i]['address1'] = $row['address1'];
                $response[$i]['address2'] = $row['address2'];
                $response[$i]['county'] = $row['county'];
                $response[$i]['contact'] = $row['contact'];
                $i++;
            }
        exit(json_encode($response, JSON_PRETTY_PRINT));
    } else {
        exit(json_encode(["success_flag" => "0"]));    
    }
            
    } else {
        exit(json_encode(["status" => "false", "msg" => "error updating entry"]));
    }
    // }
} else {
    exit(json_encode(["status" => "false", "msg" => "connection with DB failed"]));    
}
