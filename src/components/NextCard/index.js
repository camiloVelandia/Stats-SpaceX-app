import React, {useState, useEffect} from 'react';
import {Section, Title, Figure, Name, Text, Info, Bullet, BulletText} from './styles';

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
      <Figure source={{uri: `${props.image}`}}/>
      <Name>{props.name}</Name>
      <Text>
        {props.details ||
          'Details must be ready in the upcomings days, the information is not provides still.'}
      </Text>
      <Info>
        <Bullet>
          <BulletText>date:</BulletText>
          <BulletText>{date}</BulletText>
        </Bullet>
        <Bullet>
          <BulletText>flight number:</BulletText>
          <BulletText>{props.number}</BulletText>
        </Bullet>
      </Info>
    </Section>
  );
};

export default NextCard;
