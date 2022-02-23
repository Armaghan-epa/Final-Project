<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods,Authorization,X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../models/Movie.php';


    $database = new Database();
    $db = $database->connect();


    $movie = new Movie($db);


    $data = json_decode((file_get_contents("php://input")));

    $movie->id = $data->id;
    $movie->title = $data->title;
    $movie->description = $data->description;
    $movie->year = intval($data->year);
    $movie->poster = $data->poster;


    if (isset($movie->title) && isset($movie->description) && isset($movie->year) && isset($movie->poster) && $movie->edit()) {
        echo json_encode(array('message' => 'Movie updated successfully :D'));
    } else {
        echo json_encode(array('message' => 'Movie did not update :('));
    }
