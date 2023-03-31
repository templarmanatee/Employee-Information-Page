function managerCard(managerData) {
  return `
<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-12">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${managerData.name}</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400"><strong>Manager (id: ${managerData.id})</strong></a>
  <p class="font-normal text-gray-700 dark:text-gray-400">Email: ${managerData.email}</p>
  <p class="font-normal text-gray-700 dark:text-gray-400">Office: ${managerData.officeNumber}</p>
</div>`;
}

function engineerCard(engineerData) {
  return `
<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-12">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${engineerData.name}</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400"><strong>Intern (id: ${engineerData.id})</strong></a>
  <p class="font-normal text-gray-700 dark:text-gray-400">Email: ${engineerData.email}</p>
  <p class="font-normal text-gray-700 dark:text-gray-400">GitHub: ${engineerData.github}</p>
</div>`;
}

const internCard = (internData) => {
  return `
<div class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 mx-12">
  <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${internData.name}</h5>
  <p class="font-normal text-gray-700 dark:text-gray-400"><strong>Intern (id: ${internData.id})</strong></a>
  <p class="font-normal text-gray-700 dark:text-gray-400">Email: ${internData.email}</p>
  <p class="font-normal text-gray-700 dark:text-gray-400">School: ${internData.school}</p>
</div>`;
};

// generate html page
const generateFullSite = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header class="justify-center m-4  text-2xl font-bold">Team Profile Generator</header>
      <main>
          <div class="container">
              <div class="flex justify-center" id="team-cards">
                  <!--Team Cards-->
                  ${employeeCards}
              </div>
          </div>
      </main>
      
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  </html>
`;
};

const generateHtml = (data) => {
  cardArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === "Manager") {
      const manager = managerCard(employee);
      cardArray.push(manager);
    }

    // call engineer function
    if (role === "Engineer") {
      const engineer = engineerCard(employee);
      cardArray.push(engineer);
    }

    // call intern function
    if (role === "Intern") {
      const intern = internCard(employee);
      cardArray.push(intern);
    }
  }

  // joining strings
  const employeeCards = cardArray.join("");

  // return to generated page
  const generateTeam = generateFullSite(employeeCards);
  return generateTeam;
};

module.exports = generateHtml;
