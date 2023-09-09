import { Component } from "react";
import { Feedback } from "./Feedback/Feedback";
import { Statistics } from "./Statistics/Statistics";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
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

  render () {
    return (
      <div>
        <Feedback 
        onClickGood = {this.handlerClickGood}
        onClickNeutral = {this.handlerClickNeutral}
        onClickBad = {this.handlerClickBad}
        />
        <Statistics 
        onGood = {this.state.good}
        onNautral = {this.state.neutral}
        onBad = {this.state.bad}
        />
      </div>
    );
  }
};
