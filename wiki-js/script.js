<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Florida Legends Wiki</title>

  <!-- Font -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">

  <!-- CSS and JS are in the SAME folder as this file -->
  <link rel="stylesheet" href="./styles-wiki.css" />
  <script src="./wiki.js" defer></script>
</head>
<body>
  <header class="hero" role="banner">
    <div class="hero-banner">
      <div class="wrap">
        <h1>Florida Bigfoot, Florida Man &amp; Florida Woman - Wiki</h1>
        <p class="tagline">A tiny encyclopedia of only-in-Florida legends.</p>
      </div>
    </div>
  </header>

  <!-- Only the 3 required buttons -->
  <div class="controls" aria-label="Page controls">
    <button id="themeBtn" class="btn">🌙 Dark</button>
    <button id="textBtn" class="btn">🔎 Big Text</button>
    <button id="accentBtn" class="btn">🎨 Accent</button>
  </div>

  <nav class="hero-nav" aria-label="Primary">
    <div class="wrap">
      <ul>
        <li><a href="#bigfoot">Florida Bigfoot</a></li>
        <li><a href="#man">Florida Man</a></li>
        <li><a href="#woman">Florida Woman</a></li>
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#faq">FAQ</a></li>
      </ul>
    </div>
  </nav>

  <main id="content">
    <!-- Bigfoot -->
    <section id="bigfoot" class="section">
      <h2>Florida Bigfoot</h2>
      <p class="lead">Also known as the Skunk Ape—mysterious, swamp-loving, and (allegedly) a connoisseur of Publix chicken tender subs.</p>

      <article class="card">
        <ul>
          <li>Also known as: <a href="https://en.wikipedia.org/wiki/Skunk_ape" target="_blank" rel="noopener">Skunk Ape</a></li>
          <li>Habitat: Everglades</li>
          <li>Fun fact: Loves Publix chicken tender subs</li>
        </ul>
      </article>

      <div class="info-grid">
        <div class="info-media">
          <img src="./images/florida-bigfoot.png" alt="Florida Bigfoot cartoon" width="180">
        </div>
        <div class="info-text">
          <p>
            Locals say Florida Bigfoot appears at dusk, lumbering through the sawgrass with a sandwich in hand.
            Some claim he leaves behind a trail of swamp water and laughter.
          </p>
          <aside class="note">Note: Reports often mention a strong odor—hence the nickname “Skunk Ape.”</aside>
        </div>
      </div>
    </section>

    <!-- Florida Man -->
    <section id="man" class="section">
      <h2>Florida Man</h2>
      <article class="card">
        <ul>
          <li>Rides inflatable flamingos into hurricanes</li>
          <li>Uses fireworks as bug spray</li>
          <li><strong>Chaos magnet:</strong> Always in the news</li>
        </ul>
      </article>
      <div class="info-grid">
        <div class="info-media">
          <img src="./images/florida-man.png" alt="Florida Man cartoon" width="180">
        </div>
        <div class="info-text">
          <p>His motto: “If it makes the news, it was worth it.”</p>
        </div>
      </div>
    </section>

    <!-- Florida Woman -->
    <section id="woman" class="section">
      <h2>Florida Woman</h2>
      <article class="card">
        <ul>
          <li>Argues with raccoons for Doritos</li>
          <li>Karaoke airboat parties</li>
          <li><em>Bedazzled emergency gear</em></li>
        </ul>
      </article>
      <div class="info-grid">
        <div class="info-media">
          <img src="./images/florida-woman.png" alt="Florida Woman cartoon" width="180">
        </div>
        <div class="info-text">
          <p>Saves baby gators and throws roadside dance-offs. Icon.</p>
        </div>
      </div>
    </section>

    <!-- Gallery -->
    <section id="gallery" class="section">
      <h2>Image Gallery</h2>
      <div class="gallery">
        <figure>
          <img src="./images/florida-bigfoot.png" alt="Bigfoot" width="120" height="120">
          <figcaption>Bigfoot sighting</figcaption>
        </figure>
        <figure>
          <img src="./images/florida-man.png" alt="Florida Man" width="120" height="120">
          <figcaption>Florida Man</figcaption>
        </figure>
        <figure>
          <img src="./images/florida-woman.png" alt="Florida Woman" width="120" height="120">
          <figcaption>Florida Woman</figcaption>
        </figure>
        <figure>
          <img src="./images/everglades.png" alt="Everglades landscape" width="120" height="120">
          <figcaption>Everglades</figcaption>
        </figure>
      </div>
      <p class="note">Hover the gallery images to see JavaScript change captions & styles.</p>
    </section>

    <!-- FAQ -->
    <aside id="faq" class="section">
      <h2>FAQ</h2>
      <p><strong>Are they real?</strong> The legends are real. The evidence is flexible.</p>
    </aside>
  </main>

  <footer>
    <p>&copy; 2025 Vivian Orellana — Class demo.</p>
  </footer>
</body>
</html>
