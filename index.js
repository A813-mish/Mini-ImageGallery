document.addEventListener('DOMContentLoaded', () => {
    let currentIndex = 0;
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const closeLightbox = document.getElementById('closeLightbox');
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');
    const header = document.getElementById('headerTitle'); // Target the <h1> element

    // Function to change the color of <h1> when clicked or touched
    function changeColor() {
        const colors = ['#FF6347', '#00BFFF', '#7FFF00', '#FFD700', '#FF4500', '#ADFF2F', '#32CD32'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        header.style.color = randomColor;
    }

    // Add event listeners to <h1> for click and touch events
    header.addEventListener('click', changeColor);
    header.addEventListener('touchstart', changeColor);  // For touch devices

    // Hover effect for lighting effect on images
    galleryItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Generate a random glowing color
            const randomGlowColor = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, 0.7)`;
            item.style.boxShadow = `0 0 15px 5px ${randomGlowColor}`;
        });

        item.addEventListener('mouseleave', () => {
            // Remove the glow when the mouse leaves
            item.style.boxShadow = '';
        });
    });

    // Open the lightbox when an image is clicked
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            lightboxImage.src = item.querySelector('img').src;
            lightbox.style.display = 'flex';
        });
    });

    // Close the lightbox
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Navigate to the previous image
    prevImage.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? galleryItems.length - 1 : currentIndex - 1;
        lightboxImage.src = galleryItems[currentIndex].querySelector('img').src;
    });

    // Navigate to the next image (with cross symbol button)
    nextImage.addEventListener('click', () => {
        currentIndex = (currentIndex === galleryItems.length - 1) ? 0 : currentIndex + 1;
        lightboxImage.src = galleryItems[currentIndex].querySelector('img').src;
    });

    // Close the lightbox if clicked outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});
