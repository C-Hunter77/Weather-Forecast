import inquirer from 'inquirer';

const createHTML = (data) => 
.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'age',
        message: 'How old are you?'
    },
    {
        type: 'input',
        name: 'city',
        message: 'What city do you live in?'
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Please write a short bio about yourself.'
    },
    {
        type: 'input',
        name: 'linkedin',
        message: 'Please enter your LinkedIn URL.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your GitHub URL.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.'
    },
    {
        type: 'input',
        name: 'phone',
        message: 'Please enter your phone number.'
    },
    {
        type: 'confirm',
        name: 'confirm',
        message: 'Is the information you provided correct?'
    }
])
.then(function(data) {
    // If the inquirer confirms, we log the information to the console
    if (data.confirm) {
        console.log(data);
    }
    // If the inquirer does not confirm, then a message is provided and the questions are asked again
    else {
        console.log("Please re-enter your information.");
        promptUser();
    }
});
