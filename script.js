document.addEventListener("DOMContentLoaded", function () {
    function fetchArtworkImage() {
        fetch("https://api.artic.edu/api/v1/artworks/search?q=cats")
            .then(response => response.json())
            .then(data => {
                const artwork = data.data[0]; // Get the first artwork from the results
                const imageElement = document.getElementById("artwork-image");
                const titleElement = document.getElementById("artwork-title");

                if (artwork && artwork.id) {
                    // Construct image URL using the Art Institute of Chicago's IIIF system
                    const imageId = artwork.id;
                    const imageUrl = `https://www.artic.edu/iiif/2/${imageId}/full/400,/0/default.jpg`;

                    imageElement.src = imageUrl;
                    imageElement.alt = artwork.title;
                    titleElement.textContent = `"${artwork.title}"`;
                } else {
                    titleElement.textContent = "No artwork found.";
                    imageElement.alt = "No image available.";
                }
            })
            .catch(error => {
                document.getElementById("artwork-title").textContent = "Failed to load artwork.";
                console.error("Error fetching the artwork:", error);
            });
    }

    // Fetch an artwork image on page load
    fetchArtworkImage();

    // Add event listener to the button for fetching new images
    document.getElementById("new-artwork").addEventListener("click", fetchArtworkImage);
});
