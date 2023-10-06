// Function to load and display a random dad joke from the text file
function loadRandomDadJoke() {
   // Use the fetch API to request the "jokes.txt" file
   fetch("jokes.txt")
      .then((response) => response.text()) // Convert the response to text
      .then((data) => {
         // Split the text data into an array of jokes using newline characters
         const jokes = data.split("\n");

         // Generate a random index to select a random joke from the array
         const randomIndex = Math.floor(Math.random() * jokes.length);

         // Get the random joke based on the random index
         const randomJoke = jokes[randomIndex];

         // Set the text content of the "joke-output" element to the random joke
         document.getElementById("joke-output").textContent = randomJoke;
      })
      .catch((error) => {
         // Handle any errors that occur during the fetch operation
         console.error("Error loading dad jokes: " + error);
      });
}

// Function to copy text to clipboard
function CopyToClipboard() {
   // Get the text content of the "joke-output" element
   const jokeText = document.getElementById("joke-output").textContent;

   // Create a temporary <textarea> element
   const tempInput = document.createElement("textarea");

   // Set the value of the <textarea> to the joke text
   tempInput.value = jokeText;

   // Append the <textarea> element to the document's body
   document.body.appendChild(tempInput);

   // Select the text inside the <textarea>
   tempInput.select();

   // Execute the "copy" command to copy the selected text to the clipboard
   document.execCommand("copy");

   // Remove the temporary <textarea> element from the document
   document.body.removeChild(tempInput);

   // Log to console
   console.log(jokeText + " copied to clipboard: ");
}

// Load an initial joke when the page loads
window.onload = loadRandomDadJoke;
