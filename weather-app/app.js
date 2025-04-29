const yargs = require('yargs');
const chalk = require('chalk');

const argv = yargs
            .option('city', {
                description: "City name to find weather info",
                demandOption: true,
                type: String
            })
            .help()
            .argv;


function getWeatherData(city){
    const weatherData = {
        'new york': {
        temperature: 72,
        conditions: 'Partly Cloudy',
        humidity: 65,
        windSpeed: 8
        },
    'london': {
    temperature: 60,
    conditions: 'Rainy',
    humidity: 80,
    windSpeed: 12
    },
    'tokyo': {
    temperature: 80,
    conditions: 'Sunny',
    humidity: 40,
    windSpeed: 5
    },
    'sydney': {
    temperature: 85,
    conditions: 'Clear',
    humidity: 35,
    windSpeed: 10
    }
    };

    return weatherData[city] || `City not available`;
}

function styleWeatherData(city, weatherData){
    console.log(`Today's weather in ${city}`);

    if (weatherData.temperature <= 60) {
        console.log(chalk.blue(`It's ${weatherData.temperature} degrees out. It's cold!`));
    }
    else if (weatherData.temperature >=85) {
        console.log(chalk.red(`It's ${weatherData.temperature} degrees out. It's very hot!`));
    }
    else {
        console.log(chalk.green(`It's ${weatherData.temperature} degrees out. It's nice day!`))
    }

    console.log(chalk.italic.bgCyan(`The conditions in ${city} will be ${weatherData.conditions}.`));
    console.log(chalk.italic.white(`The humidity in ${city} is ${weatherData.humidity}.`));
    console.log(chalk.bgGreen.yellow(`The windspeed is currently ${weatherData.windSpeed}.`))
}

function main() {
    const city = argv.city;
    console.log(chalk.dim(`Fetching weather data for ${city}...`));
    const weatherData = getWeatherData(city);

    styleWeatherData(city, weatherData);
}

main();


/* 
Understand Dependency Management:
○ Review the package.json file and identify where the installed
dependencies are listed.
The installed dependenices like chalk and yargs are listed in "dependencies".

○ Explain the role of the node_modules directory and why it should not
be included in version control.
The node modules directory contains all the external modules which is used in the code. so it is not 
necessary to include in version control.

Output:
The windspeed is currently undefined.
diviya@Srinivasans-MacBook-Air weather-app % node app.js --city="tokyo"
Fetching weather data for tokyo...
Today's weather in tokyo
It's 80 degrees out. It's nice day!
The conditions in tokyo will be Sunny.
The humidity in tokyo is 40.
The windspeed is currently 5.

A short written response commented within the code, addressing:
○ The purpose of package.json in managing dependencies.
It is JSON file and it contains the project name, version number, automation scripts and dependencies.

○ Why node_modules should not be included in version control.
The node modules directory contains all the external modules which is used in the code. so it is not 
necessary to include in version control.

○ How npm install reinstalls dependencies and its importance in collaborative projects.
npm install the necessary external modules for the project. The dependencies automatically installed when 
other team member set up the same code. So developers use the same dependencies.


 */
