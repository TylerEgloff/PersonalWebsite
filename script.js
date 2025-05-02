// Mobile menu toggle button functionality 
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

function toggleMenu() {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
}

menuBtn.addEventListener('click', toggleMenu);
// Close menu if resized to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        mobileMenu.classList.add('hidden');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
});

// Shooting star 
function createShootingStar() {
    const container = document.getElementById('shooting-star-container');
    
    // Parameters
    const startY = Math.random() * window.innerHeight;
    const length = Math.random() * 120 + 30;
    const duration = Math.random() * 1 + .25;
    const angle = Math.random() * 30 - 15;
    const angleRad = angle * Math.PI / 180;
    const travelDistance = window.innerWidth + length;
    const dx = Math.cos(angleRad) * travelDistance;
    const dy = Math.sin(angleRad) * travelDistance;

    // Create container for both elements
    const starContainer = document.createElement('div');
    starContainer.style.position = 'absolute';
    starContainer.style.left = `-${length}px`;
    starContainer.style.top = `${startY}px`;
    starContainer.style.transform = `rotate(${angle}deg)`;
    starContainer.style.transformOrigin = 'left center';

    // Create star body
    const star = document.createElement('div');
    star.style.width = `${length}px`;
    star.style.height = '2px';
    star.style.background = `linear-gradient(-90deg, rgba(255,255,255,1), rgba(255,255,255,0))`;
    star.style.borderRadius = '2px';
    star.style.filter = 'drop-shadow(0 0 4px rgba(255,255,255,0.5))';

    // Create twinkle effect
    const twinkleSize = 12; 
    const twinkle = document.createElement('div');
    twinkle.style.position = 'absolute';
    twinkle.style.left = `${length}px`;
    twinkle.style.top = '1';
    twinkle.style.width = `${twinkleSize}px`;
    twinkle.style.height = `${twinkleSize}px`;
    twinkle.style.transform = `translateX(-${twinkleSize/2}px) translateY(-${twinkleSize/2}px)`;
    twinkle.innerHTML = `
        <div style="
            position:absolute; width:100%; height:3px; background:rgba(255,255,255,0.2);
            transform:rotate(45deg); top:50%; left:0; margin-top:-1.5px;
            box-shadow:0 0 12px 6px rgba(120,180,255,0.3), 0 0 12px 6px rgba(120,180,255,0.1);
            border-radius: 2px;
        "></div>
        <div style="
            position:absolute; width:100%; height:3px; background:rgba(255,255,255,0.2);
            transform:rotate(-45deg); top:50%; left:0; margin-top:-1.5px;
            box-shadow:0 0 12px 6px rgba(120,180,255,0.3), 0 0 12px 6px rgba(120,180,255,0.1);
            border-radius: 2px;
        "></div>
    `;

    starContainer.appendChild(star);
    starContainer.appendChild(twinkle);
    container.appendChild(starContainer);

    // Animate the container
    const animation = starContainer.animate([
        { transform: `rotate(${angle}deg) translateX(0) translateY(0)`, opacity: 0 },
        { transform: `rotate(${angle}deg) translateX(0) translateY(0)`, opacity: 1, offset: 0.1 },
        { transform: `rotate(${angle}deg) translateX(${dx}px) translateY(${dy}px)`, opacity: 0 }
    ], {
        duration: duration * 1000,
        easing: 'cubic-bezier(0.1, 0, 0.8, 1)'
    });

    // Twinkle pulse animation
    const twinkleAnimation = twinkle.animate([
        { transform: `translateX(-${twinkleSize/2}px) translateY(-${twinkleSize/2}px) scale(1)`, opacity: 0 },
        { transform: `translateX(-${twinkleSize/2}px) translateY(-${twinkleSize/2}px) scale(1.5)`, opacity: 1, offset: 0.3 },
        { transform: `translateX(-${twinkleSize/2}px) translateY(-${twinkleSize/2}px) scale(1)`, opacity: 0.7, offset: 0.6 },
        { transform: `translateX(-${twinkleSize/2}px) translateY(-${twinkleSize/2}px) scale(1.3)`, opacity: 0.3 }
    ], {
        duration: duration * 750,
        easing: 'ease-in-out',
        iterations: Infinity
    });

    animation.onfinish = () => {
        twinkleAnimation.cancel();
        if (starContainer.parentNode) container.removeChild(starContainer);
    };
}

// Shooting star loop w/ random timeout
function shootingStarLoop() {
    createShootingStar();
    setTimeout(shootingStarLoop, Math.random() * 10000 + 20000);
}

shootingStarLoop();

// Profile card text
const textContent = ["Developer", "Student", "Researcher"];
let contentIndex = 0;
let charIndex = 0;
let typing = true;

const text = document.getElementById('profile-text');
const cursor = document.getElementById('cursor');

// Blinking cursor effect
setInterval(() => {
    cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
}, 500);

function textLoop() {
    const current = textContent[contentIndex];
    if (typing) {
        if (charIndex < current.length) {
            text.textContent += current[charIndex++];
            setTimeout(textLoop, 80);
        } else {
            typing = false;
            setTimeout(textLoop, 3000); // Pause before erasing
        }
    } else {
        if (charIndex > 0) {
            text.textContent = current.substring(0, --charIndex);
            setTimeout(textLoop, 40);
        } else {
            typing = true;
            contentIndex = (contentIndex + 1) % textContent.length;
            setTimeout(textLoop, 400); // Pause before tying next
        }
    }
}

textLoop();