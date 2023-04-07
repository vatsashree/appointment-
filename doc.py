import sqlite3

# Connect to the database
conn = sqlite3.connect('doctors.db')

# Define a function to handle search queries
def search_doctors(specialty, location, availability, rating):
    # Construct the SQL query with placeholders for the search criteria
    query = """
    SELECT * FROM doctors
    WHERE specialty = ? AND location = ? AND availability = ? AND rating >= ?
    """
    # Execute the query with the search criteria as parameters
    cursor = conn.execute(query, (specialty, location, availability, rating))
    # Fetch the results as a list of dictionaries
    results = [dict(row) for row in cursor.fetchall()]
    return results

# Example usage: search for doctors with a specialty of "cardiology", located in "New York", available on "Monday", and with a rating of at least 4.0
results = search_doctors('cardiology', 'New York', 'Monday', 4.0)
print(results)

# Close the database connection
conn.close()

from flask import Flask, request, jsonify

app = Flask(__name__)

# Database of doctors and their availability
doctors = {
  'Dr. John Doe': ['Monday', 'Wednesday', 'Friday'],
  'Dr. Jane Smith': ['Tuesday', 'Thursday', 'Saturday'],
  'Dr. Michael Lee': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
}

# Route for booking an appointment
@app.route('/book-appointment', methods=['POST'])
def book_appointment():
  # Get appointment data from request
  doctor = request.form['doctor']
  date = request.form['date']
  time = request.form['time']
  notes = request.form['notes']
  
  # Check if doctor is available on the selected date and time
  if date in doctors[doctor] and time not in booked_slots:
    # Save appointment to database
    appointments.append({
      'doctor': doctor,
      'date': date,
      'time': time,
      'notes': notes
    })
    
    # Add booked slot to list
    booked_slots.append(time)
    
    return jsonify({'status': 'success', 'message': 'Appointment booked successfully.'}), 200
  else:
    return jsonify({'status': 'error', 'message': 'Doctor is not available on the selected date and time.'}), 400

if __name__ == '__main__':
  app.run(debug=True)

from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__)

# Connect to the database
conn = sqlite3.connect('health_records.db')

# Route for adding a new health record
@app.route('/add-record', methods=['POST'])
def add_record():
  # Get record data from request
  user_id = request.form['user_id']
  record_type = request.form['record_type']
  record_data = request.form['record_data']
  
  # Save record to the database
  c = conn.cursor()
  c.execute("INSERT INTO health_records (user_id, record_type, record_data) VALUES (?, ?, ?)", (user_id, record_type, record_data))
  conn.commit()
  
  return jsonify({'status': 'success', 'message': 'Health record added successfully.'}), 200

# Route for getting a user's health records
@app.route('/get-records/<int:user_id>', methods=['GET'])
def get_records(user_id):
  # Get records from the database for the specified user
  c = conn.cursor()
  c.execute("SELECT * FROM health_records WHERE user_id=?", (user_id,))
  records = c.fetchall()
  
  # Return records as JSON
  return jsonify({'status': 'success', 'data': records}), 200

if __name__ == '__main__':
  # Create the health_records table if it doesn't exist
  c = conn.cursor()
  c.execute("CREATE TABLE IF NOT EXISTS health_records (id INTEGER PRIMARY KEY AUTOINCREMENT, user_id INTEGER, record_type TEXT, record_data TEXT)")
  conn.commit()
  
  app.run(debug=True)

from flask import Flask, request, jsonify

app = Flask(__name__)

# Store doctor information in a dictionary
doctors = {
    'john_doe': {
        'name': 'John Doe',
        'specialty': 'Dermatology',
        'availability': ['Monday', 'Wednesday', 'Friday'],
        'timezone': 'EST'
    },
    'jane_smith': {
        'name': 'Jane Smith',
        'specialty': 'Cardiology',
        'availability': ['Tuesday', 'Thursday'],
        'timezone': 'PST'
    }
}

# Handle consultation requests
@app.route('/consult', methods=['POST'])
def consult():
    # Get request data
    user_id = request.json['user_id']
    doctor_id = request.json['doctor_id']
    preferred_time = request.json['preferred_time']
    method = request.json['method']  # video or chat
    
    # Check if doctor is available at the preferred time
    if preferred_time not in doctors[doctor_id]['availability']:
        return jsonify({'message': 'Doctor not available at preferred time'})
    
    # Schedule appointment and return confirmation message
    return jsonify({'message': f'Appointment with {doctors[doctor_id]["name"]} scheduled for {preferred_time} via {method}'})

if __name__ == '__main__':
    app.run()
