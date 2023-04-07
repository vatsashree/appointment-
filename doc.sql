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
