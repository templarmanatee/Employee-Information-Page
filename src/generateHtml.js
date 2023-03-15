const managerCard = (managerData) => {
  return `<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">${managerData.name}</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Manager</a>
      <p class="mt-2 text-gray-500"><strong>Email:</strong> ${managerData.email}</p>
      <p class="mt-2 text-gray-500"><strong>Office:</strong> ${managerData.office}</p>
    </div>
  </div>
</div>`
};

const engineerCard = (engineerData) => {
  return `<div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">${engineerData.name}</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Engineer</a>
      <p class="mt-2 text-gray-500"><strong>Email:</strong> ${engineerData.email}</p>
      <p class="mt-2 text-gray-500"><strong>Office:</strong> ${engineerData.github}</p>
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
      <p class="mt-2 text-gray-500"><strong>Office:</strong> ${internData.office}</p>
    </div>
  </div>
</div>`
};

const generateHtml = (data) => {
  cardArray = []; 

  for (let i = 0; i < data.length; i++) {
      const employee = data[i];
      const role = employee.getRole(); 

      if (role === 'Manager') {
          const managerCard = managerCard(employee);
          cardArray.push(managerCard);
      }

      // call engineer function
      if (role === 'Engineer') {
          const engineerCard = engineerCard(employee);
          cardArray.push(engineerCard);
      }

      // call intern function 
      if (role === 'Intern') {
          const internCard = internCard(employee);
          cardArray.push(internCard);
      }
      
  }

  // joining strings 
  const employeeCards = pageArray.join('')

  // return to generated page
  const generateTeam = generateTeamPage(employeeCards); 
  return generateTeam;

}

module.exports = generateHtml;