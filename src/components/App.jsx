import { Component } from 'react';
//import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
//import Section from './Section/Section';
//import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  //countTotalFeedback();

  //countPositiveFeedbackPercentage();

  render() {
    const options = Object.keys(this.state);
    return (
      <>
        <FeedbackOptions options={options} />
      </>
    );
  }
}

export default App;
