//import PropTypes from 'prop-types';
import { Buttons, Button } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <Buttons>
      {options.map((option, index) => {
        return (
          <li key={index}>
            <Button type="button" onClick={() => onLeaveFeedback(option)}>
              {option}
            </Button>
          </li>
        );
      })}
    </Buttons>
  );
}
