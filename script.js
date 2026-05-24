//wedding countdown
const weddingDate = new Date("September 5, 2026 16:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const diff = weddingDate - now;

  if (diff < 0) {
    countdownEl.textContent = "Today is the day!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdownEl.textContent = `${days} DAYS ${hours} HRS ${minutes} MINS`;
}, 1000);

//smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // this will prevent the site from jumping to that section
    
    //define variables 
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    //tell js to slowly scroll over to that id section
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// gallery photos
//create index with photos for gallery
const images = [
  { src: "photo-1.jpg", alt: "man and woman smile walking down a suspension bridge, woman smiling at camera, man smiling at her"},
  { src: "photo-2.jpg", alt: "man and woman are sitting on park stairs, man is sitting behind her, they sit in admiration of each other"},
  { src: "photo-6.jpg", alt: "man gives woman kiss on the cheek, her eyes are closed "},
];

//initialize start variable before use
let start = 0;

//assign constants and get elements by ID
const img = document.getElementById("slideImage");
const prev = document.getElementById("prevBtn");
const next = document.getElementById("nextBtn");

//create function for slides
function updateSlide() {
  img.src = images[start].src;
}
//event listener that responses to either arrow being clicked
next.addEventListener("click", () => {
  start = (start + 1) % images.length;
  updateSlide();
});

prev.addEventListener("click", () => {
  start = (start - 1 + images.length) % images.length;
  updateSlide();
});

//RSVP JS code below, please note, i did use AI to help me create a structure for this as this was a bit more advanced, however I did my best to only use it as a guide
  emailjs.init('9ZWitdmsKI1vrP-vG');

  const EMAILJS_SERVICE_ID  = 'service_uzxyf5v';
  const EMAILJS_TEMPLATE_ID = 'template_9q42w1g';

  const HOUSEHOLDS = [
    { code: "Gutierrez01", name: "The Gutierrez Family",              guests: ["Eva Gutierrez","Leopoldo Gutierrez","Eddie Gutierrez"] },
    { code: "Gutierrez02", name: "The Gutierrez Family",              guests: ["Leo Junior Gutierrez","Abigal Gutierrez"] },
    { code: "Garcia01",    name: "The Garcia Family",                 guests: ["Angelica Garcia","Emily Garcia","Esteban Garcia"] },
    { code: "Gutierrez03", name: "The Gutierrez Family",              guests: ["Enrique Gutierrez","Yesenia Diaz","Aida Diaz","Mateo Gutierrez","Diego Gutierrez"] },
    { code: "Temple01",    name: "The Temple Family",                 guests: ["Veronica Temple","Michael Temple","Nayeli Cardenas"] },
    { code: "Maldonado01", name: "The Maldonado Family",              guests: ["Maria Maldonado","Gilberto Maldonado","Vanessa Lamas","Cristian Lamas"] },
    { code: "Zelnick01",   name: "The Zelnick-Chevere Family",        guests: ["Erika Zelnick","Noel Chevere"] },
    { code: "Zelnick02",   name: "The Zelnick Family",                guests: ["Serge Zelnick","Joanne Zelnick"] },
    { code: "Valdez01",    name: "Steven & Cesar Valdez",             guests: ["Steven Valdez","Cesar Valdez"] },
    { code: "Hofilena01",  name: "The Hofilena Family",               guests: ["Doriane Hofilena","Brian Hofilena"] },
    { code: "Dukes01",     name: "Marilyn Dukes + Guest",             guests: ["Marilyn Dukes","Guest"] },
    { code: "Pinedo01",    name: "The Pinedo Family",                 guests: ["Marcus Pinedo","Klarixa Flores"] },
    { code: "Pinedo02",    name: "The Pinedo Family",                 guests: ["Jose Pinedo","Andrea Pinedo"] },
    { code: "DeMaria01",   name: "The De Maria Family",               guests: ["Salvatore De Maria","Marie Jane De Maria"] },
    { code: "Francis01",   name: "The Dennis Family",                 guests: ["Michelle Dennis","Nik Dennis","Luca Dennis","Remy Dennis"] },
    { code: "Laudate01",   name: "Lucille Laudate",                   guests: ["Lucille Laudate"] },
    { code: "Bottini01",   name: "The Bottini Family",                guests: ["Angela Bottini","Marc Bottini","Enzo Bottini","Vito Bottini"] },
    { code: "Sy01",        name: "Pablito Sy",                        guests: ["Pablito Sy"] },
    { code: "Sy02",        name: "The Sy Family",                     guests: ["Christopher Sy","Jennifer Sy"] },
    { code: "Sy03",        name: "The Sy Family",                     guests: ["Patrick Sy","Anita Sy"] },
    { code: "Johnson01",   name: "Nicole Johnson",                    guests: ["Nicole Johnson"] },
    { code: "Renz01",      name: "Arvin Vergonio",                    guests: ["Arvin Vergonio"] },
    { code: "Marucut01",   name: "Jordin Marucut",                    guests: ["Jordin Marucut"] },
    { code: "Waltar01",    name: "The Waltar-Abu-maye Family",        guests: ["Lexius Waltar","Maxamed Abu-maye"] },
    { code: "Marie01",     name: "Alyssa Batista",                    guests: ["Alyssa Batista"] },
    { code: "Tran01",      name: "Felix Tran",                        guests: ["Felix Tran"] },
    { code: "Ren01",       name: "The Ren Family",                    guests: ["Tiffany Ren","Juran Ren"] },
    { code: "Riordan01",   name: "The Riordan Family",                guests: ["Catherine Riordan","Pat Riordan"] },
    { code: "Lai01",       name: "Jasmine Lai",                       guests: ["Jasmine Lai"] },
    { code: "Wong01",      name: "Diana Wong",                        guests: ["Diana Wong"] },
    { code: "Lau01",       name: "Cassey Lau",                        guests: ["Cassey Lau"] },
    { code: "Weeks01",     name: "The Weeks-Vaughan Family",          guests: ["Jacob Weeks","Ali Vaughan"] },
    { code: "Harris01",    name: "The Harris-Anna Family",            guests: ["Joseph Harris","Anna Garcia"] },
    { code: "Guarro01",    name: "The Guarro Family",                 guests: ["Luca Guarro","Lexie Varga"] },
    { code: "Poissant01",  name: "The Poissant-Taylor Family",        guests: ["Gabriel Poissant","Rachel Taylor"] },
    { code: "Hollenbeck01",name: "The Hollenbeck Family",             guests: ["Garret Hollebeck","Lexi Hollenbeck"] },
    { code: "Hartnett01",  name: "Alec Hartnett",                     guests: ["Alec Hartnett"] },
    { code: "Bockneck01",  name: "Alex Bockneck",                     guests: ["Alex Bockneck"] },
    { code: "Katz01",      name: "Kaylena Katz",                      guests: ["Kaylena Katz"] },
    { code: "Brawley01",   name: "Veronica Brawley",                  guests: ["Veronica Brawley"] },
    { code: "Caracciolo01",name: "Matthew Caracciolo",                guests: ["Matthew Caracciolo"] },
    { code: "Santana01",   name: "The Santana-Golding Family",        guests: ["William Santana","Gray Golding"] },
    { code: "Meeder01",    name: "Ian Meeder",                        guests: ["Ian Meeder"] },
    { code: "Rowhani01",   name: "The Rowhani Family",                guests: ["Sana Rowhani","Shima Rowhani"] },
    { code: "Nillson01",   name: "The Nillson-Dinse Family",          guests: ["Jonah Nillson","Sara Dinse"] },
    { code: "Polit01",     name: "The Polit-Bowen Family",            guests: ["Marc Polit","Raven Bowen"] },
    { code: "Pineira01",   name: "The Pineira-Barkhudarova Family",   guests: ["Brandon Pineira","Sophia Barkhudarova"] },
    { code: "Wolfe01",     name: "Bo Wolfe",                          guests: ["Bo Wolfe"] },
    { code: "Cope01",      name: "Eliza Cope",                        guests: ["Eliza Cope"] },
    { code: "Michel01",    name: "Katie Michel",                      guests: ["Katie Michel"] },
    { code: "Miles01",     name: "Kieran Miles",                      guests: ["Kieran Miles"] },
    { code: "McCubbin01",  name: "Samuel McCubbin",                   guests: ["Samuel McCubbin"] },
  ];

  let selectedHousehold = null;
  let guestData = [];

  function normalize(s) {
    return s.toLowerCase().replace(/[^a-z0-9 ]/g, '');
  }

  function searchGuests(query) {
    if (!query || query.length < 2) return [];
    const q = normalize(query);
    const matches = [];
    for (const h of HOUSEHOLDS) {
      let hit = normalize(h.name).includes(q);
      if (!hit) {
        for (const g of h.guests) {
          if (normalize(g).includes(q)) { hit = true; break; }
        }
      }
      if (hit && !matches.find(m => m.code === h.code)) matches.push(h);
    }
    return matches.slice(0, 7);
  }

  const searchInput = document.getElementById('rsvp-search-input');
  const dropdown    = document.getElementById('rsvp-dropdown');

  searchInput.addEventListener('input', () => {
    const q = searchInput.value.trim();
    if (!q || q.length < 2) {
      dropdown.style.display = 'none';
      return;
    }
    const matches = searchGuests(q);
    dropdown.style.display = 'block';
    if (!matches.length) {
      dropdown.innerHTML = '<div class="rsvp-no-results">No guests found — try a different spelling.</div>';
      return;
    }
    dropdown.innerHTML = matches.map(h => `
      <div class="rsvp-result-item" data-code="${h.code}" role="option" tabindex="0">
        <div class="rsvp-result-name">${h.name}</div>
        <div class="rsvp-result-members">${h.guests.join(' · ')}</div>
      </div>
    `).join('');
    dropdown.querySelectorAll('.rsvp-result-item').forEach(el => {
      el.addEventListener('click',   () => selectHousehold(el.dataset.code));
      el.addEventListener('keydown', e => { if (e.key === 'Enter') selectHousehold(el.dataset.code); });
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('#rsvp-step-search')) dropdown.style.display = 'none';
  });

  function selectHousehold(code) {
    selectedHousehold = HOUSEHOLDS.find(h => h.code === code);
    if (!selectedHousehold) return;
    guestData = selectedHousehold.guests.map(name => ({ name, attending: null, dietary: '' }));
    document.getElementById('rsvp-household-label').textContent = 'RSVPing for ' + selectedHousehold.name;
    document.getElementById('rsvp-error').style.display = 'none';
    document.getElementById('rsvp-song').value  = '';
    document.getElementById('rsvp-notes').value = '';
    renderGuests();
    document.getElementById('rsvp-step-search').classList.remove('active');
    document.getElementById('rsvp-step-form').classList.add('active');
    dropdown.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderGuests() {
    const c = document.getElementById('rsvp-guests-container');
    c.innerHTML = guestData.map((g, i) => `
      <div class="rsvp-guest-card">
        <div class="rsvp-guest-name">${g.name}</div>
        <div class="rsvp-att-row">
          <div class="rsvp-att-btn${g.attending === true  ? ' accept'  : ''}"
               data-idx="${i}" data-val="yes" role="button" tabindex="0">Joyfully Accepts</div>
          <div class="rsvp-att-btn${g.attending === false ? ' decline' : ''}"
               data-idx="${i}" data-val="no"  role="button" tabindex="0">Regretfully Declines</div>
        </div>
        <div class="rsvp-field-label">Dietary restrictions / allergies</div>
        <input class="rsvp-field-input rsvp-dietary" data-idx="${i}" type="text"
               placeholder="e.g. gluten-free, nut allergy..." value="${g.dietary}" />
      </div>
    `).join('');

    c.querySelectorAll('.rsvp-att-btn').forEach(btn => {
      const handler = () => {
        saveDietary();
        guestData[+btn.dataset.idx].attending = btn.dataset.val === 'yes';
        renderGuests();
      };
      btn.addEventListener('click',   handler);
      btn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') handler(); });
    });
    c.querySelectorAll('.rsvp-dietary').forEach(inp => {
      inp.addEventListener('input', () => { guestData[+inp.dataset.idx].dietary = inp.value; });
    });
  }

  function saveDietary() {
    document.querySelectorAll('.rsvp-dietary').forEach(inp => {
      guestData[+inp.dataset.idx].dietary = inp.value;
    });
  }

  document.getElementById('rsvp-back-btn').addEventListener('click', () => {
    document.getElementById('rsvp-step-form').classList.remove('active');
    document.getElementById('rsvp-step-search').classList.add('active');
    searchInput.value = '';
    selectedHousehold = null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  document.getElementById('rsvp-submit-btn').addEventListener('click', async () => {
    saveDietary();
    if (!guestData.some(g => g.attending !== null)) {
      alert('Please select attendance for at least one guest before submitting.');
      return;
    }

    const btn    = document.getElementById('rsvp-submit-btn');
    const errMsg = document.getElementById('rsvp-error');
    btn.disabled    = true;
    btn.textContent = 'Sending…';
    errMsg.style.display = 'none';

    const song  = document.getElementById('rsvp-song').value.trim();
    const notes = document.getElementById('rsvp-notes').value.trim();

    const guestLines = guestData
      .filter(g => g.attending !== null)
      .map(g => {
        const status = g.attending ? '✅ Joyfully Accepts' : '❌ Regretfully Declines';
        const diet   = g.dietary ? ` — Dietary: ${g.dietary}` : '';
        return `${g.name}: ${status}${diet}`;
      })
      .join('\n');

    const templateParams = {
      household_name:  selectedHousehold.name,
      guest_responses: guestLines,
      song:            song  || '—',
      notes:           notes || '—',
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);
      document.getElementById('rsvp-step-form').classList.remove('active');
      document.getElementById('rsvp-step-success').classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error('EmailJS error:', err);
      btn.disabled    = false;
      btn.textContent = 'Send RSVP';
      errMsg.style.display = 'block';
    }
  });
