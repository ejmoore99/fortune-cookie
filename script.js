const generateFortuneBtn = document.querySelector('.generate-fortune-btn');
const fortuneTextBox = document.querySelector('.text-box');

const updateDetails = (fortune) => {
  fortuneTextBox.value = fortune;
};

const generateFortune = () => {
  fetch(
    'https://cors-anywhere.herokuapp.com/https://my-fun-api.onrender.com/fortune'
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // Log the response data
      updateDetails(data.data.fortune); // Access the fortune from data.data
    })
    .catch((error) => {
      console.error('Error fetching fortune:', error);
      updateDetails('Could not fetch fortune. Please try again later.');
    });
};

generateFortuneBtn.addEventListener('click', generateFortune);
