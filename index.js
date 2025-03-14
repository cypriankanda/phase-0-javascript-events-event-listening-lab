function addingEventListener() {
    // Grab the button element using its ID
    const input = document.getElementById('button');
    
    // Add an event listener to the button for the 'click' event
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
  }
  
  // Call the function to activate the event listener
  addingEventListener();
  