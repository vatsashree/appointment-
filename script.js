const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting normally
  const formData = new FormData(form); // Create a new FormData object from the form data
  const searchParams = new URLSearchParams(formData); // Convert the FormData to a URLSearchParams object
  const searchQuery = searchParams.toString(); // Convert the URLSearchParams object to a query string

  // Use the query string to redirect the user to the search results page
  window.location.href = `/search?${searchQuery}`;
});
// authenticate user on login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // get user credentials from form submission
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // TODO: validate user credentials against a database of authorized users
  
    // if user is authorized, show search form and hide login form
    document.getElementById('search-form').style.display = 'block';
    document.getElementById('login-form').style.display = 'none';
  });
  
  // prevent access to search feature until user is authenticated
  document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // TODO: check if user is authenticated before performing search
  
    // perform search
    // ...
  });
  // handle rating and review form submission
document.getElementById('rating-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // get rating and review values from form submission
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;
  
    // TODO: save rating and review to a database for the selected doctor
  
    // display success message to user
    alert('Thank you for submitting your review!');
  });
  
  // TODO: fetch and display reviews for the selected doctor from the database
  
  $(document).ready(function() {
    $('.appointment-form').submit(function(event) {
      event.preventDefault();
      
      // Get form data
      var doctor = $('#doctor').val();
      var date = $('#date').val();
      var time = $('#time').val();
      var notes = $('#notes').val();
      
      // Send appointment data to server
      $.ajax({
        type: 'POST',
        url: 'book-appointment.php',
        data: {doctor: doctor, date: date, time: time, notes: notes},
        success: function(response) {
          // Display success message
          alert(response);
        },
        error: function(xhr) {
          // Display error message
          alert('Error: ' + xhr.responseText);
        }
      });
    });
  });
  const scheduleBtn = document.getElementById('schedule');
  const messageDiv = document.getElementById('message');
  
  scheduleBtn.addEventListener('click', async () => {
    const doctor = document.getElementById('doctor').value;
    const time = document.getElementById('time').value;
    const method = document.querySelector('input[name="method"]:checked').value;
  
    const response = await fetch('/consult', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: '123',
        doctor_id: doctor,
        preferred_time: time,
        method: method
      })
    });
  
    const data = await response.json();
    messageDiv.textContent = data.message;
  });
// select elements
const chatMessages = document.querySelector('.chat-messages');
const chatForm = document.querySelector('.chat-form');
const messageInput = document.querySelector('.chat-form input[type="text"]');

// listen for form submit event
chatForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting normally

  const messageText = messageInput.value.trim();

  if (messageText !== '') {
    // create a new message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = messageText;

    // add the message to the chat container
    chatMessages.appendChild(messageElement);

    // clear the input field
    messageInput.value = '';

    // scroll to the bottom of the chat messages
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
});
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const testType = form.elements['test-type'].value;
  const labLocation = form.elements['lab-location'].value;
  const preferredDate = form.elements['preferred-date'].value;
  const preferredTime = form.elements['preferred-time'].value;

  // Code to submit the form data to the server and book the test
  // ...
  // ...
});

