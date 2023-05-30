//import PropTypes from 'prop-types';
import { SectionStyle, Title } from './Section.styled';

export default function Section({ title, children }) {
  return (
    <SectionStyle>
      <Title>{title}</Title>
      {children}
    </SectionStyle>
  );
}
