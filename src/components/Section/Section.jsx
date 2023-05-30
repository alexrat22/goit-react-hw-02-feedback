//import PropTypes from 'prop-types';
//import {} from './Section.styled';

export default function Section({ title, children }) {
  return (
    <Section>
      <h2>{title}</h2>
      {children}
    </Section>
  );
}
