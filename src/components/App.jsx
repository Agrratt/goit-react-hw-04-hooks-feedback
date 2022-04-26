import { useState } from "react";
import FeedbackOptions from 'components/feedback/FeedbackOptions/FeedbackOptions';
import Statistics from 'components/feedback/Statistics/Statistics';
import Section from 'components/feedback/Section/Section';
import Notification from 'components/feedback/Notification';
import { Container } from 'components/App.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

//как редактировать это:
      const label = Object.keys(this.state);

  //не понимаю какой сэт заменить options
  const onHandleIncrement = (options) => {
    this.setState(prevState => {
      return { [options]: prevState[options] + 1 }
    });
  }

  return (
    <Container>
        <Section title='Please leave feedback'>
          <FeedbackOptions
            onLeaveFeedback={onHandleIncrement}
            options={label} />
            
        </Section>
        
        <Section title='Statistics'>

          {this.countTotalFeedback() > 0 ? 
          <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positive={this.countPositiveFeedbackPercentage() } /> :
            <Notification title='There is no feedback' />} 
          
        </Section>
        
    </Container>
  )

}

class OldApp extends Component {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0
  // };

  // onHandleIncrement = (options) => {
  //   this.setState(prevState => {
  //     return { [options]: prevState[options] + 1 }
  //   });
  // }

  countTotalFeedback = () => {
    return  Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

    countPositiveFeedbackPercentage = () => {
      return Math.round(100 / (this.countTotalFeedback() / this.state.good))
    };

  // render() {
      // const { good, neutral, bad } = this.state;
      // const label = Object.keys(this.state);

    // return (
    // <Container>
    //     <Section title='Please leave feedback'>
    //       <FeedbackOptions
    //         onLeaveFeedback={this.onHandleIncrement}
    //         options={label} />
            
    //     </Section>
        
    //     <Section title='Statistics'>

    //       {this.countTotalFeedback() > 0 ? 
    //       <Statistics
    //           good={good}
    //           neutral={neutral}
    //           bad={bad}
    //           total={this.countTotalFeedback()}
    //           positive={this.countPositiveFeedbackPercentage() } /> :
    //         <Notification title='There is no feedback' />} 
          
    //     </Section>
        
    // </Container>
  // );
  // }
  
};

// export default App;