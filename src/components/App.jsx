import React, { Component } from "react";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";
import Section from "./Section";
import Notification from "./Notification"; 

export class App extends Component {
  state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    onBtnClick = optionName => {
        this.setState(prevState => ({
            [optionName]: prevState[optionName] +1,
        }))
    }

    countTotalFeedback = () => {
       return (this.state.good + this.state.neutral +  this.state.bad)
    }

    countPositiveFeedbackPercentage = () => {
    return `${Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    )}%`;}


    render() {
        return (
            <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: '#010101'
      }}
    >
            <Section title={"Please leave feedback"}>
                <FeedbackOptions
                    options={Object.keys(this.state)}
                    onLeaveFeedback={this.onBtnClick}
                />
            </Section>    
                <Section
                    title={"Statistics"}>
                {this.countTotalFeedback() !== 0 ? (
                    <Statistics
                        good={this.state.good}
                        neutral={this.state.neutral}
                        bad={this.state.bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    />) : 
                    (<Notification message={"There is no feedback"}/>)}
                </Section>
                </div>
        )
    }
};
