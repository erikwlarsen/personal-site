import React from 'react';
import { openInNewTab } from '../util/util.js';

const githubUrl = 'https://github.com/erikwlarsen';
const linkedinUrl = 'https://www.linkedin.com/in/erik-w-larsen/';
const resumeUrl = 'https://drive.google.com/file/d/15GDPEiudTMtORyWt-16G8lkSeTyRAJ51/view?usp=sharing';

const bio = `Hi, I'm Erik. I'm a full stack JavaScript engineer based in New York City. I specialize in React-Redux, Node, and relational databases. In the few waking hours when I am not furiously tapping away at my laptop, you might find me reading pretentious books, jogging over the Williamsburg Bridge, touching old rocks at the Museum of Natural History, or annoying people with my limited plant identification skills.`

const About = (props) => (
  <div>
    <ul id="about-list">
      <li id="bio">{bio}</li>
      <li className="external-link" onClick={() => openInNewTab(githubUrl)}>github</li>
      <li className="external-link" onClick={() => openInNewTab(resumeUrl)}>resume</li>
      <li className="external-link" onClick={() => openInNewTab(linkedinUrl)}>linkedin</li>
    </ul>
  </div>
);


export default About;
