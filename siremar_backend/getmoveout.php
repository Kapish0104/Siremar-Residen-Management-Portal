<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");
if ($con) {

    $sql  = "select * from moveout";
    $result = mysqli_query($con, $sql);
    if ($result) {
        header("content-type: JSON");
        $i = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $response[$i]['id'] = $row['id'];
            $response[$i]['date'] = $row['date'];
            $response[$i]['reason'] = $row['reason'];         
            $i++;
        }
        exit(json_encode($response, JSON_PRETTY_PRINT));
    } else {
        exit(json_encode(["success_flag" => "0"]));    
    }
} 

else {
    exit(json_encode(["success_flag" => "3"]));   
}
