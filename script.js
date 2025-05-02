// Mobile menu toggle button functionality 
// ---------------------------------------------------------
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

// Scroll to top button functionality
// ---------------------------------------------------------
window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const shouldShow = window.scrollY > 100 && window.scrollY > scrollable - 200;
    toTopBtn.classList.toggle('hidden', !shouldShow);
});

// Shooting stars
// ---------------------------------------------------------
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
    twinkle.style.transform = `translateX(-${twinkleSize / 2}px) translateY(-${twinkleSize / 2}px)`;
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
        { transform: `translateX(-${twinkleSize / 2}px) translateY(-${twinkleSize / 2}px) scale(1)`, opacity: 0 },
        { transform: `translateX(-${twinkleSize / 2}px) translateY(-${twinkleSize / 2}px) scale(1.5)`, opacity: 1, offset: 0.3 },
        { transform: `translateX(-${twinkleSize / 2}px) translateY(-${twinkleSize / 2}px) scale(1)`, opacity: 0.7, offset: 0.6 },
        { transform: `translateX(-${twinkleSize / 2}px) translateY(-${twinkleSize / 2}px) scale(1.3)`, opacity: 0.3 }
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

// Profile card text effect
// ---------------------------------------------------------
const textContent = ["Developer", "Student", "Researcher"];
let contentIndex = 0;
let charIndex = 0;
let typing = true;

const text = document.getElementById('profile-text');
const cursor = document.getElementById('cursor');

// Set cursor to blink on an interval
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

// Alien animation
// ---------------------------------------------------------
const svgs = [
    `<svg viewBox="0 0 512 512" width="24" height="24" class="w-6 h-6"><g><path fill="#fff" d="m468.34,111.66l1,69.68l-42.65,0l0,-42.68l-42.69,0l0,-21.32l42.69,0l0,-64l-64,0l0,42.65l-42.69,0l0,42.67l-128,0l0,-42.67l-42.66,0l0,-42.65l-64,0l0,64l42.66,0l0,21.32l-42.66,0l0,42.68l-42.65,0l1,-75.68l-44.69,1l-0.25,222.08l48.75,-0.25l-0.25,-27.25l15.75,0.75l1,28.67l21.34,0l2,36.33l23.66,2l0,40.67l-61.31,-3l0,52l77.91,2.75l-0.09,-30.25l30.83,0.5l-1,-60.32l201.35,3l3,63.32l32.65,3l2.25,33.25l82.25,4.25l-2.5,-51.5l-65.34,-4l-3,-45.67l20.69,0l-2,-46.33l21.31,0l-1,-26.67l18.25,0.75l1.25,28.75l45.5,1.5l0,-222.33l-43.66,-1zm-276.34,133.68l-64,0l0,-64l64,0l0,64zm192,0l-64,0l0,-64l64,0l0,64z"/></g></svg>`,
    `<svg viewBox="0 0 512 512" width="24" height="24" class="w-6 h-6"><g><path fill="#fff" d="m469.34,266.66l0,-85.32l-42.65,0l0,-42.68l-42.69,0l0,-21.32l42.69,0l0,-64l-64,0l0,42.65l-42.69,0l0,42.67l-128,0l0,-42.67l-42.66,0l0,-42.65l-64,0l0,64l42.66,0l0,21.32l-42.66,0l0,42.68l-42.65,0l0,85.32l-42.69,0l0,149.33l64,0l0,-85.33l21.34,0l0,85.33l42.66,0l0,42.67l106.69,0l0,-64l-85.35,0l0,-21.32l213.35,0l0,21.32l-85.35,0l0,64l106.66,0l0,-42.67l42.69,0l0,-85.33l21.31,0l0,85.33l64,0l0,-149.33l-42.66,0zm-277.34,-21.32l-64,0l0,-64l64,0l0,64zm192,0l-64,0l0,-64l64,0l0,64z"/></g></svg>`
];

let alienExists = null;

function moveAlien() {
    if (!alienExists) {
        alienExists = document.createElement("div");
        alienExists.style.position = "fixed";
        alienExists.style.left = "16px";
        alienExists.style.top = "-48px";
        alienExists.style.zIndex = "100";
        alienExists.style.transition = "none";
        alienExists.style.pointerEvents = "none";
        document.body.appendChild(alienExists);
    }

    let frame = 0;
    let lastFrameTime = 0;
    let startTime = performance.now();
    let entering = true;
    let leaving = false;
    let baseY = -48;
    const targetY = 16;
    let shake = 0;

    function animate(currentTime) {
        const elapsed = currentTime - startTime;

        if (elapsed - lastFrameTime > 500) {
            frame = (frame + 1) % 2;
            alienExists.innerHTML = svgs[frame];
            lastFrameTime = elapsed;
        }

        // Horizontal vibration
        shake = Math.sin(elapsed * 0.005) * 5;

        if (entering) {
            baseY += (targetY - baseY) * 0.02;
            if (Math.abs(baseY - targetY) < 1.5) {
                baseY = targetY;
                entering = false;
                setTimeout(() => leaving = true, 2000 + Math.random() * 1000);
            }
        }

        if (leaving) {
            baseY -= 8;
            if (baseY < -64) {
                alienExists.style.top = "-32px";
                alienExists.innerHTML = "";
                return;
            }
        }

        alienExists.style.top = `${baseY}px`;
        alienExists.style.left = `${24 + shake}px`;
        requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
}

function alienLoop() {
    moveAlien();
    setTimeout(alienLoop, Math.random() * 30000 + 30000)
}

// Wait 25 seconds until first time alien comes out
setTimeout(() => {
    alienLoop();
}, 25000)