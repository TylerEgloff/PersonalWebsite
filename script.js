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
// ensure `toTopBtn` is declared early so listeners can reference it safely
const toTopBtn = document.getElementById('toTopBtn');

window.addEventListener('scroll', () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const shouldShow = window.scrollY > 100 && window.scrollY > scrollable - 200;
    if (toTopBtn) toTopBtn.classList.toggle('hidden', !shouldShow);
});

// Shooting stars
// ---------------------------------------------------------
function createShootingStar() {
    const container = document.getElementById('shooting-star-container');
    if (!container) return; // graceful noop when container isn't present yet

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

// Set cursor to blink on an interval (only if element exists)
if (cursor) {
    setInterval(() => {
        cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
    }, 500);
}

function textLoop() {
    if (!text) return; // nothing to do when profile text isn't present on this page
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
if (text) textLoop();

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

// Section visibility management and scroll-to-top button
// ---------------------------------------------------------
const sections = document.querySelectorAll('main > section');

function showAllSections() {
    sections.forEach(section => {
        section.classList.remove('hidden');
    });
}

function hideOtherSections(activeSectionId) {
    sections.forEach(section => {
        if (section.id !== activeSectionId && section.id !== 'home') {
            section.classList.add('hidden');
        }
    });
}

function updateButtonState(isHomePage) {
    if (!toTopBtn) return;
    if (isHomePage) {
        toTopBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>';
        toTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        toTopBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>';
        toTopBtn.onclick = () => document.querySelector('a[href="#home"]').click();
    }
}

function handleNavigation(targetId, scrollToSection = false) {
    const isHomePage = targetId === 'home' || targetId === '';
    const isBlogPage = targetId === 'blog';
    
    if (isHomePage) {
        showAllSections();
    } else {
        showAllSections();
        hideOtherSections(targetId);
    }
    
    updateButtonState(isHomePage);
    updateButtonVisibility();
    
    // Re-render blog posts based on view (3 for home, all for #blog)
    if (cachedBlogPosts && cachedBlogPosts.length) {
        renderBlogPosts(isBlogPage ? null : 3);
    }
    
    // Scroll to section for in-page navigation (not for initial page load)
    if (scrollToSection && targetId && !isHomePage) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            setTimeout(() => targetSection.scrollIntoView({ behavior: 'instant' }), 0);
        }
    }
    
    // Close mobile menu if open
    if (!mobileMenu.classList.contains('hidden')) {
        toggleMenu();
    }
}

function updateButtonVisibility() {
    const isHomePage = !window.location.hash || window.location.hash === '#home';
    
    if (isHomePage) {
        // On home page, only show if scrolled
        const shouldShow = window.scrollY > 100;
        if (toTopBtn) toTopBtn.classList.toggle('hidden', !shouldShow);
    } else {
        // On other pages, always show (unless at top on load)
        if (toTopBtn) toTopBtn.classList.remove('hidden');
    }
}

// Handle navigation clicks
document.querySelectorAll('nav a, #mobile-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href').substring(1);
        handleNavigation(targetId);
    });
});

// Scroll to top button visibility
window.addEventListener('scroll', () => {
    updateButtonVisibility();
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    const currentHash = window.location.hash.substring(1);
    handleNavigation(currentHash || 'home');
    
    // Initial visibility check after a slight delay to allow rendering
    setTimeout(updateButtonVisibility, 100);
    // Load blog list into index page (if container exists)
    if (document.getElementById('blog-list')) {
        loadBlogIndex();
    }
});

// Handle browser back/forward navigation (in-page hash changes)
window.addEventListener('hashchange', function() {
    const targetId = window.location.hash.substring(1);
    handleNavigation(targetId || 'home', true); // true = scroll to section for in-page nav
});

// -----------------------------
// Blog index loader
// -----------------------------
let cachedBlogPosts = []; // Store loaded posts for reuse

async function tryFetchJson(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) return null;
        const ct = res.headers.get('content-type') || '';
        if (ct.includes('application/json')) return await res.json();
        // If server returns JSON with .json extension but wrong header
        try { return JSON.parse(await res.text()); } catch (e) { return null; }
    } catch (e) {
        return null;
    }
}

async function tryFetchDirectoryListing(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) return null;
        const text = await res.text();
        // naive parse: find href="...md" or >...md< links
        const files = [];
        const hrefRe = /href\s*=\s*"([^"]+\.md)"/gi;
        let m;
        while ((m = hrefRe.exec(text)) !== null) files.push(m[1].replace(/.*\//, ''));
        if (files.length) return files;
        const plainRe = />([^<]*\.md)<\/a>/gi;
        while ((m = plainRe.exec(text)) !== null) files.push(m[1].trim());
        return files.length ? files : null;
    } catch (e) {
        return null;
    }
}

function stripMarkdown(md) {
    // Remove code fences
    md = md.replace(/```[\s\S]*?```/g, '');
    // Remove inline code
    md = md.replace(/`[^`]*`/g, '');
    // Remove HTML tags
    md = md.replace(/<[^>]+>/g, '');
    // Remove images keeping alt text
    md = md.replace(/!\[(.*?)\]\((.*?)\)/g, '$1');
    // Replace links with link text
    md = md.replace(/\[(.*?)\]\((.*?)\)/g, '$1');
    // Remove headings
    md = md.replace(/^#+\s*/gm, '');
    // Remove emphasis
    md = md.replace(/\*\*(.*?)\*\*/g, '$1');
    md = md.replace(/\*(.*?)\*/g, '$1');
    md = md.replace(/_(.*?)_/g, '$1');
    // Remove remaining markdown bullets and blockquotes
    md = md.replace(/^>\s*/gm, '');
    md = md.replace(/^[\-*+]\s+/gm, '');
    // Collapse whitespace
    return md.replace(/\s+/g, ' ').trim();
}

function createBlogCard(post) {
    const art = document.createElement('article');
    art.className = 'bg-gray-800 rounded-2xl shadow-lg p-6 card-glow';
    const h3 = document.createElement('h3');
    h3.className = 'text-2xl font-bold mb-1';
    h3.textContent = post.title;
    const subtitle = document.createElement('p');
    subtitle.className = 'text-gray-400 text-sm mb-4';
    subtitle.textContent = post.subtitle || 'No subtitle available.';
    const a = document.createElement('a');
    a.className = 'text-indigo-400 hover:underline font-semibold';
    a.href = 'blog.html?post=' + encodeURIComponent(post.file);
    a.textContent = 'Read full post →';

    art.appendChild(h3);
    art.appendChild(subtitle);
    art.appendChild(a);
    return art;
}

function renderBlogPosts(limit = null) {
    const container = document.getElementById('blog-list');
    if (!container || !cachedBlogPosts.length) return;
    
    container.innerHTML = '';
    const postsToShow = limit ? cachedBlogPosts.slice(0, limit) : cachedBlogPosts;
    
    postsToShow.forEach(post => {
        container.appendChild(createBlogCard(post));
    });
    
    // Add "View all" button if we're limiting and there are more posts
    if (limit && cachedBlogPosts.length > limit) {
        const btnWrapper = document.createElement('div');
        btnWrapper.className = 'text-center mt-6';
        const btn = document.createElement('a');
        btn.href = '#blog';
        btn.className = 'inline-block px-6 py-3 border-2 border-indigo-400 rounded-lg text-indigo-200 bg-gray-900 hover:bg-indigo-500 hover:text-white transition font-medium text-lg';
        btn.textContent = 'View all blog posts →';
        btnWrapper.appendChild(btn);
        container.appendChild(btnWrapper);
    }
}

async function loadBlogIndex() {
    const container = document.getElementById('blog-list');
    container.innerHTML = '<div class="p-6 text-gray-300">Loading posts...</div>';

    // Try known manifest filenames
    const manifests = ['posts/index.json', 'posts.json', 'posts/list.json'];
    let files = null;
    for (const m of manifests) {
        const data = await tryFetchJson(m);
        if (data && Array.isArray(data)) { files = data; break; }
    }

    // Try directory listing fallback
    if (!files) {
        files = await tryFetchDirectoryListing('posts/');
    }

    if (!files || !files.length) {
        container.innerHTML = '<div class="p-6 text-gray-300">No posts found in <strong>posts/</strong>. Add .md files or provide a posts/index.json manifest.</div>';
        return;
    }

    // Normalize file names (only .md)
    files = Array.from(new Set(files.map(f => f.replace(/^.*\//, '').trim()))).filter(f => f.toLowerCase().endsWith('.md'));
    if (!files.length) {
        container.innerHTML = '<div class="p-6 text-gray-300">No .md files found in <strong>posts/</strong>.</div>';
        return;
    }

    // Fetch each file and build post data
    cachedBlogPosts = [];
    for (const file of files) {
        try {
            const res = await fetch('posts/' + file);
            if (!res.ok) continue;
            let md = await res.text();
            // strip YAML frontmatter
            if (md.trim().startsWith('---')) {
                const end = md.indexOf('\n---', 3);
                if (end !== -1) md = md.slice(md.indexOf('\n', 3) + 1 + (end - 0));
            }
            const lines = md.split(/\r?\n/);
            
            // Find title (first # heading)
            const headingLine = lines.find(l => l.trim().startsWith('#')) || '';
            const title = headingLine ? headingLine.replace(/^#+\s*/, '').trim() : file.replace(/\.md$/i, '');

            // Find subtitle (first ## heading)
            const subtitleLine = lines.find(l => l.trim().startsWith('## ')) || '';
            const subtitle = subtitleLine ? subtitleLine.trim().slice(3).trim() : '';

            cachedBlogPosts.push({ file, title, subtitle });
        } catch (e) {
            console.warn('Error loading post', file, e);
        }
    }

    // Render with limit based on current view
    const showAll = window.location.hash === '#blog';
    renderBlogPosts(showAll ? null : 3);
}