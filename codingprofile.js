window.addEventListener("load", function() {
    gsap.from("#side-section", {
        x: '-100%', 
        duration: 1, 
        ease: "power2.out"
    });

    gsap.from("#side-section h2", {
        opacity: 0, 
        y: 20, 
        duration: 0.5, 
        ease: "power2.out",
        delay: 1, 
        stagger: 0.2 
    });
});

const menuBar = document.querySelector('.menu-bar');
const sideSection = document.getElementById('side-section');
const mainSection = document.getElementById('main-section');
const sideHeadings = document.querySelectorAll('#side-section h2');

let isOpen = true;

menuBar.addEventListener('click', () => {
    if (isOpen) {
        // Slide the sidebar out

        gsap.to(sideSection, { x: '-100%', duration: 1, ease: 'power2.inOut' });
        gsap.to(sideHeadings, { opacity: 0, y: -20, duration: 0.5, stagger: 0.2 });

        
        gsap.to(menuBar, { x: -100, duration: 1, ease: 'power2.inOut' });
        gsap.to(mainSection, { x: '-10%', duration: 1, ease: 'power2.inOut' });
        
    } else {
        // Slide the sidebar back in
        gsap.to(sideSection, { x: '0%', duration: 1, ease: 'power2.inOut' });
        gsap.fromTo(sideHeadings, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
        );
        gsap.to(menuBar, { x: 0, duration: 1, ease: 'power2.inOut' });
        gsap.to(mainSection, { x: '0%', duration: 1, ease: 'power2.inOut' });
    }
    isOpen = !isOpen;
});


/*-----------------------------------------------------------------------------------------------------------------*/


// Import GSAP and MotionPathPlugin if not already done
gsap.registerPlugin(MotionPathPlugin);

const flowerContainer = document.querySelector('.flower-container');

// Number of flower particles to create
const flowerCount = 20;

// Function to create a flower particle with random properties
function createFlower() {
    const flower = document.createElement('img');
    flower.src = './icons/daisy.png';  // Adjust path as needed
    flower.classList.add('flower');

    // Random size between 20px and 50px
    const size = Math.floor(Math.random() * 30) + 20;
    flower.style.width = `${size}px`;
    flower.style.height = 'auto';

    // Random initial position within the viewport
    flower.style.top = `${Math.random() * 100}vh`;
    flower.style.left = `${Math.random() * 100}vw`;

    flowerContainer.appendChild(flower);

    animateFlower(flower);
}

// Function to animate a flower in a random path
function animateFlower(flower) {
    const duration = Math.random() * 10 + 5;  // Duration between 5s and 15s
    gsap.to(flower, {
        duration: duration,
        repeat: -1,
        ease: "power1.inOut",
        motionPath: {
            path: [
                { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
                { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
                { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight },
                { x: Math.random() * window.innerWidth, y: Math.random() * window.innerHeight }
            ],
            curviness: 1.5,
            autoRotate: false
        },
        opacity: gsap.utils.random(0.3, 1),
        scale: gsap.utils.random(0.5, 1),
        yoyo: true
    });
}

// Create multiple flowers
for (let i = 0; i < flowerCount; i++) {
    createFlower();
}

