//enter the team manager’s name, employee ID, email address, and office number
//menu to add engineer/intern/ or finish building team
//select engineer
//i am taken back to the menu
//selct intern
//select finish
//generate html file

const fs = require("fs");
const inquirer = require("inquirer");
//generate html
const generateHTML = ({ managerName, managerID, managerEmail, managerNumber }) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${managerName}</title>
</head>
<body>
    <div>${managerName}</div>
    <div>${managerID}</div>
    <div>${managerEmail}</div>
    <div>${managerNumber}</div>
</body>
</html>`;

//ask questions to populate html
inquirer
  .prompt([
    {
      type: "input",
      message: "what is the manager's name?",
      name: "managerName",
    },
    {
      type: "input",
      message: "what is the manager's employee ID?",
      name: "managerID",
    },
    {
      type: "input",
      message: "what is the manager's email address?",
      name: "managerEmail",
    },
    {
      type: "input",
      message: "what is the manager's office number?",
      name: "managerNumber",
    },
  ])
  .then((answers) => {
    console.log(answers);
    const parseHTML = generateHTML(answers);
    //write to file
    fs.writeFile("team.html", parseHTML, (err) => (err ? console.error(err) : console.log("Success!")));
  });
