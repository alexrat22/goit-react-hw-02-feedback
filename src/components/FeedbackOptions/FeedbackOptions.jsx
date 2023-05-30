//import PropTypes from 'prop-types';
//import { } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options }) {
  return (
    <ul>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <button type="button">{option}</button>
          </li>
        );
      })}
    </ul>
  );
}
