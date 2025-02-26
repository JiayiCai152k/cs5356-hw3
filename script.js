document.addEventListener("DOMContentLoaded", function () {
    function fetchJoke() {
        fetch("https://v2.jokeapi.dev/joke/Any?safe-mode")
            .then(response => response.json())
            .then(data => {
                const jokeElement = document.getElementById("joke-text");

                if (data.type === "single") {
                    jokeElement.textContent = data.joke; // Display single-line jokes
                } else if (data.type === "twopart") {
                    jokeElement.innerHTML = `<p>${data.setup}</p><p><strong>${data.delivery}</strong></p>`; // Display two-part jokes
                } else {
                    jokeElement.textContent = "Couldn't load a joke.";
                }
            })
            .catch(error => {
                document.getElementById("joke-text").textContent = "Failed to load joke.";
                console.error("Error fetching the joke:", error);
            });
    }

    // Fetch a joke on page load
    fetchJoke();

    // Add event listener to the button for fetching new jokes
    document.getElementById("new-joke").addEventListener("click", fetchJoke);
});
