import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 5, text: 'Open Source Projects'},
  { number: 225, text: 'Github Repos', },
  { number: 46, text: 'Github Stars', }
];

const Acomplishments = () => (
 <Section>
  <SectionDivider/><br/>
  <SectionTitle>Personal Achievements</SectionTitle>
  <Boxes>
    {
      data.map((card,index)=>(
        <Box
        key={index}
        >
          <BoxNum>{card.number}+</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))
    }
  </Boxes>
 </Section>
);

export default Acomplishments;
