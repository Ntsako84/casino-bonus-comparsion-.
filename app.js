fetch("bonuses.json")
  .then(response => response.json())
  .then(data => {
    const tbody = document.querySelector("#bonuses tbody");

    data.forEach(casino => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${casino.casino}</td>
        <td>${casino.welcomeBonus}</td>
        <td>${casino.wageringRequirement}x</td>
        <td>${casino.minimumDeposit}</td>
        <td>
          <a href="${casino.sourceUrl}" target="_blank">
            Source
          </a>
        </td>
      `;

      tbody.appendChild(row);
    });
  })
  .catch(error => {
    console.error("Error loading JSON:", error);
  });