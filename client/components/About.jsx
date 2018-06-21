import React from 'react';

const openInNewTab = (url) => {
  const win = window.open(url, '_blank');
  win.focus();
}

const githubUrl = 'https://github.com/erikwlarsen';
const linkedinUrl = 'https://www.linkedin.com/in/erik-w-larsen/';
const resumeUrl = 'https://drive.google.com/file/d/15GDPEiudTMtORyWt-16G8lkSeTyRAJ51/view?usp=sharing';

const About = (props) => (
  <div>
    <h3>about</h3>
    <ul id="about-list">
      <li>bio
        <p id="bio">deeyyyooooo</p>
      </li>
      <li onClick={() => openInNewTab(githubUrl)}>github</li>
      <li onClick={() => openInNewTab(resumeUrl)}>resume</li>
      <li onClick={() => openInNewTab(linkedinUrl)}>linkedin</li>
    </ul>
  </div>
);


export default About;
