// Dictionary to hold image sets, where keys are the image directories
const imageSets = {
    "../dragonslider/": ["0-0.0.png", "1-0.10526315789473684.png", "2-0.21052631578947367.png", "3-0.3157894736842105.png", "4-0.42105263157894735.png", "5-0.5263157894736842.png", "6-0.631578947368421.png", "7-0.7368421052631579.png", "8-0.8421052631578947.png", "9-0.9473684210526315.png", "10-1.0526315789473684.png", "11-1.1578947368421053.png", "12-1.263157894736842.png", "13-1.3684210526315788.png", "14-1.4736842105263157.png", "15-1.5789473684210527.png", "16-1.6842105263157894.png", "17-1.789473684210526.png", "18-1.894736842105263.png", "19-2.0.png", "20-2.25.png", "21-2.5.png", "22-2.75.png", "23-3.0.png", "24-3.25.png", "25-3.5.png", "26-3.75.png", "27-4.0.png", "28-4.25.png", "29-4.5.png", "30-4.75.png", "31-5.0.png", "32-5.25.png", "33-5.5.png", "34-5.75.png", "35-6.0.png", "36-6.25.png", "37-6.5.png", "38-6.75.png", "39-7.0.png"],
    "../donutslider/": ["0-0.0.png", "1-0.20408163265306123.png", "2-0.40816326530612246.png", "3-0.6122448979591837.png", "4-0.8163265306122449.png", "5-1.0204081632653061.png", "6-1.2244897959183674.png", "7-1.4285714285714286.png", "8-1.6326530612244898.png", "9-1.836734693877551.png", "10-2.0408163265306123.png", "11-2.2448979591836737.png", "12-2.4489795918367347.png", "13-2.6530612244897958.png", "14-2.857142857142857.png", "15-3.0612244897959187.png", "16-3.2653061224489797.png", "17-3.4693877551020407.png", "18-3.673469387755102.png", "19-3.8775510204081636.png", "20-4.081632653061225.png", "21-4.285714285714286.png", "22-4.4897959183673475.png", "23-4.6938775510204085.png", "24-4.8979591836734695.png", "25-5.1020408163265305.png", "26-5.3061224489795915.png", "27-5.510204081632653.png", "28-5.714285714285714.png", "29-5.918367346938775.png", "30-6.122448979591837.png", "31-6.326530612244898.png", "32-6.530612244897959.png", "33-6.73469387755102.png", "34-6.938775510204081.png", "35-7.142857142857143.png", "36-7.346938775510204.png", "37-7.551020408163265.png", "38-7.755102040816327.png", "39-7.959183673469388.png", "40-8.16326530612245.png", "41-8.36734693877551.png", "42-8.571428571428571.png", "43-8.775510204081632.png", "44-8.979591836734695.png", "45-9.183673469387756.png", "46-9.387755102040817.png", "47-9.591836734693878.png", "48-9.795918367346939.png", "49-10.0.png"],
    "../donutbackgroundslider/": ["0-0.0.png", "1-0.09183673469387756.png", "2-0.1836734693877551.png", "3-0.2755102040816327.png", "4-0.3673469387755102.png", "5-0.45918367346938777.png", "6-0.5510204081632654.png", "7-0.6428571428571429.png", "8-0.7346938775510204.png", "9-0.826530612244898.png", "10-0.9183673469387755.png", "11-1.0102040816326532.png", "12-1.1020408163265307.png", "13-1.1938775510204083.png", "14-1.2857142857142858.png", "15-1.3775510204081634.png", "16-1.469387755102041.png", "17-1.5612244897959184.png", "18-1.653061224489796.png", "19-1.7448979591836735.png", "20-1.836734693877551.png", "21-1.9285714285714286.png", "22-2.0204081632653064.png", "23-2.112244897959184.png", "24-2.2040816326530615.png", "25-2.295918367346939.png", "26-2.3877551020408165.png", "27-2.479591836734694.png", "28-2.5714285714285716.png", "29-2.663265306122449.png", "30-2.7551020408163267.png", "31-2.8469387755102042.png", "32-2.938775510204082.png", "33-3.0306122448979593.png", "34-3.122448979591837.png", "35-3.2142857142857144.png", "36-3.306122448979592.png", "37-3.3979591836734695.png", "38-3.489795918367347.png", "39-3.5816326530612246.png", "40-3.673469387755102.png", "41-3.7653061224489797.png", "42-3.857142857142857.png", "43-3.9489795918367347.png", "44-4.040816326530613.png", "45-4.13265306122449.png", "46-4.224489795918368.png", "47-4.316326530612245.png", "48-4.408163265306123.png", "49-4.5.png"],
    "../textureddragonslider/": ["0-0.0.png", "1-0.20408163265306123.png", "2-0.40816326530612246.png", "3-0.6122448979591837.png", "4-0.8163265306122449.png", "5-1.0204081632653061.png", "6-1.2244897959183674.png", "7-1.4285714285714286.png", "8-1.6326530612244898.png", "9-1.836734693877551.png", "10-2.0408163265306123.png", "11-2.2448979591836737.png", "12-2.4489795918367347.png", "13-2.6530612244897958.png", "14-2.857142857142857.png", "15-3.0612244897959187.png", "16-3.2653061224489797.png", "17-3.4693877551020407.png", "18-3.673469387755102.png", "19-3.8775510204081636.png", "20-4.081632653061225.png", "21-4.285714285714286.png", "22-4.4897959183673475.png", "23-4.6938775510204085.png", "24-4.8979591836734695.png", "25-5.1020408163265305.png", "26-5.3061224489795915.png", "27-5.510204081632653.png", "28-5.714285714285714.png", "29-5.918367346938775.png", "30-6.122448979591837.png", "31-6.326530612244898.png", "32-6.530612244897959.png", "33-6.73469387755102.png", "34-6.938775510204081.png", "35-7.142857142857143.png", "36-7.346938775510204.png", "37-7.551020408163265.png", "38-7.755102040816327.png", "39-7.959183673469388.png", "40-8.16326530612245.png", "41-8.36734693877551.png", "42-8.571428571428571.png", "43-8.775510204081632.png", "44-8.979591836734695.png", "45-9.183673469387756.png", "46-9.387755102040817.png", "47-9.591836734693878.png", "48-9.795918367346939.png", "49-10.0.png"],

    // Add more directories and their image sets here as needed
};

// Function to preload images
function preloadImages(imageDir, imageSet) {
    const preloadedImages = [];
    imageSet.forEach((filename) => {
        const img = new Image();
        img.src = imageDir + filename;
        preloadedImages.push(img);
    });
    return preloadedImages; // Return array of preloaded images
}

// Function to handle image preloading and slider updates
function setupSlider(sliderContainer) {
    const imageDir = sliderContainer.getAttribute('data-image-dir');  // Get image directory from data attribute
    const slider = sliderContainer.querySelector('.slider');  // Find the slider within this container
    const imageElement = sliderContainer.querySelector('.testimg');  // Find the image element

    // Check if the image directory exists in the imageSets dictionary
    if (imageSets[imageDir]) {
        const imageSet = imageSets[imageDir];  // Get the image set for this directory

        // Preload images
        const preloadedImages = preloadImages(imageDir, imageSet);

        // Set slider max value based on the number of images
        slider.max = preloadedImages.length - 1;

        // Function to update the displayed image based on slider value
        function updateImage() {
            const imgIndex = slider.value;
            imageElement.src = preloadedImages[imgIndex].src; // Use preloaded image source
        }

        // Event listener for slider changes
        slider.addEventListener('input', updateImage);

        // Display the first image initially
        imageElement.src = preloadedImages[0].src;
    } else {
        console.error(`Image set for directory ${imageDir} not found.`);
    }
}

// Set up all sliders on the page
document.querySelectorAll('.slider-container').forEach((sliderContainer) => {
    setupSlider(sliderContainer);
});