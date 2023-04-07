const mysql = require('mysql');

// Create a connection to the MySQL server
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name'
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) throw err;

  console.log('Connected to the MySQL server');

  // Execute the SQL statements to create the "doctors" table and insert data into it
  const sql = `
    CREATE TABLE doctors (
      id INT(11) NOT NULL AUTO_INCREMENT,
      name VARCHAR(255) NOT NULL,
      specialty VARCHAR(255) NOT NULL,
      location VARCHAR(255) NOT NULL,
      availability VARCHAR(255) NOT NULL,
      reviews TEXT,
      PRIMARY KEY (id)
    );
    
    INSERT INTO doctors (name, specialty, location, availability, reviews) VALUES
    ('Dr. John Doe', 'Cardiology', 'New York', 'Monday - Friday, 9 AM - 5 PM', 'Excellent doctor with great bedside manners.'),
    ('Dr. Jane Smith', 'Pediatrics', 'San Francisco', 'Monday - Friday, 8 AM - 4 PM', 'My kids love Dr. Smith! She is very caring and knowledgeable.');
  `;

  connection.query(sql, (err, result) => {
    if (err) throw err;

    console.log('Database table and data created successfully');
    
    // Close the database connection
    connection.end();
  });
});
