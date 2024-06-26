import React from 'react';

import profilePic from 'assets/images/profile.webp';

import { StyledAboutSection, StyledPic, StyledText } from './styles';

const About = () => {
  const skills = [
    'Node.js',
    'JavaScript (ES6+)',
    'Typescript',
    'Nest.js',
    'MongoDB',
    'React',
    'Vue',
    'Angular',
    'RxJS',
    'Jest & Playwright',
    'Webpack',
    'Docker',
  ];

  return (
    <StyledAboutSection id='about'>
      <h2 className='numbered-heading'>About Me</h2>

      <div className='inner'>
        <StyledText>
          <div>
            <p>
              Hello! My name is Evgenii and I enjoy creating things that live on
              the internet. My interest in web development started back in 2013
              when I decided to try making personal blog — turns out hacking
              together a custom reblog button taught me a lot about HTML &amp;
              CSS!
            </p>

            <p>
              Here are a few technologies I&apos;ve been working with recently:
            </p>
          </div>

          <ul className='skills-list'>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className='wrapper'>
            <img
              className='img'
              alt='Evgenii Kalkutin profile image'
              src={profilePic}
              width={300}
              height={300}
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
