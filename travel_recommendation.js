const home = document.getElementById("home");
const aboutUs = document.getElementById("aboutUs");
const btnSearch = document.getElementById('btnSearch');
function searchDestination() {
	const input = document.getElementById('destination').value.toLowerCase();
	const resultDiv = document.getElementById('result');
	resultDiv.innerHTML = '';

	fetch('travel_recommendation_api.json')
	  .then(response => response.json())
	  .then(data => {
		const destination = data.destination.find(item => item.name.toLowerCase() === input);
		if (destination) {
		  const greece = destination.greece.join(', ');
		  const japan = destination.japan.join(', ');
		  const brazil = destination.brazil.join(', ');
          const australia = destination.australia;

          resultDiv.innerHTML += `<h2>${destination.name}</h2>`;
		  resultDiv.innerHTML += `<img src="${destination.imagesrc}" alt="hjh">`;

          resultDiv.innerHTML += `<p><strong>Greece:</strong> ${greece}</p>`;
		  resultDiv.innerHTML += `<p><strong>Japan:</strong> ${japan}</p>`;
		  resultDiv.innerHTML += `<p><strong>Brazil:</strong> ${brazil}</p>`;
          resultDiv.innerHTML += `<p><strong>Australia:</strong> ${australia}</p>`;
		} else {
		  resultDiv.innerHTML = 'Destination not found.';
		}
	  })
	  .catch(error => {
		console.error('Error:', error);
		resultDiv.innerHTML = 'An error occurred while fetching data.';
	  });
  }
    btnSearch.addEventListener('click', searchDestination);

function generateReport() {
    const Destinations = destination.length;
    const destination = {
        Name: '',
        Cities: '',
        "Description": '',
	};

	for (const destination of destination) {
		citiesCount[destination.cities]++;
    }
	report.innerHTML = `Number of Destinations: ${numDestinations}<br><br>`;
	report.innerHTML += `Destination Breakdown:<br>`;
	for (const destination in destinationCount) {
		report.innerHTML += `${destination}: ${destinationCount[destination]}<br>`;
	}
}
addDestinationButton.addEventListener("click", addDestination);