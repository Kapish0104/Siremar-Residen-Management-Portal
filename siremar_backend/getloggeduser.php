<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");
if ($con) {

    $sql  = "select * from user where role='resident' ";
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
            $response[$i]['zip'] = $row['zip'];

            $i++;
        }
        exit(json_encode($response, JSON_PRETTY_PRINT));
    } else {
        exit(json_encode(["success_flag" => "0"]));    // code 0 no records available in the table
    }
} else {
    exit(json_encode(["success_flag" => "3"]));    // code 3 for error connecting to DB.
}
