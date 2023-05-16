import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, I am Cindy 👋<br/>
        This is my personal Portfolio
      </SectionTitle>
      <SectionText>
      I am a software developer, specializing in the web applications development arena. <br/>
      </SectionText>
      <Button onClick={()=>window.location = 'https://www.linkedin.com/in/cynthiamisoi/'}>Learn More...</Button>
    </LeftSection>
  </Section>
);

export default Hero;