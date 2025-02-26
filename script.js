/*document.addEventListener("DOMContentLoaded", function () {
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
});*/

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

    // Interactivity: Change background color when mouse moves over joke section
    const jokeSection = document.getElementById("joke-section");

    function changeBackground(event) {
        const x = event.clientX;
        const y = event.clientY;

        // Generate a dynamic color based on mouse position
        const red = Math.min(255, Math.floor((x / window.innerWidth) * 255));
        const blue = Math.min(255, Math.floor((y / window.innerHeight) * 255));

        jokeSection.style.backgroundColor = `rgb(${red}, 100, ${blue})`;
    }

    // Add mousemove event listener
    jokeSection.addEventListener("mousemove", changeBackground);

    // Reset background when the mouse leaves the section
    jokeSection.addEventListener("mouseleave", function () {
        jokeSection.style.backgroundColor = ""; // Reset to default
    });
});

