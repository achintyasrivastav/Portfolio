
let connect = 0;
document.querySelector('.connect').addEventListener('click', () => {
    const accounts = document.querySelectorAll('.account');

    if (connect === 0) {
        connect = 1;
        accounts.forEach((account, index) => {
            setTimeout(() => {
                account.style.opacity = 1;
                account.style.transform = "translateY(0)";
                document.querySelector('.accounts').style.zIndex = 99;
            }, index * 150); 
        });
    } else {
        connect = 0;
        const totalAccounts = accounts.length
        accounts.forEach((account, index) => {
            setTimeout(() => {
                account.style.opacity = 0;
                account.style.transform = "translateY(0)";
                document.querySelector('.accounts').style.zIndex = 99;
            }, index * 100);
        });
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


