// Function to copy text to clipboard
function copyToClipboard() {
   const jokeText = document.getElementById("joke-output").textContent;
   const tempInput = document.createElement("textarea");
   tempInput.value = jokeText;
   document.body.appendChild(tempInput);
   tempInput.select();
   document.execCommand("copy");
   document.body.removeChild(tempInput);
   alert("Dad joke copied to clipboard: " + jokeText);
}

// Function to load and display a random dad joke from the text file
function loadRandomDadJoke() {
   fetch("jokes.txt")
      .then((response) => response.text())
      .then((data) => {
         const jokes = data.split("\n");
         const randomIndex = Math.floor(Math.random() * jokes.length);
         const randomJoke = jokes[randomIndex];
         document.getElementById("joke-output").textContent = randomJoke;
      })
      .catch((error) => {
         console.error("Error loading dad jokes: " + error);
      });
}

// Load an initial joke when the page loads
window.onload = loadRandomDadJoke;
