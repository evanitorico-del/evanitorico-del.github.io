# evanitorico-del.github.io
Mon Portfolio[index.html](https://github.com/user-attachments/files/35088422/index.html)

<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TON NOM – Portfolio</title>
  <meta name="description" content="Portfolio de TON NOM">
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
    <h1>Salut, je suis <span>TON NOM</span></h1>
    <p class="subtitle">TON MÉTIER / TA SPÉCIALITÉ</p>
    <a class="btn" href="#projects">Voir mes projets</a>
  </header>

  <main>
    <section id="about">
      <h2>À propos</h2>
      <p>
        À MODIFIER : présente-toi en 3-4 phrases. Ton parcours, ce qui te
        passionne, ce que tu recherches (stage, alternance, emploi, freelance).
      </p>
    </section>

    <section id="skills">
      <h2>Compétences</h2>
      <ul class="tags">
        <li>HTML</li>
        <li>CSS</li>
        <li>Git / GitHub</li>
        <li>Automatisation</li>
        <li>TA COMPÉTENCE</li>
      </ul>
    </section>

    <section id="projects">
      <h2>Projets</h2>
      <div class="grid">

        <article class="card">
          <h3>NOM DU PROJET 1</h3>
          <p>Description courte du projet et de ce que tu as appris.</p>
          <p class="stack">TECHNOS UTILISÉES</p>
          <a href="https://github.com/evanitorico-del/NOM-DU-REPO">Voir le code →</a>
        </article>

        <article class="card">
          <h3>Automatisation d'ordinateur</h3>
          <p>J'ai automatisé un ordinateur de A à Z : la mise sous tension et l'ouverture des applications sont entièrement automatisées.</p>
          <p class="stack">TECHNOS UTILISÉES</p>
          <a href="https://github.com/evanitorico-del/NOM-DU-REPO">Voir le code →</a>
        </article>

        <article class="card">
          <h3>NOM DU PROJET 3</h3>
          <p>Description courte du projet et de ce que tu as appris.</p>
          <p class="stack">TECHNOS UTILISÉES</p>
          <a href="https://github.com/evanitorico-del/NOM-DU-REPO">Voir le code →</a>
        </article>

      </div>
    </section>

    <section id="contact">
      <h2>Contact</h2>
      <p>Une question, une opportunité ? Écris-moi.</p>
      <p class="links">
        <a href="mailto:TON-EMAIL@exemple.com">TON-EMAIL@exemple.com</a>
        <a href="https://github.com/evanitorico-del">GitHub</a>
        <a href="https://www.linkedin.com/in/TON-PROFIL">LinkedIn</a>
      </p>
    </section>
  </main>

  <footer>
    <p>© 2026 TON NOM</p>
  </footer>

</body>
</html>
[style.css](https://github.com/user-attachments/files/35088428/style.css)
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
