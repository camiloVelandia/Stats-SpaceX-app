import React, {useState, useEffect} from 'react';
import {Section, Title, Figure, Name, Text, Info, Bullet} from './styles';

const NextCard = (props) => {
  const [date, setDate] = useState('');

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const today = new Date(props.date);

  useEffect(() => {
    setDate(today.toLocaleDateString('en-US'));
  }, []);

  return (
    <Section>
      <Title>Next missions</Title>
      {/* <Figure>
        <img src={props.image || '/images/escudo.png'} />
      </Figure>
      <Name>{props.name}</Name>
      <Text>
        {props.details ||
          'Details must be ready in the upcomings days, the information is not provides still.'}
      </Text>
      <Info>
        <Bullet>
          <p>date:</p>
          <p>{date}</p>
        </Bullet>
        <Bullet>
          <p>flight number:</p>
          <p>{props.number}</p>
        </Bullet>
      </Info> */}
    </Section>
  );
};

export default NextCard;
