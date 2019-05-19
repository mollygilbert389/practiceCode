'use strict';
var inquirer = require('inquirer');
var chalkPipe = require('chalk-pipe');

var questions = [
  {
    type: 'input',
    name: 'name',
    message: "Who are you?"
  },
  {
    type: 'list',
    name: 'doingWhat',
    message: "What are you doing in my house?",
    choices: [
        "I live here.",
        "I am in love with you!",
        "I picking you up."
    ]
  },
  {
    type: 'checkbox',
    message: "What kind of pizza do you like?",
    name: 'likes_pizza',
    choices: [
        "pepperoni",
        "veggie",
        "cheese"
    ]
  },
  {
    type: 'input',
    name: 'fav_color',
    message: "What's your favorite color",
    transformer: function(color, answers, flags) {
      const text = chalkPipe(color)(color);
      if (flags.isFinal) {
        return text + '!';
      }

      return text;
    }
  },

  {
    type: 'input',
    name: 'phone',
    message: "What's your phone number",
    validate: function(value) {
      var pass = value.match(
        /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
      );
      if (pass) {
        return true;
      }

      return 'Please enter a valid phone number';
    }
  },
  {
    type: 'confirm',
    name: 'canLeave',
    message: "Can you leave now?"
  },
  {
    type: 'password',
    name: 'myPassword',
    message: "What is the password?"
  },
];

inquirer.prompt(questions).then(answers => {
  console.log(JSON.stringify(answers, null, '  '));

  console.log(answers.myPassword)

  if (answers.myPassword === "myHouse") {
      console.log("Ok ok ok, you seem cool.")
  }
 else {
     console.log("You've got to go. ")
 }
});