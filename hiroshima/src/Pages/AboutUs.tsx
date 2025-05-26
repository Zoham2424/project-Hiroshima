import React, { useState } from 'react';

interface AboutInfo {
  title: string;
  description: string;
}

const aboutContent: AboutInfo = {
  title: '🧩 About the League',
  description:
    "We've known each other for over 10 years and just wanted to try a new game. It quickly turned into something more — a fun, chaotic, and heroic kind of journey. With Marvel-style vibes and inside jokes, the League is all about friendship, fantasy, and laughter.",
};

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(aboutContent);

  return (
    <div>
      <h1>{aboutData.title}</h1>
      <p>{aboutData.description}</p>
    </div>
  );
};

export default AboutUs;