function addRecommendation() {
  // Get the message of the new recommendation
  let recommendation = document.getElementById("new_recommendation");

  // If the user has left a recommendation, add it to the list
  if (recommendation.value != null && recommendation.value.trim() != "") {
    console.log("New recommendation added");

    // Create a new 'recommendation' element and set its value to the user's message
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + recommendation.value + "<span>&#8221;</span>";

    // Add this element to the end of the list of recommendations
    document.getElementById("all_recommendations").appendChild(element);

    // Save the new recommendation to localStorage
    saveRecommendationToLocalStorage(recommendation.value);

    // Reset the value of the textarea
    recommendation.value = "";
    showPopup(true);
  }
}

function saveRecommendationToLocalStorage(message) {
  // Get existing recommendations from localStorage
  let recommendations = JSON.parse(localStorage.getItem('recommendations')) || [];

  // Add the new recommendation to the array
  recommendations.push(message);

  // Save the updated array back to localStorage
  localStorage.setItem('recommendations', JSON.stringify(recommendations));
}

function displayRecommendations() {
  // Retrieve stored recommendations from localStorage
  const recommendations = JSON.parse(localStorage.getItem('recommendations')) || [];

  // Loop through each recommendation and display it
  recommendations.forEach(function(rec) {
    var element = document.createElement("div");
    element.setAttribute("class", "recommendation");
    element.innerHTML = "<span>&#8220;</span>" + rec + "<span>&#8221;</span>";

    // Add the recommendation to the list
    document.getElementById("all_recommendations").appendChild(element);
  });
}

function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible';
  } else {
    document.getElementById('popup').style.visibility = 'hidden';
  }
}

// Load recommendations when the page is loaded
window.onload = function() {
  displayRecommendations();
};
