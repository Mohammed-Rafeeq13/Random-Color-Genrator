// script.js
const colorDisplay = document.getElementById('colorDisplay');
const colorCode = document.getElementById('colorCode');
const generateBtn = document.getElementById('generateBtn');

// Function to generate random color
function generateRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  colorDisplay.style.backgroundColor = randomColor;
  colorCode.textContent = randomColor;
}

// Add event listener to the button
generateBtn.addEventListener('click', generateRandomColor);

// Initialize with a random color
generateRandomColor();
