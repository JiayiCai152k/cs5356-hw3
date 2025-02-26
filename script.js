document.addEventListener("DOMContentLoaded", function () {
    function fetchDogImage() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                const imageElement = document.getElementById("dog-image");
                imageElement.src = data.message; // Use the correct URL
                imageElement.alt = "Random Dog"; // Add alt text for accessibility
            })
            .catch(error => {
                document.getElementById("dog-image").alt = "Failed to load dog image.";
                console.error("Error fetching the dog image:", error);
            });
    }

    // Fetch a dog image on page load
    fetchDogImage();

    // Add event listener to the button for fetching new images
    document.getElementById("new-dog").addEventListener("click", fetchDogImage);
});
