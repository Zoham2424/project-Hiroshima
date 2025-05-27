import React, { useState } from 'react';

interface AboutInfo {
  title: string;
  description: string;
  whoWeAre: string;
  dna: string;

}

const aboutContent: AboutInfo = {
  title: '💡 About Us',
  description: `They say legends aren't born they're forged.
Hiroshima Esports isn't just a name. It's a warning. A signal. A call to war.

We were born from chaos.
A squad who stumbled into something more than just matches we found purpose.
Now, over a decade later, we’re still here putting our hearts in every game.`,
  whoWeAre: `
- A war-ready squad with gamer souls
- Strategists disguised as players
- A volatile mix of passion, madness, and precision`,
  dna: `

- 🕹️ We train like it’s the finals.
- 🤝 We laugh, fight, win, lose — but never quit.
- 🌍 We play for ourselves, for our community, and for everyone who still believes a team can change the game.`

};

const AboutUs = () => {
  const [aboutData] = useState(aboutContent);

  return (
    <>
      <div className="header">
        <p>{aboutData.title}</p>
      </div>

      <div className="qa-container">
        <section>
          <h2>Description</h2>
          <p>{aboutData.description}</p>
        </section>

        <section>
          <h2>Who Are We?</h2>
          <ul> {aboutData.whoWeAre
              .split('\n')
              .filter(line => line.trim() !== '')
              .map(line => (
                <li key={line.trim()}>{line.replace(/^- /, '')}</li> ))}
          </ul>
        </section>
        <section>
          <h2>Hiroshima DNA</h2>
          <ul>
            {aboutData.dna
              .split('\n')
              .filter(line => line.trim() !== '')
              .map(line => (
                <li key={line.trim()}>{line.replace(/^- /, '')}</li>
              ))}
          </ul>
        </section>

        <section className="social">
          <h2>Connect With Us</h2>
          <h2>Follow us on:</h2>
          <ul>
            <li><a href="https://twitter.com" target="_blank" > 🐦Twitter</a></li>
            <li><a href="https://instagram.com" target="_blank" > 📸 Instagram</a></li>
            <li><a href="https://twitch.tv" target="_blank" > 🎮💜 Twitch</a></li>
          </ul>
        </section>
      </div>
    </>
  );
};

export default AboutUs;