const inquirer = require('inquirer');
const { createNewLogo } = require('./lib/renderer');

const PROMPTS = [
    {
        type: 'input',
        name: 'characters',
        message: "Enter up to 3 characters:",
        validate: value => {
            return new Promise((resolve, reject) =>
                RegExp('^.{0,3}$').test(value) ? resolve(true) : reject("No more than 3 characters plz")
            )
        }
    },
    {
        type: 'input',
        name: 'text_color',
        message: "Enter a color keyword (or hex value) for the text:",
        filter: value => value.toString().toLowerCase(),
        validate: value => validateColor(value)
    },
    {
        type: 'list',
        name: 'shape',
        message: "Choose a shape:",
        choices: [
            'circle',
            'triangle',
            'square'
        ]
    },
    {
        type: 'input',
        name: 'shape_color',
        message: "Enter a color keyword (or hex value) for the shape:",
        filter: value => value.toString().toLowerCase(),
        validate: value => validateColor(value)
    }
];

// Creates a Promise that will be used to validate a user's color input
function validateColor(value) {
    return new Promise((resolve, reject) => {
        // Define acceptable color names
        // Using CSS basic color pallete
        const colors = ['black', 'silver', 'gray',
            'white', 'maroon', 'red',
            'purple', 'fuchsia', 'green',
            'lime', 'olive', 'yellow',
            'navy', 'blue', 'teal', 'aqua'];

        // If color entered exists in the list, or if a hex value was entered, resolve promise. Otherwise reject promise with error message
        (colors.includes(value)) ? resolve(true) : RegExp('^#[a-fA-F\d]{6}$').test(value) ? resolve(true) : reject('Color must be basic color name or a hex value');
    })
};

inquirer.prompt(PROMPTS)
    .then(response => {
        createNewLogo(response);
    });