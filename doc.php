<?php
// Get the form data
$testType = $_POST['test-type'];
$labLocation = $_POST['lab-location'];
$preferredDate = $_POST['preferred-date'];
$preferredTime = $_POST['preferred-time'];

// Code to book the test and store the data in the database
// ...
// ...
?>
<?php
$host = 'localhost';
$user = 'username';
$password = 'password';
$dbname = 'database_name';

// Create connection
$conn = mysqli_connect($host, $user, $password, $dbname);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Perform SQL query
$sql = "SELECT * FROM doctors";
$result = mysqli_query($conn, $sql);

// Close connection
mysqli_close($conn);
?>
