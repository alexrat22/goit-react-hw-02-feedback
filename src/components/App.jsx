import { Component } from 'react';
//import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Container } from './App.styled';

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
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={options} />
        </Section>

        <Section title="Statistics">
          <Notification message="There is no feedback" />
        </Section>
      </Container>
    );
  }
}

export default App;
