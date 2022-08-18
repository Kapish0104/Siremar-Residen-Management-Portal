<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('content-type: application/json');

$con = mysqli_connect("localhost:3306", "root", "", "siremar");
if ($con) {

    $sql  = "select * from flights ";
    $result = mysqli_query($con, $sql);
    if ($result) {
        header("content-type: JSON");
        $i = 0;
        while ($row = mysqli_fetch_assoc($result)) {
            $response[$i]['flightname'] = $row['flightname'];
            $response[$i]['flightno'] = $row['flightno'];
            $response[$i]['destination'] = $row['destination'];
            $response[$i]['date'] = $row['date'];
            $response[$i]['time'] = $row['time'];

            $i++;
        }
        exit(json_encode($response, JSON_PRETTY_PRINT));
    } else {
        exit(json_encode(["success_flag" => "0"]));    // code 0 no records available in the table
    }
} else {
    exit(json_encode(["success_flag" => "3"]));    // code 3 for error connecting to DB.
}
