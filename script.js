document.addEventListener("DOMContentLoaded", function () {
    function fetchRandomImage() {
        const imageElement = document.getElementById("random-image");
        const randomId = Math.floor(Math.random() * 1000); // Generate a random ID for different images
        imageElement.src = `https://picsum.photos/400/300?random=${randomId}`;
        imageElement.alt = "Random Image";
    }

    // Fetch an image on page load
    fetchRandomImage();

    // Add event listener to the button for fetching new images
    document.getElementById("new-image").addEventListener("click", fetchRandomImage);
});
