import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";
import { Section } from "./Section/Section";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleButtonClick = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
  };

handlerClickGood = () => {
  this.setState(prevState => ({
    good: prevState.good + 1,
  }))
};

handlerClickNeutral = () => {
  this.setState(prevState => ({
    neutral: prevState.neutral + 1,
  }))
};

handlerClickBad = () => {
  this.setState(prevState => ({
    bad: prevState.bad + 1,
  }))
};

countTotalFeedback = () => {
const {good, neutral, bad} = this.state;
return good + neutral + bad;
};

countPositiveFeedbackPercentage = () => {
  const {good} = this.state;
  const total = this.countTotalFeedback();
  return total === 0 ? 0 : Math.round((good / total) * 100);
};


  render () {
const total = this.countTotalFeedback();
const positiveFeedbackPer = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Section title="Please leave feedback">
            <Feedback 
              onLeaveFeedback = {this.handleButtonClick}
              options={["good", "neutral", "bad"]}
            />
          </Section>  
          <Section title="Statistics">
            <Statistics 
              good = {this.state.good}
              neutral = {this.state.neutral}
              bad = {this.state.bad}
              totalFeedback = {total}
              positiveFeedbackPer = {positiveFeedbackPer}
            />        
          </Section>
          
      </div>
    );
  }
};
