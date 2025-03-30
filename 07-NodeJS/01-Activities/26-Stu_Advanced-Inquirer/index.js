.prompt([
    {
      type: 'input',
      name: 'name',
      message: colors 'What is your name?',
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      choices: ['phone', 'email', 'telekinesis'],
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      choices: ['English', 'Spanish', 'French', 'Latin'],
    },
    {
      type: 'list',
      message: 'What is your favorite color?',
      choices: ['red', 'blue', 'yellow', 'green'],
    },
  ])
  .then((Response) => {
    console.log(Response);
  }