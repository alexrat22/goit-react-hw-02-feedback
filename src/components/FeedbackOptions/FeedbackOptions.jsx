//import PropTypes from 'prop-types';
import { Buttons, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options }) {
  return (
    <Buttons>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <Button type="button">{option}</Button>
          </li>
        );
      })}
    </Buttons>
  );
}
