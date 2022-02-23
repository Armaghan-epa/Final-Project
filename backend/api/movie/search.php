<?php
    // Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Movie.php';

    // Instance database and connect
    $database = new Database();
    $db = $database->connect();

    // Instanciate Movie Object
    $movie = new Movie($db);

    // Get query from the URL
    $movie->searchquery = isset($_GET['searchquery']) ? $_GET['searchquery'] : die();

    // Movie query
    $result = $movie->search();
    // get row count
    $num = $result->rowCount();

    // Check if any movies
    if ($num > 0) {
        // movie array
        $movie_arr = array();
        $movie_arr['data'] = array();

        while ($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $movie_item = array(
                'id' => $id,
                'title' => $title,
                'description' => $description,
                'year' => $year,
                'poster' => $poster,
            );
            // Push to the data
            array_push($movie_arr['data'], $movie_item);
        }

        // Turn it to JSON & output
        echo json_encode($movie_arr);
    } else {
        // No movies
        $empArray = array();
        $empArray['data'] = array();
        echo json_encode(
            $empArray
        );
    }