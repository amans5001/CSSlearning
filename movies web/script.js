// Sample movie data (you can replace it with your own data)
const movies = [
    { title: "Movie 1", image: "movie1.jpg" },
    { title: "Movie 2", image: "movie2.jpg" },
    { title: "Movie 3", image: "movie3.jpg" },
    // Add more movie objects as needed
];

// Function to dynamically create movie cards
function createMovieCards(containerId, movieData) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Clear previous content

    movieData.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');

        const image = document.createElement('img');
        image.src = `images/${movie.image}`;
        image.alt = movie.title;

        const title = document.createElement('h3');
        title.textContent = movie.title;

        card.appendChild(image);
        card.appendChild(title);

        container.appendChild(card);
    });
}

// Populate featured movies
createMovieCards('featured-movies', movies.slice(0, 3));

// Populate popular movies
createMovieCards('popular-movies', movies.slice(3, 6));
