document.addEventListener("DOMContentLoaded", function () {
//
    // Fetch data from the JSON file
    fetch("assets/js/travel_recommendation_api.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data); // Log the data to verify it's being fetched correctly
        displayRecommendations(data.countries); // Call the function to display recommendations
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  
    // Function to display travel recommendations
    function displayRecommendations(countries) {
      const recommendationsContainer = document.querySelector(".recommendations");
  
      countries.forEach((country) => {
        // Create a container for each country
        const countryDiv = document.createElement("div");
        countryDiv.classList.add("country");
  
        // Add country name
        const countryName = document.createElement("h2");
        countryName.textContent = country.name;
        countryDiv.appendChild(countryName);
  
        // Add cities
        country.cities.forEach((city) => {
          const cityDiv = document.createElement("div");
          cityDiv.classList.add("city");
  
          // Add city name
          const cityName = document.createElement("h3");
          cityName.textContent = city.name;
          cityDiv.appendChild(cityName);
  
          // Add city image
          const cityImage = document.createElement("img");
          cityImage.src = city.imageUrl; // Ensure the imageUrl is valid
          cityImage.alt = city.name;
          cityDiv.appendChild(cityImage);
  
          // Add city description
          const cityDescription = document.createElement("p");
          cityDescription.textContent = city.description;
          cityDiv.appendChild(cityDescription);
  
          // Append city to country
          countryDiv.appendChild(cityDiv);
        });
  
        // Append country to the recommendations container
        recommendationsContainer.appendChild(countryDiv);
      });
    }
  });