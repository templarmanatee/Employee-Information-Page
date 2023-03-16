function managerCard (managerData) {
  return (`<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">${managerData.name}</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Manager</a>
      <p class="mt-2 text-gray-500"><strong>Email:</strong> ${managerData.email}</p>
      <p class="mt-2 text-gray-500"><strong>Office:</strong> ${managerData.officeNumber}</p>
    </div>
  </div>
</div>`)};

function engineerCard (engineerData) {
  return `<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">${engineerData.name}</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Engineer</a>
      <p class="mt-2 text-gray-500"><strong>Email:</strong> ${engineerData.email}</p>
      <p class="mt-2 text-gray-500"><strong>GitHub:</strong> ${engineerData.github}</p>
    </div>
  </div>
</div>`
};

const internCard = (internData) => {
  return `<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">${internData.name}</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Intern</a>
      <p class="mt-2 text-gray-500"><strong>Email:</strong> ${internData.email}</p>
      <p class="mt-2 text-gray-500"><strong>School:</strong> ${internData.school}</p>
    </div>
  </div>
</div>`
};

// generate html page 
const generateFullSite = function (employeeCards) {   
  return`
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
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
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
}

const generateHtml = (data) => {
  cardArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 

      if (role === 'Manager') {
          const manager = managerCard(employee);
          cardArray.push(manager);
      }

      // call engineer function
      if (role === 'Engineer') {
          const engineer = engineerCard(employee);
          cardArray.push(engineer);
      }

      // call intern function 
      if (role === 'Intern') {
          const intern = internCard(employee);
          cardArray.push(intern);
      }
      
  }

  // joining strings 
  const employeeCards = cardArray.join('')

  // return to generated page
  const generateTeam = generateFullSite(employeeCards); 
  return generateTeam;

}

module.exports = generateHtml;