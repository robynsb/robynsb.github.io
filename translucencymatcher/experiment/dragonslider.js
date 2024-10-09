// Directory where images are stored
const imageDir = "../dragonslider/";

// Array to hold image file paths
const imageFiles = ["0-1e-06.png", "1-0.1052641052631579.png", "2-0.2105272105263158.png", "3-0.31579031578947364.png", "4-0.42105342105263155.png", "5-0.5263165263157895.png", "6-0.6315796315789474.png", "7-0.7368427368421053.png", "8-0.8421058421052632.png", "9-0.947368947368421.png", "10-1.0526320526315789.png", "11-1.1578951578947367.png", "12-1.2631582631578946.png", "13-1.3684213684210524.png", "14-1.4736844736842105.png", "15-1.5789475789473684.png", "16-1.6842106842105262.png", "17-1.789473789473684.png", "18-1.894736894736842.png", "19-2.0.png", "21-2.263157894736842.png", "22-2.526315789473684.png", "23-2.7894736842105265.png", "24-3.052631578947368.png", "25-3.3157894736842106.png", "26-3.5789473684210527.png", "27-3.8421052631578947.png", "28-4.105263157894736.png", "29-4.368421052631579.png", "30-4.631578947368421.png", "31-4.894736842105263.png", "32-5.157894736842105.png", "33-5.421052631578947.png", "34-5.684210526315789.png", "35-5.947368421052632.png", "36-6.2105263157894735.png", "37-6.473684210526316.png", "38-6.7368421052631575.png", "39-7.0.png"];

// Preload images into an array
const preloadedImages = [];

// Reference to the image container and slider
const imageElement = document.getElementById('displayed-image');
const slider = document.getElementById('slider');

// Preload all images
imageFiles.forEach((filename, index) => {
    const img = new Image();
    img.src = imageDir + filename;
    preloadedImages.push(img.src);  // Store preloaded image paths
});

// Set slider max value based on the number of images
slider.max = preloadedImages.length - 1;

// Function to update the displayed image based on slider value
function updateImage() {
    const imgIndex = slider.value;
    imageElement.src = preloadedImages[imgIndex];
}

// Event listener for slider changes
slider.addEventListener('input', updateImage);

// Display the first image initially
imageElement.src = preloadedImages[0];