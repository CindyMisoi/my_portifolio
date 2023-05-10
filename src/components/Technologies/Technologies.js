import React from 'react';
import { DiReact, DiCss3, DiRuby,DiPostgresql,DiMysql,DiSqllite} from 'react-icons/di';
import {FiFigma} from 'react-icons/fi';
import {AiFillHtml5, AiFillApi} from 'react-icons/ai';
import {SiTailwindcss, SiRubyonrails} from 'react-icons/si';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider/><br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I've worked with a range of technologies in the web development world from Back-end to Design.<br/>
    <List>
      <ListItem>
        <span>
          <DiReact size="3rem"/>
          <AiFillHtml5 size="3rem"/>
          <DiCss3 size="3rem"/>
          <SiTailwindcss size="3rem"/>
        </span>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>Experience with<br/>
            React.js<br/>
            HTML<br/>
            CSS<br/>
            tailwind CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <span>
        <DiRuby size="3rem"/>
        <DiPostgresql size="3rem"/>
        <DiMysql size="3rem"/> 
        <DiSqllite size="3rem"/>
        </span>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>Experience with<br/>
            Ruby<br/>
            Ruby on Rails<br/>
            Postgres<br/>
            SQLite<br/>
            MySQL<br/>
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size="3rem"/>
        <ListContainer>
          <ListTitle>UI/UX</ListTitle>
          <ListParagraph>Experience with<br/>
            Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <AiFillApi size="3rem"/>
        <ListContainer>
          <ListTitle>APIs</ListTitle>
          <ListParagraph>Experience with<br/>
            REST API
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    </SectionText>
  </Section>
);

export default Technologies;
