# Tracking Notes & Session State: The Liaison Collective (by Nicole Charbit)

> **Purpose**: This file serves as the single source of truth for **The Liaison Collective** portfolio website. It tracks all architecture, design systems, content decisions, change history, and session continuity instructions. Use this document to resume work in any new session seamlessly.

---

## 1. Executive Summary & Identity

* **Owner / Creator**: Nicole Charbit
  * **Background**: Boston College Class of 2028 (Communication Major, Marketing & Journalism Minors). Based across Miami, FL, Dubai, UAE, and Boston, MA.
  * **Contact Email**: `by.nikki01@gmail.com`
* **Studio Name**: **The Liaison Collective** (`TLC`)
* **Tagline**: *"A digital studio & creative lab connecting music marketing, editorial design, and visual direction."*
  * *Note*: The word **"boutique"** has been explicitly removed from all studio overview manifesto text and hero banners per direct instruction.
* **Live Site URLs**:
  * **GitHub Pages**: `https://nicolecharbit.github.io/the-liaison-collective/`
  * **Webflow Portfolio**: `https://by-nikki.webflow.io/`
* **GitHub Repository**: `https://github.com/nicolecharbit/the-liaison-collective.git` (Branch: `main`)

---

## 2. Technical Stack & Design System

* **Architecture**: Vanilla HTML5, CSS3, ES6 JavaScript, Lucide Vector Icons. Zero build framework overhead for fast loading and low maintenance.
* **Color Palette (Soft Blush / Sand System)**:
  * `--bg-sand`: `#FDF4F6` (Main body background - soft light blush)
  * `--bg-card`: `#FFFFFF` (Card container background)
  * `--bg-subtle`: `#F9EBEF` (Subtle container background)
  * `--border-muted`: `#F0DEE3` (Soft border color)
  * `--text-main`: `#1A1917` (Deep charcoal text)
  * `--text-muted`: `#5C5852` (Secondary text)
  * `--accent-terracotta`: `#B88352` (Warm terracotta accent color)
* **Typography**:
  * Serif: `'Vollkorn'`, `'Playfair Display'`, Georgia, serif
  * Sans-serif: `'Jost'`, -apple-system, BlinkMacSystemFont, sans-serif
* **Mobile & iPhone Optimization**:
  * Touch-scrollable navigation bar (`.nav-menu`) with hidden scrollbars for single-line tab access.
  * Responsive swatches grid (`.responsive-swatch-grid`: 6-col desktop, 3-col tablet, 2-col phone).
  * Responsive inspiration grid (`.responsive-inspo-grid`: 6-col desktop, 2-col phone).
  * iOS Safari safe-area insets (`padding-bottom: env(safe-area-inset-bottom);`), `-webkit-tap-highlight-color: transparent`.

---

## 3. Site Navigation & Tab Structure (5 Main Tabs)

```
[The Liaison Collective Header]
 ├── Tab 1: Home (#tab-home)
 ├── Tab 2: Music Marketing Strategies (#tab-music-mktg)
 ├── Tab 3: Spec Ads (#tab-spec-ads)
 ├── Tab 4: Visual Direction (#tab-visual-dir)
 │     ├── Sub-Tab 1: Graphic Design (#visual-subtab-graphics) -> Active First by Default
 │     └── Sub-Tab 2: Commercial Treatments (#visual-subtab-treatments) -> Arc'teryx x Arsenal
 └── Tab 5: About & Skills (#tab-about-skills)
```

### Tab Breakdown

1. **Home (`#tab-home`)**:
   * Features Nicole's editorial portrait (`nicole_portrait_editorial.jpg`) and studio introduction.
   * Interactive showcase cards linking to Music Marketing, Graphic Design, Arc'teryx × Arsenal FC treatment, and About Nicole.
2. **Music Marketing Strategies (`#tab-music-mktg`)**:
   * **Nate Sib — August 21st Album Rollout Proposal**: Target Release August 21st, 2026 (Republic Records, NYFW Praying runway takeover, FADER feature, TikTok @nate_s1b & IG @nate_sib 3-week studio snippet series + "Notion" trend, X lyric voice notes, 2-part Substack newsletter, YouTube live listening party + Webster Hall NYC & TLA Philly tour pre-save ticket codes, guerilla scannable QR wheatpaste posters at ESSX NYC, SoHo, Fairfax LA, BC, NYU, USC).
   * **dexter in the newsagent**: South London Alt-R&B / Soft-Lit Pop campaign.
   * Interactive modal (`#campaignModal`) with strategy breakdown and direct email contact trigger (`mailto:by.nikki01@gmail.com`).
3. **Spec Ads (`#tab-spec-ads`)**:
   * Interactive filter bar (`ALL`, `SPOTIFY`, `ROLLING STONE`).
   * Features high-resolution spec ad campaigns with lightbox viewer (`openLightbox`).
4. **Visual Direction (`#tab-visual-dir`)**:
   * Subnav filter bar (`.subnav-filter-bar`):
     * **Sub-Tab 1 (`Graphic Design`)**: Active first by default. Displays editorial zine covers, brand identity, and graphic design archives.
     * **Sub-Tab 2 (`Commercial Treatments`)**: Arc'teryx × Arsenal FC campaign pitch deck.
5. **About & Skills (`#tab-about-skills`)**:
   * Studio manifesto, educational background (Boston College '28), skill pills, and interactive contact modal trigger (`#contactModal`).

---

## 4. Arc'teryx × Arsenal FC Campaign Treatment Specifications

* **Campaign Title**: `"PROOF AGAINST THE ELEMENTS"`
* **Sub-Tab Order**: `Graphic Design` is Sub-Tab 1; `Commercial Treatments` is Sub-Tab 2.
* **Interactive Presentation Flow**:
  * **Initial View**: Solo Campaign Poster cover card (`#treatment-cover-card`) featuring `arcteryx_arsenal_poster.jpg` and button *"Click Poster to View Full Pitch Deck & Mood Board"*.
  * **OnClick View**: Clicking the poster hides the cover card (`display: none`) and reveals the full pitch deck (`#treatment-full-deck`) as the primary view, complete with a `← Back to Campaign Cover` navigation button.

### Full Pitch Deck Sequence (Exact Order)

1. **Header Banner**: `ARC'TERYX × ARSENAL FC` / `PROOF AGAINST THE ELEMENTS`.
2. **Director's Note & Creative Rationale**:
   > As a lifelong Arsenal supporter, I’ve always been inspired by the club’s effortless style and the sleek apparel lines they release. Arc’teryx is another brand I’m genuinely fond of for its pinnacle technical design. Fusing these two leading brands felt like an intuitive synthesis, bringing North London football culture together with alpine technical engineering into one cohesive campaign.
   * *Key Rules*: No quotation marks, uses *"leading brands"* (not "powerhouses"), uses a comma between *"synthesis, bringing"*.
3. **Main Campaign Poster**: Centered poster artwork (`arcteryx_arsenal_poster.jpg`) with click-to-view fullscreen lightbox.
   * *Key Rules*: The word **"Hero"** or **"(CENTERPIECE)"** is removed. Overlay pill badge is removed. Container width set to `max-width: 640px`.
4. **Commercial Soundtrack Callout Card**:
   * **Song**: **"SpottieOttieDopaliscious" by OutKast**
   * Positioned directly below the Campaign Poster with a *"Listen to Track"* Spotify link button.
5. **Official Arsenal FC Club & Capsule Palette**:
   * Highbury Red (`#DB0007`), Pure White (`#FFFFFF`), Heritage Dark Red (`#7F0000`), North London Navy (`#0B1E3D`), Victory Gold (`#D4AF37`), Bruised Banana (`#FFD100`).
   * Positioned below the Soundtrack card and above the Inspiration section.
6. **Commercial Video Inspo & Storyboard Shots (6 Inspiration Photos)**:
   * **Subtitle**: *"When scrolling on the internet for inspiration, these are pictures I found that create the vibe I am looking for."* (*"inspiration"*, not "inspo").
   * **6 Photos Gallery**:
     1. `inspo_1.jpg`: Squad training mood in blue tracksuits.
     2. `inspo_2.jpg`: Night pitch solo drill with adjusted framing (`object-position: center bottom`) so the player and football are fully visible.
     3. `inspo_3.jpg`: Stadium floodlights and heavy rain atmosphere.
     4. `inspo_4.jpg`: Rain droplets on Arc'teryx Gore-Tex hood close-up.
     5. `inspo_5.jpg`: The North Face *"Seek No Shelter"* rain editorial poster.
     6. `inspo_6.jpg`: Night pitch solo football session photo.
7. **Wardrobe & Product Focus**:
   * Details on Arc'teryx × Arsenal Alpha SV Special Edition in Matte Black, Highbury Crimson embroidered Deadbird logo, and Bruised Banana Yellow taped inner seams.

### Excluded / Deleted Elements (DO NOT RE-ADD)
* ❌ Emojis (`🎬`, `👕`, `🎵`) - All replaced with Lucide vector icons (`clapperboard`, `shirt`, `music`).
* ❌ Dark background (`#0F1115`) - Replaced with light blush card system (`var(--bg-card)` & `var(--bg-subtle)`).
* ❌ The word **"Hero"** or **"HERO"** in captions/titles.
* ❌ The top banner tag `DIRECTOR'S PITCH DECK & VISUAL MOOD BOARD`.
* ❌ The 3-Layer Audio Architecture text card & soundscape player block.
* ❌ The 5 Capsule Drop & Campaign Graphics placeholder cards (`MATCHDAY`, `PRODUCT`, `STORY`, `OOH BILLBOARD`, `SCORE CARD`).

---

## 5. File Inventory & Local Workspace Mapping

* Workspace Directory: `/Users/nicolecharbit/Downloads/Antigravity/TLC/`
  * [index.html](file:///Users/nicolecharbit/Downloads/Antigravity/TLC/index.html): HTML source containing all 5 tabs, sub-tabs, modals, and campaign deck.
  * [styles.css](file:///Users/nicolecharbit/Downloads/Antigravity/TLC/styles.css): Soft blush CSS tokens, mobile media queries, iOS safe-area rules, responsive grid utilities.
  * [app.js](file:///Users/nicolecharbit/Downloads/Antigravity/TLC/app.js): Tab switcher (`switchTab`), sub-tab switcher (`switchVisualSubTab`), cover deck toggle (`toggleTreatmentDeck`), lightbox modal controller (`openLightbox`), contact modal launcher (`openContactModal`).
  * [tracking_notes.md](file:///Users/nicolecharbit/Downloads/Antigravity/TLC/tracking_notes.md): Active change log and session memory file.
  * `arcteryx_arsenal_poster.jpg`: Updated campaign poster graphic artwork.
  * `inspo_1.jpg` to `inspo_6.jpg`: 6 visual inspiration photos.

---

## 6. Git & Deployment Instructions

* Remote Origin: `https://github.com/nicolecharbit/the-liaison-collective.git`
* Authentication Token: Verified GitHub PAT with `repo` scope active.
* Deploy Commands:
  ```bash
  git add .
  git commit -m "Commit message"
  git push origin main
  ```

---

## 7. How to Resume a New Session Using This File

When starting a new conversation session:
1. Read this `tracking_notes.md` file first to reload full project context.
2. Confirm the 5 main tabs, design palette, and Arc'teryx × Arsenal FC campaign deck structure remain intact.
3. Apply any new user directives directly while preserving the rules outlined above.
