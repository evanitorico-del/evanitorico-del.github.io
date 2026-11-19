# evanitorico-del.github.io
Mon Portfolio
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Evan RICO – Portfolio</title>
  <meta name="description" content="Portfolio de TON NOM, TON MÉTIER">
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <nav>
    <a href="#about">À propos</a>
    <a href="#skills">Compétences</a>
    <a href="#projects">Projets</a>
    <a href="#contact">Contact</a>
  </nav>

  <header class="hero">
    <!-- Photo : mets ton image dans le dépôt (photo.jpg) puis décommente -->
    <!-- <img src="photo.jpg" alt="Photo de TON NOM" class="avatar"> -->
    <h1>Salut, je suis <span>Evan</span></h1>
    <p class="subtitle">Alternant en BTS SIO option SISR</p>
    <a class="btn" href="#projects">Voir mes projets</a>
  </header>

  <main>
    <section id="about">
      <h2>À propos</h2>
      <p>
        Je m'appelle Evan Rico, j'ai 19 ans et je suis alternant en BTS SIO option SISR.
      </p>
    </section>

    <section id="skills">
      <h2>Compétences</h2>
      <ul class="tags">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Git / GitHub</li>
        <li>TA COMPÉTENCE</li>
        <li>TA COMPÉTENCE</li>
      </ul>
    </section>

    <section id="projects">
      <h2>Projets</h2>
      <div class="grid">

        <article class="card">
          <h3>NOM DU PROJET 1</h3>
          <p>Description courte du projet et de ce que tu as appris.</p>
          <p class="stack">HTML · CSS · JavaScript</p>
          <a href="https://github.com/evanitorico-del/NOM-DU-REPO">Voir le code →</a>
        </article>

        <article class="card">
          <h3Automatisation D'ordinateur [style.css](https://github.com/user-attachments/files/35088285/style.css)
2</h3>
          <p>J'ai automatisé un ordinateur de A à Z, la mise sous tension, l'ouverture d'application et la mise sous tension ont été entièrement automatisées</p>
          <p class="stack"></p>
          <a href="https://github.com/evanitorico-del/NOM-DU-REPO">Voir le code →</a>
        </article>

        <article class="card">
          <h3>NOM DU PROJET 3</h3>
          <p>Description courte du projet et de ce que tu as appris.</p>
          <p class="stack">TECHNOS UTILISÉES</p>
          <a href="LIEN-DU-PROJET">Voir le projet →</a>
        </article>

      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>Une question, une opportunité ? Écris-moi.</p>
      <p class="links">
        <a href="mailto:evanrico301@gmail.com">evanrico301@gmail.com</a>
        <a href="https://github.com/evanitorico-del">GitHub</a>
        <a href="https://www.linkedin.com/in/Evan Rico">LinkedIn</a>
      </p>
    </section>
  </main>

  <footer>
    <p>© 2026 Evan RICO</p>
  </footer>

</body>
</html>

:root {
  --bg: #ffffff;
  --text: #1f2937;
  --muted: #6b7280;
  --card: #f3f4f6;
  --accent: #2563eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0d1117;
    --text: #e6edf3;
    --muted: #9aa4b2;
    --card: #161b22;
    --accent: #58a6ff;
  }
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  background: var(--bg);
  border-bottom: 1px solid var(--card);
  z-index: 10;
}
nav a { color: var(--text); font-weight: 500; }

.hero {
  text-align: center;
  padding: 5rem 1rem 4rem;
}
.hero h1 { font-size: clamp(2rem, 6vw, 3.5rem); margin: 0; }
.hero h1 span { color: var(--accent); }
.subtitle { color: var(--muted); font-size: 1.25rem; margin: 0.5rem 0 2rem; }
.avatar {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.5rem;
}

.btn {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
}
.btn:hover { text-decoration: none; opacity: 0.9; }

main { max-width: 900px; margin: auto; padding: 0 1.25rem; }
section { padding: 3rem 0; }
h2 { font-size: 1.75rem; margin-top: 0; }

.tags {
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}
.tags li {
  background: var(--card);
  padding: 0.4rem 1rem;
  border-radius: 999px;
  font-size: 0.95rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.25rem;
}
.card {
  background: var(--card);
  padding: 1.5rem;
  border-radius: 12px;
  transition: transform 0.2s;
}
.card:hover { transform: translateY(-4px); }
.card h3 { margin-top: 0; }
.stack { color: var(--muted); font-size: 0.9rem; }

.links { display: flex; flex-wrap: wrap; gap: 1.5rem; }

footer {
  text-align: center;
  
  :root {
  --bg: #ffffff;
  --text: #1f2937;
  --muted: #6b7280;
  --card: #f3f4f6;
  --accent: #2563eb;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0d1117;
    --text: #e6edf3;
    --muted: #9aa4b2;
    --card: #161b22;
    --accent: #58a6ff;
  }
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }

body {
  margin: 0;
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
}

a { color: var(--accent); text-decoration: none; }
a:hover { text-decoration: underline; }

nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding: 1rem;
  background: var(--bg);
  border-bottom: 1px solid var(--card);
  z-index: 10;
}
nav a { color: var(--text); font-weight: 500; }

.hero { text-align: center; padding: 5rem 1rem 4rem; }
.hero h1 { font-size: clamp(2rem, 6vw, 3.5rem); margin: 0; }
.hero h1 span { color: var(--accent); }
.subtitle { color: var(--muted); font-size: 1.25rem; margin: 0.5rem 0 2rem; }

.btn {
  display: inline-block;
  background: var(--accent);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
}
.btn:hover { text-decoration: none; opacity: 0.9; }

main { max-width: 900px; margin: auto; padding: 0 1.25rem; }
section { padding: 3rem 0; }
h2 { font-size: 1.75rem; margin-top: 0; }

.tags { list-style: none; padding: 0; display: flex; flex-wrap: wrap; gap: 0.6rem; }
.tags li { background: var(--card); padding: 0.4rem 1rem; border-radius: 999px; font-size: 0.95rem; }

.grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.25rem; }
.card { background: var(--card); padding: 1.5rem; border-radius: 12px; transition: transform 0.2s; }
.card:hover { transform: translateY(-4px); }
.card h3 { margin-top: 0; }
.stack { color: var(--muted); font-size: 0.9rem; }

.links { display: flex; flex-wrap: wrap; gap: 1.5rem; }

footer { text-align: center; padding: 2rem 1rem; color: var(--muted); border-top: 1px solid var(--card); }

  padding: 2rem 1rem;
  color: var(--muted);
  border-top: 1px solid var(--card);
}
[style.css](https://github.com/user-attachments/files/35088299/style.css)
