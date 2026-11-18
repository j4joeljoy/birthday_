/* ============================================
   🎂 BIRTHDAY SURPRISE WEBSITE — SCRIPT
   ============================================ */

// ============================================
//  ★ CONFIGURATION — CUSTOMIZE EVERYTHING HERE ★
// ============================================
const CONFIG = {

    // ── SECRET NICKNAME / PASSWORD ──────────────────
    // CUSTOMIZE: Set the nickname she must type to unlock the site.
    // Comparison is case-insensitive.
    nickname: "vavachi",

    // ── BIRTHDAY GIRL'S NAME ────────────────────────
    // CUSTOMIZE: Her name (used in the certificate and final message).
    name: "Birthday Girl",

    // ── YOUR NAME ───────────────────────────────────
    // CUSTOMIZE: Your name (used in the letter sign-off and certificate).
    yourName: "Your Best Friend",

    // ── SURPRISE PHOTOS (Page 3) ────────────────────
    // Random Polaroid photos that float across the screen on Page 3
    surprisePhotos: [
        "assets/images/1000111414.jpg",
        "assets/images/1000115487.jpg",
        "assets/images/1000115540.jpg",
        "assets/images/1000115560.jpg",
        "assets/images/1000140232.jpg",
        "assets/images/1000152728.jpg",
        "assets/images/1000154343.jpg",
        "assets/images/1000174611.jpg",
        "assets/images/1000179814.jpg",
        "assets/images/1000226267.jpg",
    ],

    // ── MEMORIES GALLERY (Page 4) ───────────────────
    // All 27 photos in a scrapbook Polaroid gallery with click-to-expand lightbox
    memories: [
        { photo: "assets/images/1000111414.jpg", caption: "One my favourite pic , one of my best pic njan eduthatha  ✨", date: "Special Memory" },
        { photo: "assets/images/1000115487.jpg", caption: "ethic day , athara athika onum remeber ila but nice ayirunu pina ellavarum indayirunu and i was awakard and pina ena camera man ayita valo kodu poyatha 💗", date: "blah blah blah" },
        { photo: "assets/images/1000115540.jpg", caption: "ayi entha oru pose noka , kolam , pina camera man njan alo  🌸", date: "Cherished" },
        { photo: "assets/images/1000115560.jpg", caption: "Look at that gorgeous glow ena enta pati parayum , two sweet little gemss that became a big part of my life 🌟", date: "Unforgettable" },
        { photo: "assets/images/1000115563.jpg", caption: "One in a million, truly .chumma njan engane parayum thonida , ai aa one in a million seriya , tony ka polum  patila again 💕", date: "Special Day" },
        { photo: "assets/images/1000115564.jpg", caption: "My favorite human being 🌷", date: "Forever Memory" },
        { photo: "assets/images/1000116590.jpg", caption: "you guys again , evida njan ellalo frame ila enthoka ayirun three people gang uda  🤗", date: "Good Times" },
        { photo: "assets/images/1000116591.jpg", caption: "Never a dull second with you 😂", date: "Fun Days" },
        { photo: "assets/images/1000116592.jpg", caption: "two white and one black in balck outfit hehehe 💖", date: "Besties" },
        { photo: "assets/images/1000140232.jpg", caption: "njan epo entha paraya that day enika vayayirunu enita avalaka kfc enta mouth ila vachu tharanamayirun but nja shy ayi ✨", date: "Magic" },
        { photo: "assets/images/1000140233.jpg", caption: "So effortlessly stunning , another angle 🦋", date: "Sunshine" },
        { photo: "assets/images/1000144999.jpg", caption: "Little moments that mean everything , college nidhi ayitula last day , the day you left to home because of me , sry daa post akiya na 💗", date: "Treasured" },
        { photo: "assets/images/1000152728.jpg", caption: "Always there, always amazing , couple goals hehehe entha pose alla , cutie kuttan and one eliyama  🌟", date: "Priceless" },
        { photo: "assets/images/1000152731.jpg", caption: "That cute candid look . cutieness vari edama hehehe 📸", date: "Candid" },
        { photo: "assets/images/1000152734.jpg", caption: "Spreading sunshine wherever you go , eeeeeeeeeeeeeee , njan epo enth paraya , oru chulam erikada ☀️", date: "Joy" },
        { photo: "assets/images/1000152742.jpg", caption: "relavent alla but , the one who inspired me to start reading  💛", date: "Sweet Days" },
        { photo: "assets/images/1000154343.jpg", caption: "happy onam , but ninak ee pics onum ishtam ayi ella , nee entho random pic itu . saddddddddd 🌸", date: "Adventures" },
        { photo: "assets/images/1000154345.jpg", caption: "aa pine entha kolam ee pic . but namal ulo pic nee post cheyathata delete aki . reason i know sarila 🎶", date: "Happy Times" },
        { photo: "assets/images/1000154346.jpg", caption: "Best friend goals right here 👯‍♀️, kurachu side pose avam . nee post cheyatha ninte class mati friend ila i forgot his name , you good friend avo , he aa pics are story eta ", date: "Unbreakable" },
        { photo: "assets/images/1000154348.jpg", caption: "kolam earrings , but nja thana earrings athara ella hehehe . mine is beautifullllll 💗", date: "Cutie" },
        { photo: "assets/images/1000174611.jpg", caption: "the day i won't forget , the day you lied to your father to meet me , the day i ruined by confessing my feels , the day i lost control .thanks for giving me second chance ✨", date: "Radiant" },
        { photo: "assets/images/1000174612.jpg", caption: "and you got the best milk cake , which i introduced to you , veno ?one more 🌍", date: "Pure Love" },
        { photo: "assets/images/1000177435.jpg", caption: "Forever grateful for our friendship , one of my favourite pic i took . and it was you again .🌷", date: "Gratitude" },
        { photo: "assets/images/1000179814.jpg", caption: "Unstoppable when you smile , sarila ena kanan oru look um ella , for the first time at your home 💫", date: "Vibes" },
        { photo: "assets/images/1000197047.jpg", caption: "Every photo tells a happy story , nja edit cheyath pic . but nee atha post aki ella pati , but you where wearing the earring i gifted you , it was your farewall day  📖", date: "Chapters" },
        { photo: "assets/images/1000197065.jpg", caption: "pina oru pic ind , christmas celebrations aa red colour , oh my god you look so gorgeous in that , but aa pic ella enta phone ila , insta ila indavum but madi ayi poyi screen shot edakan🥂", date: "Forever" },
        { photo: "assets/images/1000226267.jpg", caption: "The queen of the day! Happy Birthday 👑 , graduation day ", date: "Birthday Queen" },
    ],

    // ── PERSONAL LETTER (Page 5) ────────────────────
    // CUSTOMIZE: Write your personal letter/paragraph here.
    // Use \n for line breaks.
    // This text appears inside the animated envelope.
    letterContent: `HEY HAPPY BIRTHDAY DEAR ANEENA ROSE TONY , Eliyamaaa

So birthday ayita entha parupadi , sry this time also enika ninte kuda birthday celebrate cheyan patila like last time . happy birthday have wonderful year ahead , pina entha . i know ninak exam busy . i miss you a lot . vayayirunu enika fever cold cough  etc . 19th na njan bengaluru indavum , back to that busy life . pina ee week lot of thing happened , miss cheyada .
you always being there in my life . njan nee na depend cheyado chothicha kinda off . you are and you will be the best part of my life . i will always be there for you   , cringe i know . pinc spelling mistake or load indavum . enthokka parayan ind but onum varanila . when i startedd to type mind full smnoke ayi . entha parayda . niaka ishtam avo engane paraya , atho other sentence anno better . lot of thoughts ind mind ila . take care daa . enthakilum oka indaka parayata . may god bless you . the way you trying to put effort are beautiful . pina kuraya think cheyathu what to gift but onum mind ila varanila . then this idea mind vanatha . so started created this website to wishing on your birthday . engane inda exams oka 
njan last week full dream kandatha , i am getting commited . but girls face remeber ellada shey . sad aki . pina dating app ila epo oru four people tind match texting less . pina enikum entho datiung app oka mathiyayi . pina entha last week nidhi enta kuda outing ayirunu . pina entha . house shifting onum finished ayitila . pina kurachuy scene ind , maduthu . nee after exam free ayita vayo . apo parayam .pina entha paraya pina njan etha vara nokiya , i mean feels indayirun girl you are the favourite one , nee vara onumn varicharikada . ninaka bengalore valath nokay mathiyayirunu pg . atha avumbo enika oru company ayi .
what do you want for this birthday . enta mind oru gift um ellada . oh nee marry cheya aa chuck enta karayam , he will be so lucky to get you , hehehe . one and only piece . avan life um koda odum hehehe . i hope you achiev all yuor dream and live passion full life . enjoy cheya . enthakilum indaka call me in this number 7907027465 for anything .  ninoda talk cheyatha athara nja arudom open ayitum ella talkum cheyathatila . i don't etho oru connection ind . best peoeple are born in november . try to br hsppy . tskr care of your family . pina entha indakilum vilika madikada . wasahroom ila anaka polum i will pickup your call . enth shit ayalum i will pickup .pina flush adika ulo time thana mathi eeeee .ayo i forget to mention . thank you for thr spray . thanks for being there for me at my touhg times .thank for everything . you made me smile and laugh every time i call you or see you . sry i judgeed you a lot . 
your deserve more . and please don't keep thing in mind if i did something wrong . just don;t punish me by staying quiet , yell all you want . emthakilum indaka we can talk it out .   💗`,

    // ── FINAL BIRTHDAY MESSAGE (Page 7) ─────────────
    // CUSTOMIZE: The final birthday message shown at the end.
    finalMessage: `Happy Birthday on this special November 19th! 🎉
To the most amazing person I know — thank you for being YOU.
The world is so much better with you in it.
Here's to another year of laughter, adventures, and unforgettable memories together! 💗✨`,

    // ── REASONS SHE'S SPECIAL (Page 7) ──────────────
    // CUSTOMIZE: Add sweet compliments.
    // Each entry becomes a flip card in the finale.
    // Format: { emoji: "🌟", text: "Your compliment" }
    reasonsSpecial: [
        { emoji: "🌟", text: "Your smile lights up every room you walk into" },
        { emoji: "💪", text: "You're the strongest person I know" },
        { emoji: "😂", text: "You make even the boring moments hilarious" },
        { emoji: "💗", text: "You have the most beautiful heart" },
        { emoji: "✨", text: "Everything you touch turns into something magical" },
        { emoji: "🤗", text: "Your hugs can fix literally anything" },
        { emoji: "🌈", text: "You make the world more colorful just by existing" },
        { emoji: "👑", text: "You're not just my friend, you're my queen" },
    ],

    // ── RANDOM SWEET MESSAGES (Surprise Button) ─────
    // CUSTOMIZE: Random sweet messages for the floating surprise button.
    sweetMessages: [
        "You're literally the best person on this planet 🌍💗",
        "Fun fact: The world became 1000x better the day you were born ✨",
        "If friendship had a face, it would look like yours 😌💗",
        "You deserve all the happiness in the universe 🌌",
        "I smile every time I think about our memories together 😊",
        "You're not just my best friend, you're my favorite human 💗",
        "The world doesn't deserve someone as amazing as you ✨",
        "Thank you for always being there. You're irreplaceable 🌟",
        "Every moment with you is a memory I'll cherish forever 💕",
        "You make ordinary days extraordinary just by being in them 🦋",
    ],

    // ── WISH STORAGE (Page 6) ───────────────────────
    // Formspree endpoint to email her 3 wishes directly to you:
    wishAPI: "https://formspree.io/f/moeddzwq",

    // ── WRONG NICKNAME MESSAGES ─────────────────────
    // Funny messages shown when she types the wrong nickname.
    wrongNicknameMessages: [
        "Nope! That's not it 😂 Try again, bestie!",
        "Haha nice try! But that's not what I call you 😜",
        "Mmm... not quite! Think harder 💭",
        "So close! (Just kidding, not even close 😂)",
        "Are you even MY best friend?! 😤💗 Try again!",
        "Wrong! Hint: You hear me say it ALL the time 😉",
        "Uh oh, identity crisis? 😂 One more try!",
        "Beep boop! Access denied! 🤖 (Try again tho 💗)",
    ],
};


// ============================================
//  PLACEHOLDER IMAGE
// ============================================
const PLACEHOLDER_IMG = 'data:image/svg+xml,' + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300">' +
    '<rect fill="#FFE4E1" width="300" height="300" rx="8"/>' +
    '<text x="150" y="140" font-family="sans-serif" font-size="40" fill="#FFB6C1" text-anchor="middle">📸</text>' +
    '<text x="150" y="180" font-family="sans-serif" font-size="14" fill="#FF69B4" text-anchor="middle">Add your photo</text>' +
    '</svg>'
);


// ============================================
//  STATE
// ============================================
const state = {
    currentPage: 'page-welcome',
    musicPlaying: false,
    envelopeOpened: false,
    wishesSubmitted: false,
    wrongNicknameCount: 0,
    confettiLaunched: false,
    lastCursorTrail: 0,
};


// ============================================
//  DOM HELPERS
// ============================================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);


// ============================================
//  INITIALIZATION
// ============================================
function init() {
    playIntro();
    initCursor();
    initMusic();
    initSurpriseButton();
    initNickname();
    initEnvelope();
    initWishes();
    initFinale();
    generateFloatingPhotos();
    generateGallery();
    initLightbox();

    // Navigation button events
    $('#btn-open-surprise').addEventListener('click', () => goToPage('page-nickname'));
    $('#photos-next-btn').addEventListener('click', () => goToPage('page-gallery'));
    $('#gallery-next-btn').addEventListener('click', () => goToPage('page-letter'));
    $('#letter-next-btn').addEventListener('click', () => goToPage('page-wishes'));
    $('#wish-next-btn').addEventListener('click', () => goToPage('page-finale'));
    $('#replay-btn').addEventListener('click', replayExperience);
}

document.addEventListener('DOMContentLoaded', init);


// ============================================
//  INTRO COUNTDOWN
// ============================================
function playIntro() {
    const overlay = $('#intro-overlay');
    const numEl = $('#countdown-num');
    const textEl = overlay.querySelector('.countdown-text');
    let count = 3;

    const interval = setInterval(() => {
        count--;
        if (count > 0) {
            numEl.textContent = count;
            numEl.classList.remove('pop');
            void numEl.offsetWidth; // reflow
            numEl.classList.add('pop');
        } else if (count === 0) {
            numEl.textContent = '✨';
            textEl.textContent = "Here we go!";
            numEl.classList.remove('pop');
            void numEl.offsetWidth;
            numEl.classList.add('pop');
        } else {
            clearInterval(interval);
            overlay.classList.add('fade-out');
            setTimeout(() => { overlay.style.display = 'none'; }, 800);
        }
    }, 900);
}


// ============================================
//  PAGE NAVIGATION
// ============================================
function goToPage(pageId) {
    if (state.currentPage === pageId) return;

    const current = document.getElementById(state.currentPage);
    const next = document.getElementById(pageId);
    if (!current || !next) return;

    // Exit current page
    current.classList.remove('active');
    current.classList.add('exit');

    // After exit animation, show next page
    setTimeout(() => {
        current.classList.remove('exit');
        next.classList.add('active');
        next.scrollTop = 0;
        state.currentPage = pageId;
        onPageEnter(pageId);
    }, 650);
}

function onPageEnter(pageId) {
    switch (pageId) {
        case 'page-photos':
            startFloatingPhotos();
            break;
        case 'page-gallery':
            animateGallery();
            break;
        case 'page-finale':
            if (!state.confettiLaunched) {
                setTimeout(launchConfetti, 500);
                state.confettiLaunched = true;
            }
            break;
    }
}


// ============================================
//  CUSTOM CURSOR + HEART TRAIL
// ============================================
function initCursor() {
    const dot = $('#cursor-dot');
    if (!dot) return;

    // Check for touch device
    if ('ontouchstart' in window) {
        dot.style.display = 'none';
        return;
    }

    document.addEventListener('mousemove', (e) => {
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';

        // Heart trail (throttled)
        const now = Date.now();
        if (now - state.lastCursorTrail > 120) {
            state.lastCursorTrail = now;
            createCursorHeart(e.clientX, e.clientY);
        }
    });

    // Scale cursor on interactive elements
    document.addEventListener('mouseover', (e) => {
        if (e.target.closest('button, a, input, .envelope, .polaroid, .reason-card')) {
            dot.style.width = '24px';
            dot.style.height = '24px';
            dot.style.background = 'var(--pink)';
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('button, a, input, .envelope, .polaroid, .reason-card')) {
            dot.style.width = '12px';
            dot.style.height = '12px';
            dot.style.background = 'var(--deep-pink)';
        }
    });
}

function createCursorHeart(x, y) {
    const heart = document.createElement('span');
    heart.className = 'cursor-heart';
    heart.textContent = ['💗', '💕', '✨', '💖'][Math.floor(Math.random() * 4)];
    heart.style.left = x + 'px';
    heart.style.top = y + 'px';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1000);
}


// ============================================
//  MUSIC TOGGLE
// ============================================
function initMusic() {
    const btn = $('#music-btn');
    const audio = $('#bg-music');
    const icon = $('#music-icon');

    btn.addEventListener('click', () => {
        if (state.musicPlaying) {
            audio.pause();
            icon.textContent = '🔇';
            btn.classList.remove('playing');
        } else {
            audio.play().catch(() => { });
            icon.textContent = '🎵';
            btn.classList.add('playing');
        }
        state.musicPlaying = !state.musicPlaying;
    });
}


// ============================================
//  SURPRISE MESSAGE BUTTON
// ============================================
function initSurpriseButton() {
    const btn = $('#surprise-msg-btn');
    const popup = $('#surprise-popup');
    const text = $('#surprise-text');

    btn.addEventListener('click', () => {
        const messages = CONFIG.sweetMessages;
        const msg = messages[Math.floor(Math.random() * messages.length)];
        text.textContent = msg;
        popup.classList.add('show');
    });
}

function closeSurprisePopup() {
    $('#surprise-popup').classList.remove('show');
}


// ============================================
//  NICKNAME CHECKER
// ============================================
function initNickname() {
    const input = $('#nickname-input');
    const btn = $('#nickname-submit');
    const errorEl = $('#nickname-error');

    btn.addEventListener('click', checkNickname);
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') checkNickname();
    });

    // Clear error on typing
    input.addEventListener('input', () => {
        errorEl.classList.remove('show');
        input.classList.remove('shake');
    });
}

function checkNickname() {
    const input = $('#nickname-input');
    const errorEl = $('#nickname-error');
    const lockIcon = $('#lock-icon');
    const value = input.value.trim();

    if (!value) {
        errorEl.textContent = "You didn't type anything! 😅";
        errorEl.classList.add('show');
        input.classList.add('shake');
        return;
    }

    if (value.toLowerCase() === CONFIG.nickname.toLowerCase()) {
        // Success!
        input.classList.add('success');
        lockIcon.textContent = '🔓';
        lockIcon.classList.add('unlocked');
        errorEl.textContent = "Yes! That's it! 💗✨";
        errorEl.classList.add('show');
        errorEl.style.color = '#4CAF50';

        setTimeout(() => {
            goToPage('page-photos');
            // Reset styles for potential replay
            setTimeout(() => {
                input.classList.remove('success');
                lockIcon.textContent = '🔒';
                lockIcon.classList.remove('unlocked');
                errorEl.classList.remove('show');
                errorEl.style.color = '';
            }, 1000);
        }, 1200);
    } else {
        // Wrong!
        input.classList.add('shake');
        const messages = CONFIG.wrongNicknameMessages;
        const msg = messages[state.wrongNicknameCount % messages.length];
        errorEl.textContent = msg;
        errorEl.classList.add('show');
        state.wrongNicknameCount++;

        setTimeout(() => input.classList.remove('shake'), 500);
    }
}


// ============================================
//  FLOATING PHOTOS (Page 3)
// ============================================
function generateFloatingPhotos() {
    const container = $('#floating-photos');
    if (!container) return;

    // Use surprise photos from config, or placeholder set
    let photos = CONFIG.surprisePhotos;
    if (!photos.length) {
        photos = Array(6).fill(PLACEHOLDER_IMG);
    }

    const positions = [
        { x: '5%', y: '5%', rotate: '-8deg' },
        { x: '55%', y: '2%', rotate: '6deg' },
        { x: '30%', y: '15%', rotate: '-4deg' },
        { x: '70%', y: '20%', rotate: '10deg' },
        { x: '10%', y: '35%', rotate: '7deg' },
        { x: '50%', y: '40%', rotate: '-6deg' },
        { x: '25%', y: '55%', rotate: '5deg' },
        { x: '65%', y: '50%', rotate: '-9deg' },
        { x: '40%', y: '65%', rotate: '3deg' },
        { x: '80%', y: '60%', rotate: '-5deg' },
    ];

    photos.forEach((src, i) => {
        const pos = positions[i % positions.length];
        const div = document.createElement('div');
        div.className = 'floating-photo';
        div.style.setProperty('--x', pos.x);
        div.style.setProperty('--y', pos.y);
        div.style.setProperty('--rotate', pos.rotate);
        div.style.setProperty('--delay', `${i * 0.3}s`);
        div.style.setProperty('--duration', `${6 + Math.random() * 5}s`);

        const img = document.createElement('img');
        img.src = src;
        img.alt = 'Surprise photo';
        img.loading = 'lazy';
        img.onerror = function () { this.src = PLACEHOLDER_IMG; };

        const label = document.createElement('div');
        label.className = 'photo-label';
        label.textContent = '💗';

        div.appendChild(img);
        div.appendChild(label);
        div.addEventListener('click', () => openLightbox(src, ''));
        container.appendChild(div);
    });
}

function startFloatingPhotos() {
    // Photos are already animated via CSS; this hook can trigger extra effects
    const photos = $$('.floating-photo');
    photos.forEach((p, i) => {
        p.style.opacity = '0';
        p.style.animation = 'none';
        setTimeout(() => {
            p.style.opacity = '1';
            p.style.animation = '';
            p.style.transition = 'opacity 0.5s ease';
        }, i * 200);
    });
}


// ============================================
//  GALLERY (Page 4)
// ============================================
function generateGallery() {
    const grid = $('#gallery-grid');
    if (!grid) return;

    let memories = CONFIG.memories;
    if (!memories.length) {
        // Placeholder entries so the gallery isn't empty
        memories = [
            { photo: PLACEHOLDER_IMG, caption: "Add your first memory here 💗", date: "Date" },
            { photo: PLACEHOLDER_IMG, caption: "Add your second memory here ✨", date: "Date" },
            { photo: PLACEHOLDER_IMG, caption: "Add your third memory here 🌟", date: "Date" },
            { photo: PLACEHOLDER_IMG, caption: "Add your fourth memory here 💕", date: "Date" },
            { photo: PLACEHOLDER_IMG, caption: "Add your fifth memory here 🦋", date: "Date" },
            { photo: PLACEHOLDER_IMG, caption: "Add your sixth memory here 🌸", date: "Date" },
        ];
    }

    // Alternating tilts for scrapbook feel
    const tilts = [-3, 2, -1.5, 3, -2.5, 1, -2, 2.5, -1, 3.5];

    memories.forEach((memory, i) => {
        const card = document.createElement('div');
        card.className = 'polaroid';
        card.style.setProperty('--i', i);
        card.style.setProperty('--tilt', tilts[i % tilts.length] + 'deg');

        const img = document.createElement('img');
        img.src = memory.photo;
        img.alt = memory.caption || 'Memory';
        img.loading = 'lazy';
        img.onerror = function () { this.src = PLACEHOLDER_IMG; };

        const caption = document.createElement('p');
        caption.className = 'polaroid-caption';
        caption.textContent = memory.caption || '';

        card.appendChild(img);
        card.appendChild(caption);

        if (memory.date) {
            const date = document.createElement('p');
            date.className = 'polaroid-date';
            date.textContent = memory.date;
            card.appendChild(date);
        }

        card.addEventListener('click', () => openLightbox(memory.photo, memory.caption));
        grid.appendChild(card);
    });
}

function animateGallery() {
    const polaroids = $$('.polaroid');
    polaroids.forEach((p, i) => {
        p.style.animation = 'none';
        p.style.opacity = '0';
        void p.offsetWidth;
        p.style.animation = `polaroidReveal 0.6s ease ${i * 0.15}s forwards`;
    });
}


// ============================================
//  LIGHTBOX
// ============================================
function initLightbox() {
    const lightbox = $('#lightbox');
    const closeBtn = $('#lightbox-close');

    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeLightbox();
    });
}

function openLightbox(src, caption) {
    const lightbox = $('#lightbox');
    const img = $('#lightbox-img');
    const cap = $('#lightbox-caption');

    img.src = src;
    cap.textContent = caption || '';
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = $('#lightbox');
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
}


// ============================================
//  ENVELOPE & LETTER (Page 5)
// ============================================
function initEnvelope() {
    const envelope = $('#envelope');
    if (!envelope) return;

    // Load letter content
    const letterBody = $('#letter-body');
    letterBody.textContent = CONFIG.letterContent;

    // Load signature
    const sig = $('#letter-signature');
    if (sig) sig.textContent = CONFIG.yourName + ' 💗';

    envelope.addEventListener('click', openEnvelope);
}

function openEnvelope() {
    if (state.envelopeOpened) return;
    state.envelopeOpened = true;

    const envelope = $('#envelope');
    const letterContainer = $('#letter-container');
    const nextBtn = $('#letter-next-btn');

    // Open flap
    envelope.classList.add('opened');

    // After flap opens, show letter
    setTimeout(() => {
        envelope.style.display = 'none';
        letterContainer.classList.remove('hidden');

        // Show next button after reading time
        setTimeout(() => {
            nextBtn.classList.remove('hidden');
        }, 2000);
    }, 1000);
}


// ============================================
//  WISHES (Page 6)
// ============================================
function initWishes() {
    const submitBtn = $('#wish-submit');
    if (!submitBtn) return;

    submitBtn.addEventListener('click', submitWishes);

    // Add typing sparkle effect
    $$('.wish-input').forEach(input => {
        input.addEventListener('input', () => {
            const sparkle = input.parentElement.querySelector('.wish-sparkle');
            if (input.value.trim()) {
                sparkle.style.opacity = '1';
                sparkle.style.transform = 'scale(1)';
            } else {
                sparkle.style.opacity = '0';
                sparkle.style.transform = 'scale(0)';
            }
        });
    });
}

function submitWishes() {
    const wish1 = $('#wish-1').value.trim();
    const wish2 = $('#wish-2').value.trim();
    const wish3 = $('#wish-3').value.trim();
    const errorEl = $('#wish-error');

    if (!wish1 || !wish2 || !wish3) {
        errorEl.textContent = 'Please fill in all three wishes! 🌟';
        errorEl.classList.add('show');
        return;
    }

    errorEl.classList.remove('show');

    const wishes = {
        "First Wish ✨": wish1,
        "Second Wish 🌷": wish2,
        "Third Wish 💗": wish3,
        wish1,
        wish2,
        wish3,
        submittedAt: new Date().toLocaleDateString('en-US', {
            weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        }),
        timestamp: new Date().toISOString(),
    };

    // Save wishes
    saveWishes(wishes);

    // Show confirmation
    state.wishesSubmitted = true;
    $('#wishes-form').classList.add('hidden');
    $('#wish-confirmation').classList.remove('hidden');
}

function saveWishes(wishes) {
    // 1. Always save to localStorage
    try {
        const existing = JSON.parse(localStorage.getItem('birthday_wishes') || '[]');
        existing.push(wishes);
        localStorage.setItem('birthday_wishes', JSON.stringify(existing));
        console.log('✅ Wishes saved to localStorage');
        console.log('📋 To view wishes, run: viewWishes()');
        console.log('💾 To download wishes, run: downloadWishes()');
    } catch (e) {
        console.warn('Could not save to localStorage:', e);
    }

    // 2. If API endpoint is configured (Formspree), POST wishes there
    if (CONFIG.wishAPI) {
        fetch(CONFIG.wishAPI, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(wishes),
        })
            .then(res => {
                if (res.ok) console.log('✅ Wishes sent to Formspree successfully!');
                else console.warn('Formspree responded with:', res.status);
            })
            .catch(err => console.warn('Could not send to Formspree:', err));
    }
}

// Global function: View all stored wishes in the console
window.viewWishes = function () {
    try {
        const wishes = JSON.parse(localStorage.getItem('birthday_wishes') || '[]');
        if (!wishes.length) {
            console.log('No wishes stored yet.');
            return;
        }
        wishes.forEach((w, i) => {
            console.log(`\n═══ Wish Set ${i + 1} (${w.date || w.timestamp}) ═══`);
            console.log(`  ✨ Wish 1: ${w.wish1}`);
            console.log(`  🌷 Wish 2: ${w.wish2}`);
            console.log(`  💗 Wish 3: ${w.wish3}`);
        });
        return wishes;
    } catch (e) {
        console.warn('Error reading wishes:', e);
    }
};

// Global function: Download wishes as a .txt file
window.downloadWishes = function () {
    try {
        const wishes = JSON.parse(localStorage.getItem('birthday_wishes') || '[]');
        if (!wishes.length) {
            alert('No wishes stored yet!');
            return;
        }

        let content = '🎂 Birthday Wishes 🎂\n';
        content += '═'.repeat(40) + '\n\n';

        wishes.forEach((w, i) => {
            content += `--- Wish Set ${i + 1} ---\n`;
            content += `Date: ${w.date || w.timestamp}\n\n`;
            content += `✨ First Wish:\n   ${w.wish1}\n\n`;
            content += `🌷 Second Wish:\n   ${w.wish2}\n\n`;
            content += `💗 Third Wish:\n   ${w.wish3}\n\n`;
            content += '─'.repeat(30) + '\n\n';
        });

        const blob = new Blob([content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'birthday-wishes.txt';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        console.log('✅ Wishes downloaded!');
    } catch (e) {
        console.warn('Error downloading wishes:', e);
    }
};

// Secret admin access: Add ?admin to the URL to show a "Download Wishes" button
if (window.location.search.includes('admin')) {
    document.addEventListener('DOMContentLoaded', () => {
        const btn = document.createElement('button');
        btn.textContent = '📥 Download Wishes';
        btn.className = 'btn-secondary';
        btn.style.cssText = 'position:fixed;bottom:80px;left:20px;z-index:99999;font-size:13px;';
        btn.addEventListener('click', window.downloadWishes);
        document.body.appendChild(btn);
    });
}


// ============================================
//  CONFETTI EXPLOSION (Page 7)
// ============================================
function launchConfetti() {
    const canvas = $('#confetti-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ['#FFB6C1', '#E6E6FA', '#FFDAB9', '#FFD700', '#FF69B4', '#DDA0DD', '#98FB98', '#87CEEB', '#FFC0CB'];
    const pieces = [];

    // Create confetti pieces
    for (let i = 0; i < 180; i++) {
        pieces.push({
            x: canvas.width * 0.5 + (Math.random() - 0.5) * 300,
            y: canvas.height * 0.4,
            vx: (Math.random() - 0.5) * 24,
            vy: -Math.random() * 22 - 8,
            w: Math.random() * 10 + 4,
            h: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotSpeed: (Math.random() - 0.5) * 12,
            gravity: 0.25 + Math.random() * 0.15,
            opacity: 1,
            decay: 0.003 + Math.random() * 0.003,
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let active = false;

        for (const p of pieces) {
            p.vy += p.gravity;
            p.x += p.vx;
            p.y += p.vy;
            p.rotation += p.rotSpeed;
            p.vx *= 0.99;
            p.opacity -= p.decay;

            if (p.opacity > 0 && p.y < canvas.height + 50) {
                active = true;
                ctx.save();
                ctx.translate(p.x, p.y);
                ctx.rotate((p.rotation * Math.PI) / 180);
                ctx.globalAlpha = Math.max(0, p.opacity);
                ctx.fillStyle = p.color;
                ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
                ctx.restore();
            }
        }

        if (active) {
            requestAnimationFrame(animate);
        }
    }

    animate();

    // Second burst after a short delay
    setTimeout(() => {
        for (let i = 0; i < 100; i++) {
            pieces.push({
                x: canvas.width * Math.random(),
                y: -20,
                vx: (Math.random() - 0.5) * 6,
                vy: Math.random() * 4 + 2,
                w: Math.random() * 8 + 3,
                h: Math.random() * 5 + 2,
                color: colors[Math.floor(Math.random() * colors.length)],
                rotation: Math.random() * 360,
                rotSpeed: (Math.random() - 0.5) * 8,
                gravity: 0.15 + Math.random() * 0.1,
                opacity: 1,
                decay: 0.002 + Math.random() * 0.002,
            });
        }
        animate();
    }, 1500);
}

// Handle window resize for confetti canvas
window.addEventListener('resize', () => {
    const canvas = $('#confetti-canvas');
    if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});


// ============================================
//  FINALE (Page 7)
// ============================================
function initFinale() {
    // Load final message
    const msgEl = $('#finale-message');
    if (msgEl) msgEl.textContent = CONFIG.finalMessage;

    // Certificate name & date
    const certName = $('#cert-name');
    if (certName) certName.textContent = CONFIG.name;

    const certDate = $('#cert-date');
    if (certDate) {
        certDate.textContent = "Awarded on November 19th ✨";
    }

    const certSigned = $('#cert-signed');
    if (certSigned) certSigned.textContent = `With love, ${CONFIG.yourName} 💗`;

    // "One Last Surprise" button
    const lastBtn = $('#last-surprise-btn');
    if (lastBtn) {
        lastBtn.addEventListener('click', (e) => {
            e.preventDefault();
            showReasons();
        });
    }

    // Generate reason cards
    generateReasons();
}

function generateReasons() {
    const grid = $('#reasons-grid');
    if (!grid) return;

    // Clear existing to prevent duplicate cards if re-initialized
    grid.innerHTML = '';

    CONFIG.reasonsSpecial.forEach((reason, i) => {
        const card = document.createElement('div');
        card.className = 'reason-card';
        card.style.setProperty('--i', i);

        const front = document.createElement('div');
        front.className = 'reason-front';
        front.textContent = reason.emoji || '💗';

        const back = document.createElement('div');
        back.className = 'reason-back';
        back.textContent = reason.text;

        card.appendChild(front);
        card.appendChild(back);

        card.addEventListener('click', () => {
            card.classList.toggle('flipped');
        });

        grid.appendChild(card);
    });
}

function showReasons() {
    const lastBtn = $('#last-surprise-btn');
    const section = $('#reasons-section');
    const cert = $('#certificate');

    if (lastBtn) {
        lastBtn.classList.add('hidden');
    }

    if (section) {
        section.classList.remove('hidden');
    }

    if (cert) {
        cert.classList.remove('hidden');
    }

    // Smoothly scroll down so she sees the revealed cards and certificate
    setTimeout(() => {
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, 100);
}


// ============================================
//  REPLAY EXPERIENCE
// ============================================
function replayExperience() {
    // Reset state
    state.envelopeOpened = false;
    state.wishesSubmitted = false;
    state.wrongNicknameCount = 0;
    state.confettiLaunched = false;

    // Reset UI elements
    const envelope = $('#envelope');
    if (envelope) {
        envelope.classList.remove('opened');
        envelope.style.display = '';
    }
    const letterContainer = $('#letter-container');
    if (letterContainer) letterContainer.classList.add('hidden');
    const letterNextBtn = $('#letter-next-btn');
    if (letterNextBtn) letterNextBtn.classList.add('hidden');

    // Reset wishes form
    const wishesForm = $('#wishes-form');
    if (wishesForm) wishesForm.classList.remove('hidden');
    const wishConf = $('#wish-confirmation');
    if (wishConf) wishConf.classList.add('hidden');
    $$('.wish-input').forEach(inp => { inp.value = ''; });
    $$('.wish-sparkle').forEach(sp => { sp.style.opacity = '0'; sp.style.transform = 'scale(0)'; });

    // Reset nickname input
    const nicknameInput = $('#nickname-input');
    if (nicknameInput) nicknameInput.value = '';

    // Reset finale
    const reasons = $('#reasons-section');
    if (reasons) reasons.classList.add('hidden');
    const cert = $('#certificate');
    if (cert) cert.classList.add('hidden');
    const lastBtn = $('#last-surprise-btn');
    if (lastBtn) lastBtn.classList.remove('hidden');

    // Reset reason card flips
    $$('.reason-card').forEach(c => c.classList.remove('flipped'));

    // Clear confetti canvas
    const canvas = $('#confetti-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // Navigate to welcome
    goToPage('page-welcome');
}


// ============================================
//  UTILITY
// ============================================
function randomRange(min, max) {
    return min + Math.random() * (max - min);
}

