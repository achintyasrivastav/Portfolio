window.addEventListener('load', () => {
    const progressBar = document.querySelector('.progress-bar');
    const percentage = document.querySelector('.percentage');
    const revealScreen = document.querySelector('.reveal-screen');
    const mainContent = document.querySelector('.main-content');
  
    let loadProgress = 0;
  
    const loadingAnimation = setInterval(() => {
      loadProgress += 1;
      progressBar.style.width = `${loadProgress}%`;
      percentage.textContent = `${loadProgress}%`;
  
      if (loadProgress === 100) {
        clearInterval(loadingAnimation);
  
        // Slide up and fade out the reveal screen
        gsap.to(revealScreen, {
          z: '-100%',
          duration: 1, // Duration of the slide-up
          ease: 'power2.out',
          onComplete: () => {
            revealScreen.style.display = 'none'; // Ensures reveal screen doesn't block interaction
  
            // Fade-in main content
            gsap.to(mainContent, {
              opacity: 1,
              duration: .5,
              ease: 'power2.inOut'
            });
          }
        });
      }
    }, 30); // Adjust speed as needed
  });
  
  

let connect = 0;
document.querySelector('.connect').addEventListener('click', () => {
    const accounts = document.querySelectorAll('.account');

    if (connect === 0) {
        connect = 1;
        // Show the accounts with GSAP animation
        accounts.forEach((account, index) => {
            gsap.to(account, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                delay: index * 0.15, // Stagger the animations
                ease: "power2.out"
            });
        });

        // Bring the accounts container to the front
        gsap.to(document.querySelector('.accounts'), { zIndex: 99 });
    } else {
        connect = 0;
        // Hide the accounts with GSAP animation
        accounts.forEach((account, index) => {
            gsap.to(account, {
                opacity: 0,
                y: 20,
                duration: 0.5,
                delay: index * 0.1, // Stagger the animations
                ease: "power2.in"
            });
        });

        // Reset the accounts container zIndex
        gsap.to(document.querySelector('.accounts'), { zIndex: -1 });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const titles = document.querySelectorAll(".text-wrapper p");
    const tl = gsap.timeline({ repeat: -1, delay: 0.5 });

    // Initially hide all titles when the page loads
    titles.forEach(title => {
        gsap.set(title, { display: "none", opacity: 0 });
    });

    // Loop through each title to animate one at a time
    titles.forEach((title, index) => {
        // Set the title to be hidden initially
        tl.set(title, { display: "none", opacity: 0 })

          // Show the current paragraph
          .set(title, { display: "block" })
          .to(title, {
              opacity: 1,
              duration: 0.5, // Faster fade-in
              ease: "power2.out"
          })

          // Split the text into individual characters and animate each one
          .call(() => {
              const chars = title.textContent.split('');
              title.innerHTML = ''; // Clear existing content

              // Wrap each character in a <span>
              chars.forEach(char => {
                  const span = document.createElement("span");
                  span.textContent = char;
                  title.appendChild(span);
              });
          })
          
          // Animate each character into view
          .from(title.querySelectorAll("span"), {
              opacity: 0,
              y: 20,
              stagger: 0.05,
              duration: 0.3,
              ease: "power2.out"
          })
          
          // Hold the characters for a brief moment
          .to(title.querySelectorAll("span"), {
              opacity: 0,
              y: -20,
              stagger: 0.05,
              duration: 0.3,
              ease: "power2.in"
          }, "+=0.5")  // Hold characters before fading out

          // Fade out the entire paragraph
          .to(title, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.in"
          }, "+=0.5") // Brief pause before fade-out

          .set(title, { display: "none" });  // Hide the paragraph after fading out

        // Hide all other paragraphs during this animation
        titles.forEach((otherTitle, otherIndex) => {
            if (index !== otherIndex) {
                tl.set(otherTitle, { display: "none", opacity: 0 });
            }
        });
    });
});


const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
    audio = new Audio(`tunes/a.wav`); // Default audio src

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; // Set audio source based on key
    audio.play(); // Play audio

    const clickedKey = document.querySelector(`[data-key="${key}"]`); // Find clicked key element
    clickedKey.classList.add("active"); // Add active class
    setTimeout(() => { 
        clickedKey.classList.remove("active"); // Remove active class
    }, 150);

    // Trigger animation
    animateSkillBubble(key);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key); // Add data-key value to the allKeys array
    key.addEventListener("click", () => playTune(key.dataset.key)); // Add click listener
});

const handleVolume = (e) => {
    audio.volume = e.target.value; // Set audio volume
}

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide")); // Toggle hide class
}

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key); // Play tune if key is valid
}

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);


function animateSkillBubble(key) {
    const skillBubble = document.querySelector(`.key[data-key="${key}"] .skill-bubble`);
    
    if (skillBubble) {
        gsap.fromTo(
            skillBubble,
            { opacity: 0, y: 10}, // Start hidden, slightly below
            {
                opacity: 1,       // Fade in
                y: -120,           // Move up
                duration: 3,      // Duration
                ease: "power2.out",
                onComplete: () => {
                    gsap.to(skillBubble, { opacity: 0, duration: 1 }); // Fade out
                }
            }
        );
    }
}


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