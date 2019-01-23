
// Dependencies
const boxen = require('boxen');
const chalk = require('chalk');
const gradient = require('gradient-string');
const Grid = require("term-grid");


//Options for the style of the box (boxen package)
const options = {
    padding: 1,
    margin: {
        left: 5,
        top: 0,
        bottom: 1,
        right: 0,
    },
    borderStyle: 'round',
};

//Gradients for text (gradient-string package)
const gradients = {
    blue: gradient(['#11FF66', '#00AAFF', '#3377CF']),
    orange: gradient(['#FFAA11', '#FF8811', '#EE5511'])
}

//Raw data displayed at screen
const data = {
    name: "Olivier Keutgens",
    handle: "olivierk95",
    title: "Junior Developer at Becode",
    country: "Belgium",
    birthday: "03/07/1995",
};

//Modified data with some style
const styledData = {
    name: chalk.bold(data.name),
    handle: chalk.underline(data.handle),
    title: gradients.blue(data.title),
    githubstr: chalk.hex('#11FF66')('GitHub:'),
    linkedinstr: chalk.hex('#11FF66')('LinkedIn:'),
    instagramstr: chalk.hex('#11FF66')('Instagram:'),
    npmstr: chalk.hex('#11FF66')('npm:'),
}

//Links 
const links = {
    github: chalk.grey('https://github.com/') + gradients.orange('olivierk95'),
    linkedin: chalk.grey('https://www.linkedin.com/in/') + gradients.orange('olivier-keutgens'),
    instagram: chalk.grey('https://www.instagram.com/') + gradients.orange('organik.artist'),
    npm: chalk.grey('https://www.npmjs.com/~') + gradients.orange('olivierk95'),
}

//Final output desplayed within the box with all the modifications and the structure
const output =
`${styledData.githubstr}     ${links.github}
${styledData.linkedinstr}   ${links.linkedin}
${styledData.instagramstr}  ${links.instagram}
${styledData.npmstr}        ${links.npm}`;


//Grids (term-grid package)
var grid1 = new Grid([  ["",""],
                        ["",`${styledData.name} / ${styledData.handle}`],
                        ["",`${styledData.title}`],
                        ["",""],
                        ["","Links :"]
                    ]);
grid1.setWidth(0,5);


//CONSOLIDATION
//Above the box (with the term-grid p)
grid1.draw();

//Box
console.log(boxen(output , options));

//Under the box (with the term-grid package)