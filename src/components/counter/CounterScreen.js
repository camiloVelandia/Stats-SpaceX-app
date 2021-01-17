import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native'
import {Container, Overlay, Box, Title, NumberContainer, Number, NumberTime, TimerContainer, CounterInfo, CounterInfoItem, CounterInfoType} from './styles'
import getNextLaunch from '../../services/getNextLaunch';
import getOneRocket from '../../services/getOneRocket';

const CounterScreen = () => {

  const [nextlaunch, setNextlaunch] = useState({});
  const [rocketUsed, setRocketUsed] = useState({});
  const [date, setDate] = useState('');

  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    getNextLaunch().then((data) => {
      setNextlaunch({...data});
      if (nextlaunch.rocket) {
        return getOneRocket(nextlaunch.rocket).then((data) =>
          setRocketUsed({...data}),
        );
      }
    });
  }, [nextlaunch]);

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    setDate(nextlaunch.date_local);
  }, [nextlaunch]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval, index) => {
    timerComponents.push(
      <NumberContainer key={index}>
        <Number>{timeLeft[interval]}</Number>
        <NumberTime>{interval}</NumberTime>
      </NumberContainer>,
    );
  });



  return (
    <Container source={require('statSpaceX/src/assets/images/Dragon.jpg')}>
      <Box>
        <Title>Up Next</Title>

        <TimerContainer>
            {timerComponents.length ? (
              timerComponents
            ) : (
              <Text>Waiting for next launch</Text>
            )}
          </TimerContainer>
        <CounterInfo>
          <CounterInfoItem>
            <CounterInfoType>mission: </CounterInfoType>
            {nextlaunch.name}
          </CounterInfoItem>
          <CounterInfoItem>
            <CounterInfoType>Rocket: </CounterInfoType>
            {rocketUsed.name || 'falcon'}
          </CounterInfoItem>
        </CounterInfo>
      </Box>
      <Overlay/>
    </Container>
  );
};


export default CounterScreen;