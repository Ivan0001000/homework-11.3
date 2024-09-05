const images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"];

const randomIndex = Math.floor(Math.random() * images.length);

const randomImage = images[randomIndex];

document.getElementById("random-image").src = `img/${randomImage}`;
