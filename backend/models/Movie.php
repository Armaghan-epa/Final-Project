<?php
    class Movie {
        // DB Stuff
        private $conn;
        private $table = 'movie';

        // Movie Properties
        public $searchquery;
        public $id;
        public $title;
        public $description;
        public $year;
        public $poster;

        // Constructor
        public function __construct($db)
        {
            $this->conn = $db;
        }

        // Get Movies
        public function read() {
            // create query
            $query = 'SELECT * from ' . $this->table . ' m';
            $stmt = $this->conn->prepare($query);

            // Execute query
            $stmt->execute();

            return $stmt;
        }

        // Get Movie by Id
        public function readById() {
            // create query
            $query = 'SELECT * from ' . $this->table . ' m where m.id=? limit 0,1';
            $stmt = $this->conn->prepare($query);

            // Bind Id
            $stmt->bindParam(1, $this->id);

            // Execute query
            $stmt->execute();

            $row = $stmt->fetch(PDO::FETCH_ASSOC);

            // Set properties
            $this->id = $row['id'];
            $this->title = $row['title'];
            $this->description = $row['description'];
            $this->year = $row['year'];
            $this->poster = $row['poster'];

            return $stmt;
        }

        // Create Movie
        public function create() {
            // create query
            $query = 'insert into ' . $this->table . ' (title,description,year,poster) values(:title,:description,:year,:poster);';

            // Prepare statement
            $stmt = $this->conn->prepare($query);

            // Clean data (for security)
            $this->title = htmlspecialchars(strip_tags($this->title));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->year = htmlspecialchars(strip_tags($this->year));
            $this->poster = htmlspecialchars(strip_tags($this->poster));

            // Bind the data
            $stmt->bindParam(':title', $this->title);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':year', $this->year);
            $stmt->bindParam(':poster', $this->poster);

            // Execute query
            if ($stmt->execute()) {
                return true;
            } else {
                printf("Error: %s.\n", $stmt->error);
                return false;
            }
        }

        // Search Movies
        public function search() {
            // create query
            $query = 'select * from ' . $this->table . ' where title=:title or year=:year';

            // Prepare statement
            $statement = $this->conn->prepare($query);

            // Bind the data
            if (isset($this->searchquery)) {
                $statement->bindParam(':title', $this->searchquery);
                $statement->bindParam(':year', $this->searchquery);
            } else {
                $query = 'select * from ' . $this->table;
            }

            // Execute query
            $statement->execute();

            return $statement;
        }

        // Delete Movies
        public function delete() {
            // create query
            $query = 'delete from ' . $this->table . ' where id=:id';

            // Prepare statement
            $statement = $this->conn->prepare($query);

            // Bind the data
            $statement->bindParam(':id', $this->id);

            // Execute query
            $statement->execute();

            return $statement;
        }

        // Edit Movie
        public function edit() {
            // create query
            $query = 'update ' . $this->table . ' set title=:title, description=:description, year=:year, poster=:poster where id=:id;';

            // Prepare statement
            $stmt = $this->conn->prepare($query);

            // Clean data (for security)
            $this->id = htmlspecialchars(strip_tags($this->id));
            $this->title = htmlspecialchars(strip_tags($this->title));
            $this->description = htmlspecialchars(strip_tags($this->description));
            $this->year = htmlspecialchars(strip_tags($this->year));
            $this->poster = htmlspecialchars(strip_tags($this->poster));

            // Bind the data
            $stmt->bindParam(':id', $this->id);
            $stmt->bindParam(':title', $this->title);
            $stmt->bindParam(':description', $this->description);
            $stmt->bindParam(':year', $this->year);
            $stmt->bindParam(':poster', $this->poster);

            // Execute query
            if ($stmt->execute()) {
                return true;
            } else {
                printf("Error: %s.\n", $stmt->error);
                return false;
            }
        }

    }