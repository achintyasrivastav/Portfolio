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

    gsap.from("#main-section", {
        opacity: 0,
        x: 18,
        duration: 1,
        ease: "power2.out",
        delay: 1, 
        stagger: 0.2 
    })
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

        gsap.to(menuBar, { x: -100, y: -100, duration: 1, ease: 'power2.inOut' });
        gsap.to(mainSection, { x: '-10%', duration: 1, ease: 'power2.inOut' });
        
    } else {
        // Slide the sidebar back in
        gsap.to(sideSection, { x: '0%', duration: 1, ease: 'power2.inOut' });
        gsap.fromTo(sideHeadings, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, stagger: 0.1 }
        );
        gsap.to(menuBar, { x: 0, y: 30, duration: 1, ease: 'power2.inOut' });
        gsap.to(mainSection, { x: '0%', duration: 1, ease: 'power2.inOut' });
    }
    isOpen = !isOpen;
});


/*-----------------------------------------------------------------------------------------------------------------*/
