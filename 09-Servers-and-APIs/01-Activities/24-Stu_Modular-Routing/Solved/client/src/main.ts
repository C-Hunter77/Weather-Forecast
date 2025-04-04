import './style.css';
console.log('this is a test');

const tipForm: HTMLInputElement = document.getElementById(
  'tip-form'
) as HTMLInputElement;
const tipInput: HTMLInputElement = document.getElementById(
  'tipText'
) as HTMLInputElement;
const usernameInput: HTMLInputElement = document.getElementById(
  'tipUsername'
) as HTMLInputElement;
const tipsContainer = document.getElementById('tip-container');

const createCard = (tip: any) => {
  // Create card
  const cardEl = document.createElement('div');
  cardEl.classList.add('card', 'mb-3');
  cardEl.setAttribute('key', tip.tip_id);

  // Create card header
  const cardHeaderEl = document.createElement('h4');
  cardHeaderEl.classList.add(
    'card-header',
    'bg-primary',
    'text-light',
    'p-2',
    'm-0'
  );
  cardHeaderEl.innerHTML = `${tip.username} </br>`;

  // Create card body
  const cardBodyEl = document.createElement('div');
  cardBodyEl.classList.add('card-body', 'bg-light', 'p-2');
  cardBodyEl.innerHTML = `<p>${tip.tip}</p>`;

  // Append the header and body to the card element
  cardEl.appendChild(cardHeaderEl);
  cardEl.appendChild(cardBodyEl);

  // Append the card element to the tips container in the DOM
  tipsContainer?.appendChild(cardEl);
};

// Get a list of existing tips from the server
const getTips = () =>
  fetch('api/tips', {
    method: 'GET', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    // body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error('Error:', error);
    });

// Post a new tip to the page
const postTip = (tip: any) =>
  fetch('api/tips', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tip),
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data);
      createCard(tip);

      // Clear Form Fields
      tipInput.value = '';
      usernameInput.value = ''
    })
    .catch((error) => {
      console.error('Error:', error);
    });

// When the page loads, get all the tips
getTips().then((data) => data.forEach((tip: any) => createCard(tip)));

// Function to handle when a user submits the feedback form
const handleFormSubmit = (e: any) => {
  e.preventDefault();
  console.log('Form submit invoked');

  // Get the value of the tip and save it to a variable
  const tipContent = tipInput.value;

  // get the value of the username and save it to a variable
  const tipUsername = usernameInput.value.trim();

  // Create an object with the tip and username
  const newTip = {
    username: tipUsername,
    topic: 'UX',
    tip: tipContent,
  };

  // Make a fetch POST request to the server
  postTip(newTip);
};

// Listen for when the form is submitted
tipForm.addEventListener('submit', handleFormSubmit);
