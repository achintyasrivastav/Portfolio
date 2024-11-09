// JavaScript to handle open and close actions for the envelope
const envelope = document.getElementById('envelope');
const closeButton = document.getElementById('closeButton');

// Open the envelope when clicked
envelope.addEventListener('click', function () {
  envelope.classList.toggle('open');
});

// Close the envelope when the close button is clicked
closeButton.addEventListener('click', function () {
  envelope.classList.remove('open');
});
