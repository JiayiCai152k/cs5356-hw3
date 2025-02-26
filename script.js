document.addEventListener("DOMContentLoaded", function () {
    function fetchDogImage() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                document.getElementById("dog-image").src = data.message;
            })
            .catch(error => {
                console.error("Error fetching the dog image:", error);
            });
    }

    // Fetch a dog image on page load
    fetchDogImage();

    // Add event listener to the button for fetching new images
    document.getElementById("new-dog").addEventListener("click", fetchDogImage);
});

