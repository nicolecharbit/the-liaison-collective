// Initialize Lucide Icons on load
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }
});

// Strict 4-Tab Switching
function switchTab(tabId) {
  const navBtns = document.querySelectorAll('.nav-btn');
  navBtns.forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  const tabPanes = document.querySelectorAll('.tab-pane');
  tabPanes.forEach(pane => {
    if (pane.id === `tab-${tabId}`) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Artist Campaign Decks Data (Tab 1: Music Marketing Strategies)
const artistCampaigns = {
  natesib: {
    name: 'Nate Sib',
    genre: 'Hyperpop / Alternative Electropop / Electroclash',
    why: 'Nate Sib makes groundbreaking alternative electropop and hyperpop, blending synth-driven melodies, glitchy electronic dance beats, trap grit, and heavy bass with emotive vocal delivery. He has raw star power and compelling artistry that deserves a massive, dedicated global audience.',
    differently: [
      {
        title: '1. Humanize & Make His Social Media Accessible',
        desc: 'Shift Nate’s social presence away from distant or cryptic posts toward genuine fan intimacy. Share raw 15-30 second studio production vlogs showing how he layers synths and vocals, host live Instagram Q&As, and reply to fan comments in video format to build an authentic, loyal community.'
      },
      {
        title: '2. Establish Standalone Pop Star Identity (Unlinking 2hollis)',
        desc: 'Actively decouple Nate’s press narrative from 2hollis so he is recognized as an independent pop star in his own right. Pitch exclusive solo profile interviews to Complex, Office Magazine, Paper, and Substack newsletters focusing strictly on Nate’s personal backstory, songwriting, and distinct L.A. sound.'
      },
      {
        title: '3. Elevate High-Fashion Underground Rockstar Visuals',
        desc: 'Capitalize on Nate’s striking personal aesthetic (fur-trimmed suede jackets, distressed denim, layered silver jewelry) by partnering with independent luxury streetwear brands (e.g. Acne Studios, vintage workwear archivists). Produce high-contrast 35mm flash photography artwork and lookbooks.'
      },
      {
        title: '4. Targeted Alt-Pop & Electropop Playlist Seeding',
        desc: 'Execute a precision editorial pitch campaign targeting key Spotify playlists (Anti Pop, Pollinate, hyperpop, Alt Pop, Lorem) and send advance listens to influential TikTok music tastemakers and Substack curators.'
      },
      {
        title: '5. Experiential Secret Warehouse Pop-Up Series',
        desc: 'Organize unannounced "Distorted Pop" pop-up warehouse live sessions in major cultural hubs (Los Angeles, Boston, Miami, NYC). Distribute location RSVPs exclusively via an opt-in text line to build high-demand exclusivity and organic word-of-mouth virality.'
      }
    ]
  },
  dexter: {
    name: 'dexter in the newsagent',
    genre: 'South London Alt-R&B / Soft-Lit Pop / Indie Soul',
    why: 'dexter in the newsagent (Charmaine Ayoku) is an extraordinary South London singer-songwriter crafting soft-lit pop dreams with a soulful, acoustic core. Despite critical acclaim from Pitchfork, COLORS, and The FADER, she remains under-recognized globally. Her honest storytelling and intimate vocal tone deserve a worldwide audience.',
    differently: [
      {
        title: '1. World-Building Around Her "Newsagent" Identity',
        desc: 'Turn her unique artist moniker and South London roots into an immersive physical & digital visual universe. Launch physical "Newsstand Merch Pop-ups" featuring printed photo zines, custom cassette tapes, newsagent tote bags, and retro corner-store packaging in London, NYC, Boston, and Miami.'
      },
      {
        title: '2. Transatlantic US College & Radio Breakout',
        desc: 'Bridge her UK fanbase into a major US college movement. Launch a dedicated US student radio campaign starting with WZBC 90.3 FM Newton, pitching her soft-lit alt-R&B sound to US college radio stations, Substack music curators, and indie campus publications.'
      },
      {
        title: '3. Nostalgic Y2K Visual Direction & Authentic Storytelling',
        desc: 'Lean into her iconic South London Y2K style (camo tanks, True Religion denim, bus stop portraits, warm lo-fi camcorder footage). Produce intimate TikTok & Reels video series explaining the real emotional stories behind her projects (Time Flies, Special, eighteen).'
      },
      {
        title: '4. Alt-R&B & Soulful Indie Playlist Seeding',
        desc: 'Execute a targeted editorial pitch campaign to key Spotify & Apple Music playlists (Lorem, Chilled R&B, Indie Pop, Pollinate, R&B Weekly) and tap into Pitchfork and COLORS tastemaker communities.'
      },
      {
        title: '5. Intimate Corner Store & Bus Stop Acoustic Sessions',
        desc: 'Host unannounced acoustic pop-up performances at local corner stores, newsagents, and independent record shops in London, NYC, and Boston, capturing raw video clips for viral social seeding.'
      }
    ]
  }
};

function openArtistModal(artistId) {
  const artist = artistCampaigns[artistId];
  if (!artist) return;

  const content = `
    <span style="font-size:0.75rem; letter-spacing:1.5px; color:var(--accent-terracotta); text-transform:uppercase; font-weight:600;">Detailed Music Marketing Strategy</span>
    <h3 style="font-family:var(--font-serif); font-size:1.9rem; margin:6px 0;">${artist.name}</h3>
    <p style="color:var(--text-muted); font-size:0.95rem; font-style:italic; margin-bottom:20px;">${artist.genre}</p>

    <div style="margin-bottom:20px; background:var(--bg-subtle); padding:16px; border-radius:12px; border:1px solid var(--border-muted);">
      <h4 style="font-family:var(--font-serif); font-size:1.15rem; color:var(--text-main); margin-bottom:4px;">Why I Chose This Artist</h4>
      <p style="color:var(--text-muted); font-size:0.95rem; line-height:1.6;">${artist.why}</p>
    </div>

    <div style="margin-bottom:24px;">
      <h4 style="font-family:var(--font-serif); font-size:1.4rem; color:var(--text-main); margin-bottom:14px; border-bottom:1px solid var(--border-muted); padding-bottom:6px;">
        What I Would Do Differently: Detailed 360° Action Plan
      </h4>
      
      <div style="display:flex; flex-direction:column; gap:16px;">
        ${artist.differently.map(item => `
          <div style="background:var(--bg-card); border:1px solid var(--border-muted); border-radius:10px; padding:16px; border-left:3px solid var(--accent-terracotta);">
            <h5 style="font-family:var(--font-serif); font-size:1.1rem; color:var(--text-main); margin-bottom:6px;">${item.title}</h5>
            <p style="color:var(--text-muted); font-size:0.92rem; line-height:1.6;">${item.desc}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <button class="card-btn-full" onclick="closeModal('artistModal'); openContactModal();" style="display:inline-flex; align-items:center; justify-content:center; gap:8px;">
      <i data-lucide="mail"></i> Discuss This Strategy with Nicole
    </button>
  `;

  document.getElementById('artistModalContent').innerHTML = content;
  openModal('artistModal');
}

// Spec Campaign Decks Data (Tab 2: Spec Ads - DEEPLY EXPANDED & STRATEGIC)
const campaignDecks = {
  glossier: {
    title: 'Glossier x Festival Season: The Sonic Lounge',
    tagline: 'Skin-First Hydration Meets Live Music Culture',
    image: 'glossier.png',
    whyGood: 'Multi-day music festivals destroy your skin. Between the hot sun, dust, and hours of dancing, everyone is looking for shade and a quick touch-up. The Sonic Lounge gives Glossier a real physical presence at places like Coachella and Governors Ball, giving festival-goers a cool place to rest, refresh their makeup, and listen to live DJ sets. By launching festival-exclusive Glossier Lip Gloss and Balm Dotcom shades right on the festival grounds, we turn a practical need into exclusive merch drops and massive organic TikTok content.',
    targetAudience: 'Gen Z and young millennials (ages 18–28), festival-goers, indie music fans, and everyday Glossier lovers who want an effortless, dewy look.',
    strategy: [
      {
        head: '1. Experiential Pop-Up Oasis (Coachella, Lollapalooza, Governors Ball, III Points)',
        detail: 'Set up an air-conditioned cooling lounge with custom Glossier hydrating mist stations, shade lounges, and makeup touch-up bars hosted by Glossier artists.'
      },
      {
        head: '2. Exclusive Festival Merch & Product Drops',
        detail: 'Drop limited-edition Glossier Lip Gloss and Balm Dotcom shades named after music genres, packaged inside collectible festival zine pouches.'
      },
      {
        head: '3. DJ Listening Booths & Backstage Sets',
        detail: 'Partner with performing indie artists to host intimate acoustic sets and DJ sessions inside the lounge, streaming live clips across Glossier’s social channels.'
      },
      {
        head: '4. TikTok Mirror Stations & Social Virality',
        detail: 'Build ring-lit mirror setups with custom festival geo-filters, giving attendees a reason to post their Glossier festival glow on TikTok for a chance to win backstage pass upgrades.'
      }
    ],
    kpis: [
      '250,000+ On-Site Festival Impressions',
      '4.2x ROI on Pop-Up Retail Sales',
      '500,000+ Social Media Posts (#GlossierSonicLounge)',
      '48% Conversion Rate to Glossier Email & SMS Club'
    ]
  },
  salomon: {
    title: 'Salomon: Urban Acoustic Trail',
    tagline: 'Streetwise Outdoor Style Meets Underground Acoustic Busking Culture',
    image: 'salomon.png',
    whyGood: 'Salomon has successfully transitioned from technical mountain hiking footwear into a dominant force in urban streetwear. The Urban Acoustic Trail campaign bridges Salomon’s rugged durability with urban street culture, capturing emerging acoustic buskers, indie musicians, and street performers navigating concrete cities in Salomon XT-6 sneakers.',
    targetAudience: 'Streetwear Collectors, Urban Creatives, Music Fans (Ages 18–32), Outdoor & City Explorers.',
    strategy: [
      {
        head: '1. Cinematic 3-Part Short Film Series',
        detail: 'Direct a high-contrast 35mm documentary series following street musicians performing in rugged urban landscapes across Boston, Miami, NYC, and LA, emphasizing how Salomon footwear adapts seamlessly from subway staircases to street stages.'
      },
      {
        head: '2. Pop-Up Acoustic Street Sessions',
        detail: 'Host unannounced acoustic pop-up performances on plaza steps, park amphitheaters, and urban rooftops in big cities, distributing branded Salomon acoustic guitar picks and footwear discount passes.'
      },
      {
        head: '3. Editorial Streetwear Lookbooks',
        detail: 'Publish high-fashion editorial lookbooks across digital fashion hubs (Hypebeast, Highsnobiety, Complex) pairing Salomon XT-6 sneakers with vintage workwear and acoustic instruments.'
      },
      {
        head: '4. Interactive City Busker Map & Playlist Hub',
        detail: 'Launch an interactive city map allowing fans to discover local street buskers and listen to live acoustic recordings of their performances.'
      }
    ],
    kpis: [
      '+42% Increase in Salomon XT-6 Urban Footwear Sales',
      '1.2M+ YouTube & Vimeo Documentary Views',
      '350,000+ Social Engagements (#SalomonAcousticTrail)',
      '5.1x Media Value ROI on Digital Ad Spend'
    ]
  }
};

function openCampaignModal(deckId) {
  const deck = campaignDecks[deckId];
  if (!deck) return;

  const content = `
    <div style="margin-bottom:16px;">
      <span style="font-size:0.75rem; letter-spacing:1.5px; color:var(--accent-terracotta); text-transform:uppercase; font-weight:600;">Spec Campaign Strategy Deck</span>
      <h3 style="font-family:var(--font-serif); font-size:1.8rem; margin:4px 0 2px;">${deck.title}</h3>
      <p style="color:var(--text-muted); font-size:0.95rem; font-style:italic; margin-bottom:16px;">${deck.tagline}</p>
    </div>

    <!-- Editorial Header Image -->
    <div style="width:100%; height:240px; border-radius:12px; overflow:hidden; margin-bottom:20px; border:1px solid var(--border-muted);">
      <img src="${deck.image}" alt="${deck.title}" style="width:100%; height:100%; object-fit:cover;" />
    </div>

    <!-- Strategic Rationale: Why This Campaign Is Good -->
    <div style="background:var(--bg-subtle); padding:18px; border-radius:12px; border:1px solid var(--border-muted); margin-bottom:20px;">
      <h4 style="font-family:var(--font-serif); font-size:1.2rem; color:var(--text-main); margin-bottom:6px;">
        Strategic Rationale: Why This Campaign Drives Massive ROI
      </h4>
      <p style="color:var(--text-muted); font-size:0.92rem; line-height:1.6; margin-bottom:12px;">${deck.whyGood}</p>
      <div style="border-top:1px solid var(--border-muted); padding-top:10px; font-size:0.88rem; color:var(--text-main);">
        <strong>Target Audience & Cultural Positioning:</strong> ${deck.targetAudience}
      </div>
    </div>

    <!-- Detailed Strategy Pillars -->
    <div style="margin-bottom:24px;">
      <h4 style="font-family:var(--font-serif); font-size:1.3rem; color:var(--text-main); margin-bottom:12px; border-bottom:1px solid var(--border-muted); padding-bottom:6px;">
        Detailed Campaign Activation Blueprint
      </h4>
      <div style="display:flex; flex-direction:column; gap:14px;">
        ${deck.strategy.map(item => `
          <div style="background:var(--bg-card); border:1px solid var(--border-muted); border-radius:10px; padding:16px; border-left:3px solid var(--accent-terracotta);">
            <h5 style="font-family:var(--font-serif); font-size:1.05rem; color:var(--text-main); margin-bottom:4px;">${item.head}</h5>
            <p style="color:var(--text-muted); font-size:0.9rem; line-height:1.5;">${item.detail}</p>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- Expected KPIs & Business Metrics -->
    <div style="margin-bottom:24px; background:var(--bg-sand); padding:16px; border-radius:12px; border:1px solid var(--border-muted);">
      <h4 style="font-family:var(--font-serif); font-size:1.15rem; color:var(--text-main); margin-bottom:10px;">
        Projected KPIs & Business Metrics
      </h4>
      <div style="display:grid; grid-template-columns:repeat(2, 1fr); gap:10px;">
        ${deck.kpis.map(kpi => `
          <div style="background:var(--bg-card); padding:10px 12px; border-radius:8px; border:1px solid var(--border-muted); font-size:0.85rem; font-weight:600; color:var(--accent-terracotta); text-align:center;">
            ${kpi}
          </div>
        `).join('')}
      </div>
    </div>

    <button class="card-btn-full" onclick="closeModal('campaignModal'); openContactModal();" style="display:inline-flex; align-items:center; justify-content:center; gap:8px;">
      <i data-lucide="mail"></i> Discuss This Spec Campaign with Nicole
    </button>
  `;

  document.getElementById('campaignModalContent').innerHTML = content;
  openModal('campaignModal');
}

// Modal Helpers
function openModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.add('active');
    if (window.lucide) lucide.createIcons();
  }
}

function closeModal(id) {
  const modal = document.getElementById(id);
  if (modal) {
    modal.classList.remove('active');
  }
}

function closeModalOnOverlay(event, id) {
  if (event.target.id === id) {
    closeModal(id);
  }
}

function openContactModal() {
  openModal('contactModal');
}

function handleFormSubmit(e) {
  e.preventDefault();
  window.location.href = 'mailto:by.nikki01@gmail.com';
  closeModal('contactModal');
}

function openLightbox(imgSrc, caption) {
  document.getElementById('lightboxImg').src = imgSrc;
  openModal('lightboxModal');
}

function switchVisualSubTab(subTabId, btnEl) {
  const allBtns = document.querySelectorAll('.subnav-btn');
  allBtns.forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  const treatmentsPane = document.getElementById('visual-subtab-treatments');
  const graphicsPane = document.getElementById('visual-subtab-graphics');
  const coverCard = document.getElementById('treatment-cover-card');
  const fullDeck = document.getElementById('treatment-full-deck');

  if (subTabId === 'treatments') {
    if (treatmentsPane) treatmentsPane.style.display = 'block';
    if (graphicsPane) graphicsPane.style.display = 'none';
    if (coverCard) coverCard.style.display = 'block';
    if (fullDeck) fullDeck.style.display = 'none';
  } else {
    if (treatmentsPane) treatmentsPane.style.display = 'none';
    if (graphicsPane) graphicsPane.style.display = 'block';
  }
}

function toggleTreatmentDeck(show) {
  const coverCard = document.getElementById('treatment-cover-card');
  const fullDeck = document.getElementById('treatment-full-deck');
  if (!coverCard || !fullDeck) return;
  
  if (show === true) {
    coverCard.style.display = 'none';
    fullDeck.style.display = 'block';
    if (window.lucide) lucide.createIcons();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    fullDeck.style.display = 'none';
    coverCard.style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
