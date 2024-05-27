// Select the necessary elements from the DOM.
const generateFortuneBtn = document.querySelector('#generate-fortune-btn');
const fortuneTextBox = document.querySelector('#text-box');

// Function to update the fortune text box with the fetched fortune.
const updateDetails = (fortune) => {
  fortuneTextBox.value = fortune;
  console.log(`TextBox updated with: ${fortune}`); // Debugging log
};

// Function to fetch a fortune from the API.
const generateFortune = () => {
  console.log('Button clicked, fetching fortune...'); // Debugging log

  // We use fetch to get the API and its info.
  fetch('https://my-fun-api.onrender.com/fortune')
    // The initial .then will convert the JSON response to a JS object.
    .then((response) => {
      console.log('Response received'); // Debugging log
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    // The second .then allows us to manipulate the API data.
    .then((responseData) => {
      console.log('Data parsed'); // Debugging log
      // Accessing the fortune inside the nested data object.
      const fortune = responseData.data.fortune;
      // Logging the fortune to the console.
      console.log(`Fortune received: ${fortune}`);
      // Updating the text box with the fetched fortune.
      updateDetails(fortune);
    })
    // Handling any errors that occur during the fetch operation.
    .catch((error) => {
      console.error('Error fetching fortune:', error);
      // Displaying an error message in the text box.
      updateDetails('Could not fetch fortune. Please try again later.');
    });
};

// Adding an event listener to the button to trigger the fortune generation.
generateFortuneBtn.addEventListener('click', generateFortune);
